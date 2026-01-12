/**
 * Flipdish Chatbot AI Service
 * 
 * Handles OpenAI chat completions with tool calling for food ordering.
 * This is the core AI logic that powers the chatbot.
 */

import OpenAI from 'openai';
import flipdishApi, { FlipdishApiError } from './flipdish-api';
import type { MenuItem } from './flipdish-types';

// ============================================
// TYPES
// ============================================

export interface ChatMessage {
    role: 'user' | 'assistant' | 'system' | 'tool';
    content: string;
    tool_call_id?: string;
    tool_calls?: any[];
}

export interface ChatRequest {
    messages: ChatMessage[];
    chatId: string;
    token?: string;
}

export interface ChatResponse {
    message: ChatMessage;
    toolCalls?: any[];
    chatId: string;
    allMessages?: ChatMessage[];
    authRequired?: boolean;
    tokenExpired?: boolean;
    orderSubmitted?: boolean;
    orderId?: string;
    leadTimePrompt?: string;
}

// ============================================
// TOOL DEFINITIONS
// ============================================

const tools: OpenAI.Chat.Completions.ChatCompletionTool[] = [
    {
        type: 'function',
        function: {
            name: 'search_menu',
            description: 'Searches the menu for items. Use when user asks about food items.',
            parameters: {
                type: 'object',
                properties: {
                    searchTerms: {
                        type: 'array',
                        items: { type: 'string' },
                        description: 'Search terms (e.g., ["burger", "pizza"])',
                    },
                },
                required: ['searchTerms'],
            },
        },
    },
    {
        type: 'function',
        function: {
            name: 'show_items',
            description: 'Display interactive menu item cards. ALWAYS use this after search_menu.',
            parameters: {
                type: 'object',
                properties: {
                    menuItemIds: {
                        type: 'array',
                        items: { type: 'number' },
                        description: 'Array of menuItemIds from search_menu response',
                    },
                },
                required: ['menuItemIds'],
            },
        },
    },
    {
        type: 'function',
        function: {
            name: 'add_to_basket',
            description: 'Adds menu items to the basket. Use exact menuItemId from search_menu.',
            parameters: {
                type: 'object',
                properties: {
                    menuItemId: {
                        type: 'number',
                        description: 'The menuItemId from search_menu response',
                    },
                    quantity: {
                        type: 'number',
                        description: 'Quantity to add (default: 1)',
                    },
                },
                required: ['menuItemId'],
            },
        },
    },
    {
        type: 'function',
        function: {
            name: 'get_basket_summary',
            description: 'Gets the current basket summary with all items and total.',
            parameters: {
                type: 'object',
                properties: {},
                required: [],
            },
        },
    },
    {
        type: 'function',
        function: {
            name: 'remove_from_basket',
            description: 'Removes items from the basket.',
            parameters: {
                type: 'object',
                properties: {
                    menuItemId: {
                        type: 'number',
                        description: 'The menuItemId to remove',
                    },
                    quantity: {
                        type: 'number',
                        description: 'Quantity to remove (default: 1)',
                    },
                },
                required: ['menuItemId'],
            },
        },
    },
    {
        type: 'function',
        function: {
            name: 'clear_basket',
            description: 'Clears all items from the basket.',
            parameters: {
                type: 'object',
                properties: {},
                required: [],
            },
        },
    },
    {
        type: 'function',
        function: {
            name: 'submit_order',
            description: 'Submits the order for payment. Requires authentication.',
            parameters: {
                type: 'object',
                properties: {},
                required: [],
            },
        },
    },
];

// ============================================
// CHATBOT SERVICE
// ============================================

export class ChatbotService {
    private openai: OpenAI;

    constructor(apiKey: string) {
        this.openai = new OpenAI({
            apiKey,
            dangerouslyAllowBrowser: true // Required for client-side usage
        });
    }

