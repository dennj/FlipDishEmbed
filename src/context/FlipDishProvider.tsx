'use client';

import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';

import {
    flipdishApi,
    setFlipdishConfig,
} from '../api/flipdish-api';
import {
    createChatbotService,
    ChatMessage,
    ChatResponse
} from '../api/chatbot';
import {
    RestaurantStatus,
    BasketItem,
    PaymentAccount,
    BasketAction,
    CustomerContext,
    MenuItem,
} from '../api/flipdish-types';

// ============================================
// HELPERS
// ============================================

function setCookie(name: string, value: string, days: number) {
    if (typeof document === 'undefined') return;
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = name + '=' + encodeURIComponent(value) + '; expires=' + expires + '; path=/';
}

function getCookie(name: string) {
    if (typeof document === 'undefined') return '';
    return document.cookie.split('; ').reduce((r, v) => {
        const parts = v.split('=');
        return parts[0] === name ? decodeURIComponent(parts[1]) : r
    }, '');
}

// ============================================
// TYPES
// ============================================

export interface FlipDishConfig {
    /** OpenAI API key for chat completions */
    openaiApiKey: string;
    /** FlipDish brand/app ID */
    appId: string;
    /** FlipDish store ID */
    storeId: number;
    /** FlipDish Phone Agent API bearer token */
    bearerToken: string;
    /** Custom server URL (optional, uses default staging) */
    serverUrl?: string;
}

export interface FlipDishContextValue {
    // Session
    sessionId: string | null;
    isInitialized: boolean;

    // Auth
    isAuthenticated: boolean;
    token: string | null;
    phoneNumber: string | null;
    initiateOTP: (phone: string) => Promise<{ success: boolean; error?: string }>;
    verifyOTP: (phone: string, code: string) => Promise<{ success: boolean; error?: string; context?: CustomerContext }>;
    logout: () => void;

    // Restaurant
    restaurantStatus: RestaurantStatus | null;
    isRestaurantOpen: boolean;

    // Basket
    basketItems: BasketItem[];
    basketTotal: number;
    refreshBasket: () => Promise<void>;
    updateBasket: (action: BasketAction) => Promise<void>;

    // Payment
    paymentAccounts: PaymentAccount[];
    defaultPaymentAccount: PaymentAccount | null;
    placeOrder: (paymentAccountId?: number) => Promise<{ success: boolean; error?: string; orderId?: string; leadTimePrompt?: string }>;
    setPaymentMethod: (id: number) => void;

    // Chat
    addMessage: (message: ChatMessage) => void;
    sendMessage: (message: string) => Promise<ChatResponse>;
    messages: ChatMessage[];
    isLoading: boolean;
}

const FlipDishContext = createContext<FlipDishContextValue | null>(null);

// ============================================
// PROVIDER
// ============================================

interface FlipDishProviderProps {
    config: FlipDishConfig;
    children: ReactNode;
}

