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
} from '../api/flipdish-types';

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
    verifyOTP: (phone: string, code: string) => Promise<{ success: boolean; error?: string }>;
    logout: () => void;

    // Restaurant
    restaurantStatus: RestaurantStatus | null;
    isRestaurantOpen: boolean;

    // Basket
    basketItems: BasketItem[];
    basketTotal: number;
    refreshBasket: () => Promise<void>;

    // Payment
    paymentAccounts: PaymentAccount[];
    defaultPaymentAccount: PaymentAccount | null;

    // Chat
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

    // Payment state
    const [paymentAccounts, setPaymentAccounts] = useState<PaymentAccount[]>([]);

    // Chat state
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    // Chatbot service
    const chatbotService = React.useMemo(
        () => createChatbotService(config.openaiApiKey),
        [config.openaiApiKey]
    );

    // Load auth from localStorage
    useEffect(() => {
        const stored = localStorage.getItem('flipdish_auth');
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

    // Save auth to localStorage
    useEffect(() => {
        if (token && phoneNumber) {
            localStorage.setItem('flipdish_auth', JSON.stringify({ token, phoneNumber }));
        } else {
            localStorage.removeItem('flipdish_auth');
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
                const storedSessionId = localStorage.getItem('flipdish_session_id');

                // Create or restore session
                const { chatId } = await flipdishApi.createSession(token || undefined);
                setSessionId(chatId);
                localStorage.setItem('flipdish_session_id', chatId);

                // Get restaurant status
                const status = await flipdishApi.getRestaurantStatus();
                setRestaurantStatus(status);

                // Get basket
                const basket = await flipdishApi.getBasket(chatId, token || undefined);
                setBasketItems(basket.basketMenuItems || []);

                // Get payment accounts if authenticated
                if (token) {
                    const { accounts } = await flipdishApi.getPaymentAccounts(token);
                    setPaymentAccounts(accounts);
                }

                // Initialize messages with system prompt
                setMessages([{
                    role: 'system',
                    content: chatbotService.getSystemPrompt(),
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
            const result = await flipdishApi.verifyOTP(phone, code);
            if (result.success && result.token) {
                setToken(result.token);
                setPhoneNumber(phone);

                // Refresh payment accounts
                const { accounts } = await flipdishApi.getPaymentAccounts(result.token);
                setPaymentAccounts(accounts);

                return { success: true };
            }
            return { success: false, error: result.error };
        } catch (error: any) {
            return { success: false, error: error.message };
        }
    }, []);

    const logout = useCallback(() => {
        setToken(null);
        setPhoneNumber(null);
        setPaymentAccounts([]);
        localStorage.removeItem('flipdish_auth');
    }, []);

    // Basket methods
    const refreshBasket = useCallback(async () => {
        if (!sessionId) return;
        const basket = await flipdishApi.getBasket(sessionId, token || undefined);
        setBasketItems(basket.basketMenuItems || []);
    }, [sessionId, token]);

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
            if (response.toolCalls && response.toolCalls.length > 0) {
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
    const defaultPaymentAccount = paymentAccounts.find(a => a.IsDefaultPaymentMethod) || null;

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
        paymentAccounts,
        defaultPaymentAccount,
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