    /**
     * System prompt for the food ordering assistant
     */
    getSystemPrompt(): string {
        return `You are a food ordering assistant. Help users search menus, add items to their basket, and place orders.

Tools available:
- search_menu: Search for food items
- show_items: Display interactive menu item cards (ALWAYS use after search_menu)
- add_to_basket: Add items (use exact menuItemId from search_menu)
- remove_from_basket: Remove items
- get_basket_summary: Show basket contents
- clear_basket: Empty the basket
- submit_order: Submit the order (requires authentication)

CRITICAL RULES:
1. After search_menu, ALWAYS call show_items with ALL menuItemIds
2. NEVER describe menu items in text - show_items displays them
3. NEVER claim an order was placed without calling submit_order
4. If submit_order returns AUTHENTICATION_REQUIRED, tell user to sign in`;
    }

    /**
     * Process a chat message and execute any tool calls
     */
    async chat(request: ChatRequest): Promise<ChatResponse> {
        const { messages, chatId, token } = request;

        console.log('\n' + '='.repeat(60));
        console.log('🤖 CHATBOT REQUEST');
        console.log('='.repeat(60));

        const basketContext = await this.buildBasketContextMessage(chatId, token);
        const modelMessages = this.insertContextMessage(messages, basketContext);

        // Track search results for validation
        let searchResults: MenuItem[] = this.extractSearchResultsFromHistory(messages);

        // Initial OpenAI call
        const response = await this.openai.chat.completions.create({
            model: 'gpt-4o',
            messages: modelMessages as any,
            tools,
            tool_choice: 'auto',
        });

        let responseMessage = response.choices[0].message;
        const toolCalls = responseMessage.tool_calls;

        if (!toolCalls || toolCalls.length === 0) {
            // No tool calls - return direct response
            return {
                message: {
                    role: 'assistant',
                    content: responseMessage.content || '',
                },
                chatId,
            };
        }

        // Execute tool calls
        console.log(`🔧 Executing ${toolCalls.length} tool calls`);

        const functionMessages: ChatMessage[] = [
            ...messages,
            responseMessage as any,
        ];

        let searchMenuCalled = false;
        let showItemsCalled = false;
        let newSearchResults: MenuItem[] = [];
        let orderSubmitted = false;
        let orderId: string | undefined;
        let leadTimePrompt: string | undefined;

        for (const toolCall of toolCalls) {
            if (toolCall.type !== 'function') continue;

            const functionName = toolCall.function.name;
            const functionArgs = JSON.parse(toolCall.function.arguments);

            console.log(`→ ${functionName}(${JSON.stringify(functionArgs)})`);

            if (functionName === 'search_menu') searchMenuCalled = true;
            if (functionName === 'show_items') showItemsCalled = true;

            let result: any;

            try {
                result = await this.executeTool(
                    functionName,
                    functionArgs,
                    chatId,
                    token,
                    searchResults
                );

                // Track search results
                if (functionName === 'search_menu' && result.data?.items) {
                    newSearchResults = result.data.items;
                    searchResults = newSearchResults;
                }

                if (functionName === 'submit_order' && result?.status === 200) {
                    orderSubmitted = true;
                    orderId = result?.data?.order?.orderId;
                    leadTimePrompt = result?.data?.leadTimePrompt;
                }
            } catch (error: any) {
                result = this.handleToolError(error);
            }

            functionMessages.push({
                role: 'tool',
                tool_call_id: toolCall.id,
                content: JSON.stringify(result),
            });
        }

        // Auto-inject show_items if search_menu was called but show_items wasn't
        if (searchMenuCalled && !showItemsCalled && newSearchResults.length > 0) {
            console.log('🔧 Auto-injecting show_items');
            const menuItemIds = newSearchResults.map(item => item.menuItemId);

            const syntheticToolCall = {
                id: 'call_auto_show_items',
                type: 'function' as const,
                function: {
                    name: 'show_items',
                    arguments: JSON.stringify({ menuItemIds }),
                },
            };

            responseMessage.tool_calls = responseMessage.tool_calls || [];
            responseMessage.tool_calls.push(syntheticToolCall);

            functionMessages.push({
                role: 'tool',
                tool_call_id: syntheticToolCall.id,
                content: JSON.stringify({
                    status: 200,
                    displayType: 'menu_cards',
                    items: newSearchResults,
                }),
            });
        }

        // Get final response
        const refreshedBasketContext = await this.buildBasketContextMessage(chatId, token);
        const modelFunctionMessages = this.insertContextMessage(functionMessages, refreshedBasketContext);

        const finalResponse = await this.openai.chat.completions.create({
            model: 'gpt-4o',
            messages: modelFunctionMessages as any,
        });

        const finalMessage = finalResponse.choices[0].message;
        const orderConfirmation = this.buildOrderConfirmation(functionMessages);
        if ((!finalMessage.content || !finalMessage.content.trim()) && orderConfirmation) {
            finalMessage.content = orderConfirmation;
        }

        // Check for auth requirements
        const { authRequired, tokenExpired } = this.checkAuthStatus(functionMessages);

        return {
            message: {
                role: 'assistant',
                content: finalMessage.content || '',
            },
            toolCalls,
            chatId,
            allMessages: [...functionMessages, finalMessage as any],
            authRequired,
            tokenExpired,
            orderSubmitted,
            orderId,
            leadTimePrompt,
        };
    }