export function FlipDishProvider({ config, children }: FlipDishProviderProps) {
    // Session state
    const [sessionId, setSessionId] = useState<string | null>(null);
    const [isInitialized, setIsInitialized] = useState(false);

    // Auth state
    const [token, setToken] = useState<string | null>(null);
    const [phoneNumber, setPhoneNumber] = useState<string | null>(null);

    // Restaurant state
    const [restaurantStatus, setRestaurantStatus] = useState<RestaurantStatus | null>(null);

    // Basket state
    const [basketItems, setBasketItems] = useState<BasketItem[]>([]);

    // Menu state (loaded at session creation)
    const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

    // Payment state
    const [paymentAccounts, setPaymentAccounts] = useState<PaymentAccount[]>([]);
    const [selectedPaymentAccountId, setSelectedPaymentAccountId] = useState<number | null>(null);

    // Chat state
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    // Chatbot service
    const chatbotService = React.useMemo(
        () => createChatbotService(config.openaiApiKey),
        [config.openaiApiKey]
    );

    // Load auth from cookies
    useEffect(() => {
        const stored = getCookie('flipdish_auth');
        if (stored) {
            try {
                const parsed = JSON.parse(stored);
                if (parsed.token && parsed.phoneNumber) {
                    setToken(parsed.token);
                    setPhoneNumber(parsed.phoneNumber);
                }
            } catch {
                // Invalid storage
            }
        }
    }, []);

    // Save auth to cookies
    useEffect(() => {
        if (token && phoneNumber) {
            setCookie('flipdish_auth', JSON.stringify({ token, phoneNumber }), 30);
        } else {
            setCookie('flipdish_auth', '', -1);
        }
    }, [token, phoneNumber]);

    // Initialize session
    useEffect(() => {
        if (isInitialized) return;

        const init = async () => {
            try {
                // Configure the FlipDish API for browser usage
                setFlipdishConfig({
                    appId: config.appId,
                    storeId: config.storeId,
                    bearerToken: config.bearerToken,
                    serverUrl: config.serverUrl,
                });

                // Try to restore session
                const storedSessionId = getCookie('flipdish_session_id');

                // Create or restore session
                const { chatId, basket: initialBasket, menu: initialMenu } = await flipdishApi.createSession(token || undefined, storedSessionId || undefined);
                setSessionId(chatId);
                setCookie('flipdish_session_id', chatId, 30);

                // Store menu items for AI context
                if (initialMenu && initialMenu.length > 0) {
                    setMenuItems(initialMenu);
                    console.log(`📋 Menu loaded: ${initialMenu.length} items`);
                }

                // Get restaurant status
                const status = await flipdishApi.getRestaurantStatus();
                console.log('🏪 Restaurant status received:', status);
                setRestaurantStatus(status);

                // Get basket (use optimized return if available)
                if (initialBasket) {
                    setBasketItems(initialBasket.basketMenuItems || []);
                } else {
                    const basket = await flipdishApi.getBasket(chatId, token || undefined);
                    setBasketItems(basket.basketMenuItems || []);
                }

                // Get payment accounts if authenticated
                if (token) {
                    // Link customer context if we have a token (from cookies)
                    try {
                        await flipdishApi.getCustomerContext(chatId, token);
                        console.log('✅ Customer context restored from cached token');
                    } catch (error) {
                        console.warn('⚠️ Failed to restore customer context:', error);
                    }

                    const { accounts } = await flipdishApi.getPaymentAccounts(token);
                    setPaymentAccounts(accounts);
                }

                // Initialize messages with system prompt + menu context
                const systemPrompt = chatbotService.getSystemPrompt();
                const menuContext = initialMenu && initialMenu.length > 0
                    ? chatbotService.formatMenuContext(initialMenu)
                    : '';

                setMessages([{
                    role: 'system',
                    content: systemPrompt + menuContext,
                }]);

                setIsInitialized(true);
            } catch (error) {
                console.error('Failed to initialize FlipDish:', error);
                // Still mark as initialized so we show the UI instead of infinite loading
                setIsInitialized(true);
            }
        };

        init();
    }, [config.appId, config.storeId, config.bearerToken, config.serverUrl, token, isInitialized, chatbotService]);

    // Auth methods
    const initiateOTP = useCallback(async (phone: string) => {
        try {
            const result = await flipdishApi.sendOTP(phone);
            return result;
        } catch (error: any) {
            return { success: false, error: error.message };
        }
    }, []);

    const verifyOTP = useCallback(async (phone: string, code: string) => {
        try {
            const result = await flipdishApi.verifyOTP(phone, code, sessionId || undefined);
            if (result.success && result.token) {
                setToken(result.token);
                setPhoneNumber(phone);
                setCookie('flipdish_auth', JSON.stringify({ token: result.token, phoneNumber: phone }), 30);

                // Refresh payment accounts
                const { accounts } = await flipdishApi.getPaymentAccounts(result.token);
                setPaymentAccounts(accounts);

                return { success: true, context: result.context };
            }
            return { success: false, error: result.error, context: result.context };
        } catch (error: any) {
            return { success: false, error: error.message };
        }
    }, [sessionId]);

    const logout = useCallback(() => {
        setToken(null);
        setPhoneNumber(null);
        setPaymentAccounts([]);
        setSelectedPaymentAccountId(null);
        setCookie('flipdish_auth', '', -1);
    }, []);

    // Basket methods
    const refreshBasket = useCallback(async () => {
        if (!sessionId) return;
        const basket = await flipdishApi.getBasket(sessionId, token || undefined);
        setBasketItems(basket.basketMenuItems || []);
    }, [sessionId, token]);

    const updateBasket = useCallback(async (action: BasketAction) => {
        if (!sessionId) return;
        try {
            if (action.type === 'clear') {
                await flipdishApi.clearBasket(sessionId, token || undefined);
            } else {
                const payload: any = {};
                if (action.type === 'add') {
                    payload.addMenuItems = [{
                        menuItemId: action.menuItemId,
                        quantity: action.quantity,
                        optionSelections: action.optionSelections
                    }];
                } else if (action.type === 'remove') {
                    payload.removeMenuItems = [{
                        menuItemId: action.menuItemId,
                        quantity: action.quantity,
                        optionSelections: action.optionSelections
                    }];
                }
                await flipdishApi.updateBasket(sessionId, payload, token || undefined);
            }
            await refreshBasket();
        } catch (error) {
            console.error('Failed to update basket:', error);
            throw error;
        }
    }, [sessionId, token, refreshBasket]);

    const placeOrder = useCallback(async (paymentAccountId?: number) => {
        let authToken = token;
        if (!authToken) {
            const cached = getCookie('flipdish_auth');
            if (cached) {
                try {
                    authToken = JSON.parse(cached).token || null;
                } catch {
                    authToken = null;
                }
            }
        }

        if (!sessionId || !authToken) {
            console.error('❌ placeOrder: Missing sessionId or token', { sessionId, hasToken: !!authToken });
            return { success: false, error: 'Not authenticated' };
        }
        console.log('📦 placeOrder: Submitting order', { sessionId, tokenLength: authToken.length });
        try {
            const result = await flipdishApi.submitOrder(sessionId, authToken, paymentAccountId);
            if (result.success) {
                await refreshBasket();
            }
            return result;
        } catch (error: any) {
            return { success: false, error: error.message };
        }
    }, [sessionId, token, refreshBasket]);

    const addMessage = useCallback((message: ChatMessage) => {
        setMessages(prev => [...prev, message]);
    }, []);

    // Chat methods
    const sendMessage = useCallback(async (message: string): Promise<ChatResponse> => {
        if (!sessionId) {
            throw new Error('Session not initialized');
        }

        setIsLoading(true);

        try {
            const userMessage: ChatMessage = { role: 'user', content: message };
            const newMessages = [...messages, userMessage];
            setMessages(newMessages);

            const response = await chatbotService.chat({
                messages: newMessages,
                chatId: sessionId,
                token: token || undefined,
            });

            // Update messages with response
            if (response.allMessages) {
                setMessages([messages[0], ...response.allMessages.filter(m => m.role !== 'system')]);
            } else {
                setMessages([...newMessages, response.message]);
            }

            // Refresh basket after tool calls
            if ((response.toolCalls && response.toolCalls.length > 0) || response.orderSubmitted) {
                await refreshBasket();
            }

            return response;
        } finally {
            setIsLoading(false);
        }
    }, [sessionId, token, messages, chatbotService, refreshBasket]);

    // Computed values
    const isAuthenticated = !!token;
    const isRestaurantOpen = restaurantStatus?.isOpen ?? false;
    const basketTotal = basketItems.reduce((sum, item) => sum + item.totalPrice, 0);
    const defaultPaymentAccount =
        paymentAccounts.find(a => a.PaymentAccountId === selectedPaymentAccountId) ||
        paymentAccounts.find(a => a.IsDefaultPaymentMethod) ||
        null;

    const value: FlipDishContextValue = {
        sessionId,
        isInitialized,
        isAuthenticated,
        token,
        phoneNumber,
        initiateOTP,
        verifyOTP,
        logout,
        restaurantStatus,
        isRestaurantOpen,
        basketItems,
        basketTotal,
        refreshBasket,
        updateBasket,
        paymentAccounts,
        defaultPaymentAccount,
        placeOrder,
        setPaymentMethod: setSelectedPaymentAccountId,
        addMessage,
        sendMessage,
        messages,
        isLoading,
    };

    return (
        <FlipDishContext.Provider value={value}>
            {children}
        </FlipDishContext.Provider>
    );
}

// ============================================
// HOOK
// ============================================

export function useFlipDish(): FlipDishContextValue {
    const context = useContext(FlipDishContext);
    if (!context) {
        throw new Error('useFlipDish must be used within a FlipDishProvider');
    }
    return context;
}
