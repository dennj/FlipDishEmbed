/**
 * Flipdish API Type Definitions
 * Shared types for the API wrapper and frontend
 */

// ============================================
// PAYMENT ACCOUNTS
// ============================================

export interface PaymentAccount {
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

export interface CardDetails {
    name: string;
    cardNumber: string;
    expMonth: number;
    expYear: number;
    cvv: string;
    hasConsentToSaveCard?: boolean;
}

// ============================================
// BASKET
// ============================================

export interface BasketItem {
    menuItemId: number;
    name: string;
    quantity: number;
    unitPrice: number;
    totalPrice: number;
    menuItemOptionSetItems?: BasketItemOption[];
}

export interface BasketItemOption {
    menuItemOptionSetItemId: number;
    name: string;
    price: number;
}

export interface BasketSummary {
    basketMenuItems: BasketItem[];
    totalPrice: number;
    subTotalPrice?: number;
    deliveryFee?: number;
    serviceFee?: number;
}

export type BasketAction =
    | { type: 'add'; menuItemId: number; quantity: number; options?: number[] }
    | { type: 'remove'; menuItemId: number; quantity: number }
    | { type: 'clear' };

// ============================================
// MENU
// ============================================

export interface MenuItem {
    menuItemId: number;
    name: string;
    description: string;
    menuSectionName: string;
    price: number;
    imageUrl?: string;
    menuItemOptions?: MenuItemOptionSet;
}

export interface MenuItemOptionSet {
    menuItemOptionSetId: number;
    name?: string;
    optionsRules?: string;
    minSelectCount?: number;
    maxSelectCount?: number;
    options: MenuItemOption[];
    afterChoosingThis?: MenuItemOptionSet;
}

export interface MenuItemOption {
    menuItemOptionSetItemId: number;
    name: string;
    price: number;
    isAvailable?: boolean;
}

// ============================================
// RESTAURANT
// ============================================

export interface RestaurantStatus {
    isOpen: boolean;
    openTimeMessage: string;
    secondsUntilOpens: number | null;
    secondsUntilCloses: number | null;
    restaurantName: string;
}

// ============================================
// SESSION
// ============================================

export interface SessionData {
    chatId: string;
}

export interface CustomerContext {
    id?: string;
    phoneNumber?: string;
    email?: string;
    name?: string;
}

// ============================================
// ORDER
// ============================================

export interface OrderResult {
    success: boolean;
    orderId?: string;
    leadTimePrompt?: string;
    error?: string;
    errorCode?: OrderErrorCode;
}

export type OrderErrorCode =
    | 'AUTHENTICATION_REQUIRED'
    | 'NO_PAYMENT_METHOD'
    | 'BASKET_EMPTY'
    | 'RESTAURANT_CLOSED'
    | 'TOKEN_EXPIRED'
    | 'PAYMENT_FAILED'
    | 'NO_CUSTOMER_ID';

// ============================================
// AUTH
// ============================================

export interface OTPResponse {
    success: boolean;
    message?: string;
    error?: string;
}

export interface AuthResponse {
    success: boolean;
    token?: string;
    user?: {
        phoneNumber: string;
    };
    context?: CustomerContext;
    error?: string;
}

// ============================================
// ERROR CODES
// ============================================

export type BasketErrorCode =
    | 'RESTAURANT_CLOSED'
    | 'ITEM_UNAVAILABLE'
    | 'SESSION_EXPIRED'
    | 'INVALID_QUANTITY';

export type AuthErrorCode =
    | 'TOKEN_EXPIRED'
    | 'TOKEN_INVALID'
    | 'OTP_INVALID'
    | 'OTP_EXPIRED'
    | 'RATE_LIMITED';

// ============================================
// API RESPONSE WRAPPERS
// ============================================

export interface FlipdishApiResponse<T> {
    Success: boolean;
    Data: T;
    UserMessage?: string | null;
    DeveloperMessage?: string | null;
    StackTrace?: string | null;
    ReloadRestaurant?: boolean;
    Code?: number;
}

export interface PhoneAgentApiResponse<T> {
    status: number;
    data: T;
    serverErrorMessage?: string;
    customerErrorMessage?: string;
}