    /**
     * Execute a single tool call
     */
    private async executeTool(
        name: string,
        args: any,
        chatId: string,
        token?: string,
        searchResults: MenuItem[] = []
    ): Promise<any> {
        switch (name) {
            case 'search_menu': {
                const items = await flipdishApi.searchMenu(
                    chatId,
                    args.searchTerms[0],
                    token
                );
                return { status: 200, data: { items } };
            }

            case 'show_items': {
                const requestedIds = args.menuItemIds || [];
                const items = searchResults.filter(item =>
                    requestedIds.includes(item.menuItemId)
                );
                return { status: 200, displayType: 'menu_cards', items };
            }

            case 'add_to_basket': {
                // Validate menuItemId against search results
                const validIds = searchResults.map(item => item.menuItemId);
                if (validIds.length > 0 && !validIds.includes(args.menuItemId)) {
                    return {
                        error: `Invalid menuItemId. Valid IDs: ${validIds.join(', ')}`,
                    };
                }

                return await flipdishApi.updateBasket(
                    chatId,
                    {
                        addMenuItems: [{
                            menuItemId: args.menuItemId,
                            quantity: args.quantity || 1,
                        }],
                    },
                    token
                );
            }

            case 'remove_from_basket': {
                const basket = await flipdishApi.getBasket(chatId, token);
                const items = basket.basketMenuItems || [];
                const item = items.find(i => i.menuItemId === args.menuItemId);

                if (item && item.quantity <= (args.quantity || 1) && items.length === 1) {
                    await flipdishApi.clearBasket(chatId, token);
                    return { status: 200, message: 'Basket cleared' };
                }

                return await flipdishApi.updateBasket(
                    chatId,
                    {
                        removeMenuItems: [{
                            menuItemId: args.menuItemId,
                            quantity: args.quantity || 1,
                        }],
                    },
                    token
                );
            }

            case 'clear_basket': {
                await flipdishApi.clearBasket(chatId, token);
                return { status: 200, message: 'Basket cleared' };
            }

            case 'get_basket_summary': {
                const basket = await flipdishApi.getBasket(chatId, token);
                return { status: 200, data: basket };
            }

            case 'submit_order': {
                if (!token) {
                    return {
                        error: 'AUTHENTICATION_REQUIRED',
                        message: 'Please sign in to place your order.',
                    };
                }

                const result = await flipdishApi.submitOrder(chatId, token);
                if (result.success) {
                    return {
                        status: 200,
                        data: {
                            order: { orderId: result.orderId },
                            leadTimePrompt: result.leadTimePrompt,
                        },
                    };
                }
                throw new Error(result.error || 'Order failed');
            }

            default:
                return { error: `Unknown tool: ${name}` };
        }
    }

