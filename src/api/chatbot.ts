/**
 * Flipdish Chatbot AI Service
 * 
 * Handles OpenAI chat completions with tool calling for food ordering.
 * This is the core AI logic that powers the chatbot.
 */

import OpenAI from 'openai';
import flipdishApi, { FlipdishApiError } from './flipdish-api';
import type { BasketSummary, MenuItem } from './flipdish-types';

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
            name: 'verify_option_selection',
            description: 'Verifies if a specific option selection is valid for a given item option set.',
            parameters: {
                type: 'object',
                properties: {
                    menuItemId: { type: 'number' },
                    optionSetId: { type: 'string', description: 'The exact name of the option set (e.g. "Choose your base")' },
                    selectedOption: { type: 'string', description: 'The exact name of the selected option (e.g. "Brown Rice")' }
                },
                required: ['menuItemId', 'optionSetId', 'selectedOption']
            }
        }
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
                    optionSelections: {
                        type: 'array',
                        description: 'List of selected options for the item',
                        items: {
                            type: 'object',
                            properties: {
                                optionSetId: {
                                    type: 'string',
                                    description: 'The exact Name of the Option Set (e.g., "Choose your base")',
                                },
                                selectedOptions: {
                                    type: 'array',
                                    items: { type: 'string' },
                                    description: 'List of exact Names of the selected options (e.g., ["Brown Rice"])',
                                },
                            },
                            required: ['optionSetId', 'selectedOptions'],
                        },
                    },
                },
                required: ['menuItemId'],
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
                    optionSelections: {
                        type: 'array',
                        description: 'List of options to remove (if removing a specific customization)',
                        items: {
                            type: 'object',
                            properties: {
                                optionSetId: {
                                    type: 'string',
                                    description: 'The exact Name of the Option Set',
                                },
                                selectedOptions: {
                                    type: 'array',
                                    items: { type: 'string' },
                                    description: 'List of exact Names of the selected options',
                                },
                            },
                            required: ['optionSetId', 'selectedOptions'],
                        },
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
- verify_option_selection: Verify if an option choice is valid (Use BEFORE adding to basket)
- add_to_basket: Add items (use exact menuItemId and Validated Option Selections)
- remove_from_basket: Remove items (specify options if removing a specific customization)
- clear_basket: Empty the basket
- submit_order: Submit the order (requires authentication)

CRITICAL RULES:
1. **Menu Display**: After search_menu, ALWAYS call show_items with ALL menuItemIds. NEVER describe items in text.
2. **Option Selection**:
   - When a user selects an item with options (e.g. "I want the Burrito"), ask for their choices based on the Option Sets.
   - **Branching Options**: If an option set has a "Next Option Set" (e.g. "Choose your base" -> "Choose Your Protein"), ask for the first set, wait for the user to answer, and THEN ask for the next set. DO NOT ask for all options at once.
   - **Text-Based Selection**: You must use the EXACT names of Option Sets and Options from the menu data (case-sensitive).
   - **Validation**: Before calling add_to_basket, call verify_option_selection for EACH choice to ensure it matches the menu data exactly.
3. **Adding to Basket**:
   - Only call add_to_basket when you have configured all required option sets.
   - Construct the \`optionSelections\` array carefully using the verified text names.
4. **Order Submission**:
   - NEVER claim an order was placed without calling submit_order.
   - If submit_order returns AUTHENTICATION_REQUIRED, tell user to sign in.`;
    }

    /**
     * Format menu items into context for the AI to understand available items
     */
    formatMenuContext(menuItems: MenuItem[]): string {
        if (!menuItems || menuItems.length === 0) {
            return '';
        }

        // Group items by section for better organization
        const sections = new Map<string, MenuItem[]>();
        for (const item of menuItems) {
            const section = item.menuSectionName || 'Other';
            if (!sections.has(section)) {
                sections.set(section, []);
            }
            sections.get(section)!.push(item);
        }

        let menuText = '\n\n--- AVAILABLE MENU ---\n';
        menuText += 'The following items are available for ordering:\n\n';

        for (const [section, items] of sections) {
            menuText += `**${section}**\n`;
            for (const item of items) {
                const price = typeof item.price === 'number' ? ` - €${item.price.toFixed(2)}` : '';
                menuText += `- ${item.name} (ID: ${item.menuItemId})${price}\n`;
                if (item.description) {
                    menuText += `  ${item.description}\n`;
                }
                // Add option sets to context so the AI knows the names
                if (item.menuItemOptionSets && item.menuItemOptionSets.length > 0) {
                    menuText += `  Options:\n`;
                    for (const os of item.menuItemOptionSets) {
                        menuText += `    - Set: "${os.name}" (Min: ${os.minSelectCount}, Max: ${os.maxSelectCount})\n`;
                        if (os.menuItemOptionSetItems) {
                            const optionNames = os.menuItemOptionSetItems.map(o => `"${o.name}"`).join(', ');
                            menuText += `      Choices: ${optionNames}\n`;
                        }
                    }
                }
            }
            menuText += '\n';
        }

        menuText += '--- END MENU ---\n';
        menuText += '\nUse these menuItemIds and EXACT Option Names when the user wants to add items to their basket.\n';

        return menuText;
    }

    /**
     * Process a chat message and execute any tool calls
     */
    async chat(request: ChatRequest): Promise<ChatResponse> {
        const { messages, chatId, token } = request;

        console.log('\n' + '='.repeat(60));
        console.log('🤖 CHATBOT REQUEST');
        console.log('='.repeat(60));

        const { message: basketContext, basket } = await this.loadBasketContext(chatId, token);
        const modelMessages = this.insertContextMessage(messages, basketContext);

        // Track search results for validation
        let searchResults: MenuItem[] = this.extractSearchResultsFromHistory(messages);

        const lastUserMessage = this.getLastUserMessage(messages);
        if (lastUserMessage && this.isCheckoutIntent(lastUserMessage)) {
            if (!token) {
                return {
                    message: { role: 'assistant', content: '' },
                    chatId,
                    authRequired: true,
                    tokenExpired: false,
                };
            }

            if (!basket || !basket.basketMenuItems || basket.basketMenuItems.length === 0) {
                return {
                    message: { role: 'assistant', content: 'Your basket is empty. Please add items first.' },
                    chatId,
                };
            }

            const result = await flipdishApi.submitOrder(chatId, token);
            if (!result.success) {
                return {
                    message: { role: 'assistant', content: result.error || 'Order failed.' },
                    chatId,
                };
            }

            const confirmation = result.leadTimePrompt
                ? this.normalizeLeadTimePrompt(result.leadTimePrompt)
                : result.orderId
                    ? `Thanks! Your order has been placed.\nOrder ID: ${result.orderId}`
                    : '';

            return {
                message: { role: 'assistant', content: confirmation },
                chatId,
                orderSubmitted: true,
                orderId: result.orderId,
                leadTimePrompt: result.leadTimePrompt,
            };
        }

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

        // Check for auth requirements
        const { authRequired, tokenExpired } = this.checkAuthStatus(functionMessages);

        const submittedOrderCall = toolCalls?.some(call =>
            call.type === 'function' && call.function.name === 'submit_order'
        );

        if (authRequired || tokenExpired || submittedOrderCall) {
            const orderConfirmation = this.buildOrderConfirmation(functionMessages);
            const finalMessage: ChatMessage = {
                role: 'assistant',
                content: orderConfirmation || '',
            };

            return {
                message: finalMessage,
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

        // Get final response
        const { message: refreshedBasketContext } = await this.loadBasketContext(chatId, token);
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

            case 'verify_option_selection': {
                const { menuItemId, optionSetId, selectedOption } = args;

                console.log('🔍 verify_option_selection called:', { menuItemId, optionSetId, selectedOption });
                console.log('   searchResults length:', searchResults.length);
                console.log('   searchResults IDs:', searchResults.map(i => i.menuItemId));

                const item = searchResults.find(i => i.menuItemId === menuItemId);

                console.log('   Found item:', item ? item.name : 'NOT FOUND');
                if (item) {
                    console.log('   Item keys:', Object.keys(item));
                    console.log('   optionSets:', item.optionSets);
                }

                if (!item) {
                    return { error: `Item ${menuItemId} not found in search results. Please search again.` };
                }

                // Use optionSets from search/text API
                if (!item.optionSets || item.optionSets.length === 0) {
                    return { error: `Item ${item.name} has no options.` };
                }

                // Case-insensitive search using optionSetId field
                const optionSet = item.optionSets.find((os: any) =>
                    os.optionSetId?.toLowerCase() === optionSetId.toLowerCase()
                );

                if (!optionSet) {
                    const availableSets = item.optionSets.map((os: any) => os.optionSetId).join(', ');
                    return { error: `Option Set "${optionSetId}" not found. Available sets: ${availableSets}` };
                }

                // Use options array (not menuItemOptionSetItems)
                const option = optionSet.options?.find((o: any) =>
                    o.name?.toLowerCase() === selectedOption.toLowerCase()
                );

                if (!option) {
                    const availableOptions = optionSet.options?.map((o: any) => o.name).join(', ') || 'none';
                    return { error: `Option "${selectedOption}" not found in set "${optionSet.optionSetId}". Available options: ${availableOptions}` };
                }

                return {
                    status: 200,
                    valid: true,
                    verifiedSelection: {
                        optionSetId: optionSet.optionSetId, // Return exact correct casing
                        selectedOption: option.name
                    }
                };
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
                            optionSelections: args.optionSelections
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
                            optionSelections: args.optionSelections
                        }],
                    },
                    token
                );
            }

            case 'clear_basket': {
                await flipdishApi.clearBasket(chatId, token);
                return { status: 200, message: 'Basket cleared' };
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

    private async loadBasketContext(
        chatId: string,
        token?: string
    ): Promise<{ message: ChatMessage | null; basket: BasketSummary | null }> {
        try {
            const basket = await flipdishApi.getBasket(chatId, token);
            return { message: this.formatBasketContext(basket), basket };
        } catch (error) {
            console.warn('⚠️ Failed to load basket context:', error);
            return { message: null, basket: null };
        }
    }

    private formatBasketContext(basket: BasketSummary): ChatMessage {
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

    private getLastUserMessage(messages: ChatMessage[]): string | null {
        for (let i = messages.length - 1; i >= 0; i--) {
            if (messages[i].role === 'user') {
                return messages[i].content || '';
            }
        }
        return null;
    }

    private isCheckoutIntent(message: string): boolean {
        const normalized = message.toLowerCase();
        return /\b(buy|checkout|check out|order|place order|submit order|pay|purchase)\b/.test(normalized);
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
