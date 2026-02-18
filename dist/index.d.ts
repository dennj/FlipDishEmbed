import * as react_jsx_runtime from 'react/jsx-runtime';
import { ReactNode } from 'react';

declare function FlipDishChat(): react_jsx_runtime.JSX.Element;

/**
 * Flipdish API Type Definitions
 * Shared types for the API wrapper and frontend
 */
interface PaymentAccount {
    PaymentAccountId: number;
    PaymentAccountType: string;
    Description: string;
    IsDefaultPaymentMethod: boolean;
    CanRemoveFromCustomerView: boolean;
    UserId?: number;
    Bin?: string | null;
    TokenizationKey?: string | null;
    CustomerId?: string | null;
    SupportsSubmitOrderTips?: boolean;
    PublicApiKey?: string | null;
    Fingerprint?: string | null;
}
interface BasketItem {
    menuItemId: number;
    name: string;
    quantity: number;
    unitPrice: number;
    totalPrice: number;
    menuItemOptionSetItems?: BasketItemOption[];
}
interface BasketItemOption {
    menuItemOptionSetItemId: number;
    name: string;
    price: number;
}
type BasketAction = {
    type: 'add';
    menuItemId: number;
    quantity: number;
    optionSelections?: MenuItemOptionSelection[];
} | {
    type: 'remove';
    menuItemId: number;
    quantity: number;
    optionSelections?: MenuItemOptionSelection[];
} | {
    type: 'clear';
};
interface MenuItemOptionSelection {
    optionSetId: string;
    selectedOptions: string[];
}
interface MenuItem {
    menuItemId: number;
    name: string;
    description: string;
    menuSectionName: string;
    price: number;
    imageUrl?: string;
    menuItemOptionSets?: MenuItemOptionSet[];
    optionSets?: MenuItemOptionSetText[];
}
interface MenuItemOptionSet {
    menuItemOptionSetId: number;
    name: string;
    minSelectCount: number;
    maxSelectCount: number;
    menuItemOptionSetItems: MenuItemOption[];
}
interface MenuItemOption {
    menuItemOptionSetItemId: number;
    name: string;
    price: number;
    isAvailable?: boolean;
}
interface MenuItemOptionSetText {
    optionSetId: string;
    required: boolean;
    min: number;
    max: number;
    options: MenuItemOptionText[];
    nextOptionSet?: string | null;
}
interface MenuItemOptionText {
    name: string;
    price?: number;
}
interface RestaurantStatus {
    isOpen: boolean;
    openTimeMessage: string;
    secondsUntilOpens: number | null;
    secondsUntilCloses: number | null;
    restaurantName: string;
}
interface CustomerContext {
    id?: string;
    phoneNumber?: string;
    email?: string;
    name?: string;
}

interface ChatMessage {
    role: 'user' | 'assistant' | 'system' | 'tool';
    content: string;
    tool_call_id?: string;
    tool_calls?: any[];
}
interface ChatResponse {
    message: ChatMessage;
    toolCalls?: any[];
    chatId: string;
    allMessages?: ChatMessage[];
    authRequired?: boolean;
    tokenExpired?: boolean;
    orderSubmitted?: boolean;
    orderId?: string;
    leadTimePrompt?: string;
    basketUpdated?: boolean;
}
interface FlipDishConfig {
    /** FlipDish brand/app ID */
    appId: string;
    /** FlipDish store ID */
    storeId: number;
    /** FlipDish Phone Agent API bearer token */
    bearerToken: string;
    /** Server URL for the @flipdish/server API (required for chat) */
    serverUrl: string;
    /** Initial search term to run on load (optional) */
    initialSearch?: string;
}
interface FlipDishContextValue {
    sessionId: string | null;
    isInitialized: boolean;
    isAuthenticated: boolean;
    token: string | null;
    phoneNumber: string | null;
    initiateOTP: (phone: string, captchaToken?: string) => Promise<{
        success: boolean;
        error?: string;
    }>;
    verifyOTP: (phone: string, code: string) => Promise<{
        success: boolean;
        error?: string;
        context?: CustomerContext;
    }>;
    logout: () => void;
    restaurantStatus: RestaurantStatus | null;
    isRestaurantOpen: boolean;
    basketItems: BasketItem[];
    basketTotal: number;
    refreshBasket: () => Promise<void>;
    updateBasket: (action: BasketAction) => Promise<void>;
    isBasketOpen: boolean;
    setBasketOpen: (open: boolean) => void;
    menuItems: MenuItem[];
    addMenuItems: (items: MenuItem[]) => void;
    paymentAccounts: PaymentAccount[];
    defaultPaymentAccount: PaymentAccount | null;
    placeOrder: (paymentAccountId?: number) => Promise<{
        success: boolean;
        error?: string;
        orderId?: string;
        leadTimePrompt?: string;
    }>;
    setPaymentMethod: (id: number) => void;
    addMessage: (message: ChatMessage) => void;
    sendMessage: (message: string) => Promise<ChatResponse>;
    messages: ChatMessage[];
    isLoading: boolean;
}
interface FlipDishProviderProps {
    config: FlipDishConfig;
    children: ReactNode;
}
declare function FlipDishProvider({ config, children }: FlipDishProviderProps): react_jsx_runtime.JSX.Element;
declare function useFlipDish(): FlipDishContextValue;

export { type ChatMessage, type ChatResponse, FlipDishChat, type FlipDishConfig, type FlipDishContextValue, FlipDishProvider, useFlipDish };