    /**
     * Handle tool execution errors
     */
    private handleToolError(error: any): any {
        if (error instanceof FlipdishApiError) {
            if (error.errorCode === 'TOKEN_EXPIRED') {
                return {
                    error: 'TOKEN_EXPIRED',
                    message: 'Your session has expired. Please sign in again.',
                };
            }
            if (error.message?.includes('closed')) {
                return {
                    error: 'RESTAURANT_CLOSED',
                    message: 'The restaurant is currently closed.',
                };
            }
            return { error: error.userMessage || error.message };
        }

        if (error.message?.includes('AUTHENTICATION_REQUIRED')) {
            return {
                error: 'AUTHENTICATION_REQUIRED',
                message: 'Please sign in to place your order.',
            };
        }

        return { error: error.message };
    }

    /**
     * Extract search results from conversation history
     */
    private extractSearchResultsFromHistory(messages: ChatMessage[]): MenuItem[] {
        for (let i = messages.length - 1; i >= 0; i--) {
            const msg = messages[i];
            if (msg.role === 'tool' && msg.content) {
                try {
                    const parsed = JSON.parse(msg.content);
                    if (parsed.data?.items && Array.isArray(parsed.data.items)) {
                        return parsed.data.items;
                    }
                } catch {
                    // Not a valid JSON response
                }
            }
        }
        return [];
    }

    private insertContextMessage(messages: ChatMessage[], context?: ChatMessage | null): ChatMessage[] {
        if (!context) {
            return messages;
        }

        if (messages.length === 0) {
            return [context];
        }

        if (messages[0].role === 'system') {
            return [messages[0], context, ...messages.slice(1)];
        }

        return [context, ...messages];
    }

    private async buildBasketContextMessage(chatId: string, token?: string): Promise<ChatMessage | null> {
        try {
            const basket = await flipdishApi.getBasket(chatId, token);
            const items = basket.basketMenuItems || [];
            const total = basket.totalPrice ?? 0;

            const lines = items.map(item => {
                const itemTotal = item.totalPrice ?? item.unitPrice ?? 0;
                return `- ${item.quantity} x ${item.name} (${itemTotal.toFixed(2)} EUR)`;
            });

            const summary = lines.length > 0
                ? `${lines.join('\n')}\nTotal: ${total.toFixed(2)} EUR`
                : 'Basket is empty.';

            return {
                role: 'system',
                content: `Basket context (read-only):\n${summary}`,
            };
        } catch (error) {
            console.warn('⚠️ Failed to load basket context:', error);
            return null;
        }
    }

    private buildOrderConfirmation(messages: ChatMessage[]): string | null {
        for (let i = messages.length - 1; i >= 0; i--) {
            const msg = messages[i];
            if (msg.role !== 'tool' || !msg.content) continue;

            try {
                const parsed = JSON.parse(msg.content);
                const prompt = parsed?.data?.leadTimePrompt;
                if (prompt) {
                    return this.normalizeLeadTimePrompt(prompt);
                }

                const orderId = parsed?.data?.order?.orderId;
                if (orderId) {
                    return `Thanks! Your order has been placed.\nOrder ID: ${orderId}`;
                }
            } catch {
                continue;
            }
        }

        return null;
    }

    private normalizeLeadTimePrompt(prompt: string): string {
        const trimmed = prompt.replace(/^Tell the user:\s*/i, '').trim();
        const unquoted = trimmed.replace(/^"+|"+$/g, '');
        return unquoted || 'Thanks! Your order has been placed.';
    }

    /**
     * Check for authentication requirements in tool responses
     */
    private checkAuthStatus(messages: ChatMessage[]): {
        authRequired: boolean;
        tokenExpired: boolean;
    } {
        let authRequired = false;
        let tokenExpired = false;

        for (const msg of messages) {
            if (msg.role === 'tool' && msg.content) {
                try {
                    const parsed = JSON.parse(msg.content);
                    if (parsed.error === 'AUTHENTICATION_REQUIRED') {
                        authRequired = true;
                    }
                    if (parsed.error === 'TOKEN_EXPIRED') {
                        tokenExpired = true;
                    }
                } catch {
                    if (msg.content.includes('TOKEN_EXPIRED')) {
                        tokenExpired = true;
                    }
                }
            }
        }

        return { authRequired, tokenExpired };
    }
}

// Factory function
export function createChatbotService(apiKey: string): ChatbotService {
    return new ChatbotService(apiKey);
}
