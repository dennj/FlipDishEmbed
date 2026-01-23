/**
 * Flipdish API Wrapper
 *
 * Client-side API wrapper that consolidates all Flipdish API calls.
 * This is the single source of truth for all external API interactions.
 */

import {
    PaymentAccount,
    CardDetails,
    BasketSummary,
    MenuItem,
    RestaurantStatus,
    OrderResult,
    OTPResponse,
    AuthResponse,
    CustomerContext,
    FlipdishApiResponse,
    PhoneAgentApiResponse,
} from './flipdish-types';

// ============================================
// CONFIGURATION
// ============================================

export interface FlipdishConfig {
    phoneAgentBase?: string;
    mainApiBase?: string;
    bearerToken: string;
    appId: string;
    storeId: number;
    serverUrl?: string; // Optional URL for Vercel Proxy
}

// Global config that can be set before using the API
let globalConfig: FlipdishConfig | null = null;

/**
 * Set global config (for browser usage where process.env doesn't exist)
 */
export function setFlipdishConfig(config: FlipdishConfig): void {
    globalConfig = {
        phoneAgentBase: config.phoneAgentBase || 'https://phone-agent.online-ordering-integration.flipdishdev.com',
        mainApiBase: config.mainApiBase || 'https://api-prod-staging.my.flipdishdev.com',
        bearerToken: config.bearerToken,
        appId: config.appId,
        storeId: config.storeId,
        serverUrl: config.serverUrl,
    };
}

function getConfig(): FlipdishConfig {
    // If global config is set, use it
    if (globalConfig) {
        return globalConfig;
    }

    // Fallback to import.meta.env for Vite usage or throw error
    // In a library context, we expect setFlipdishConfig to be called
    throw new Error('Flipdish config not set. Call setFlipdishConfig() before using the API.');
}

// ============================================
// ERROR TYPES
// ============================================

export class FlipdishApiError extends Error {
    constructor(
        message: string,
        public statusCode: number,
        public errorCode?: string,
        public userMessage?: string
    ) {
        super(message);
        this.name = 'FlipdishApiError';
    }
}

// ============================================
// FLIPDISH API CLASS
// ============================================

class FlipdishAPI {
    private _config: FlipdishConfig | null = null;

    private get config(): FlipdishConfig {
        if (!this._config) {
            this._config = getConfig();
        }
        return this._config;
    }

    // ----------------------------------------
    // Helper Methods
    // ----------------------------------------

    private buildPhoneAgentHeaders(chatId?: string, token?: string): Record<string, string> {
        const headers: Record<string, string> = {
            'Content-Type': 'application/json',
        };

        if (chatId) {
            headers['chat-id'] = chatId;
        }

        if (token) {
            headers['x-flipdish-token'] = token;
        }

        return headers;
    }

    private buildMainApiHeaders(token?: string): Record<string, string> {
        const headers: Record<string, string> = {
            'Content-Type': 'application/json',
            'accept': 'application/json',
            'Flipdish-White-Label-Id': this.config.appId,
            'flipdish-app-type': 'Web',
            'flipdish-language': 'en',
        };

        if (token) {
            headers['X-Flipdish-Token'] = token;
        }

        return headers;
    }

    private async callProxy(action: string, args: any[]): Promise<any> {
        if (!this.config.serverUrl) {
            throw new Error('Server URL not configured');
        }

        console.log(`🌐 Proxying ${action} to ${this.config.serverUrl}`);

        try {
            const response = await fetch(`${this.config.serverUrl}/api`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ action, args }),
            });

            // Safe JSON parsing - handle empty responses
            const text = await response.text();
            const data = text ? JSON.parse(text) : {};
            console.log(`✅ Proxy response for ${action}:`, response.status, response.ok, data);

            // Handle Vercel function errors
            if (!response.ok) {
                console.error(`❌ Proxy error for ${action}:`, data.error);
                const errorCode = data.code || (response.status === 401 ? 'TOKEN_EXPIRED' : undefined);
                throw new FlipdishApiError(
                    data.error || `Proxy failed with status ${response.status}`,
                    response.status,
                    errorCode
                );
            }

            // Server returns the result directly
            return data;
        } catch (error: any) {
            // Rethrow FlipdishApiErrors, wrap others
            if (error instanceof FlipdishApiError) throw error;
            throw new FlipdishApiError(error.message || 'Network error connecting to Proxy', 500);
        }
    }

    // ----------------------------------------
    // AUTH METHODS
    // ----------------------------------------

    async sendOTP(phoneNumber: string): Promise<OTPResponse> {
        if (this.config.serverUrl) {
            return this.callProxy('sendOTP', [phoneNumber]);
        }

        const cleanedPhone = phoneNumber.replace(/[\s-]/g, '');

        console.log('🔐 Sending OTP to:', cleanedPhone);

        const response = await fetch(`${this.config.mainApiBase}/Account/RequestPhoneLoginCodeSms`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                PhoneNumber: cleanedPhone,
            }),
        });

        const data: FlipdishApiResponse<unknown> = await response.json();

        if (!data.Success) {
            console.log('❌ OTP send failed:', data.UserMessage);
            return {
                success: false,
                error: data.UserMessage || 'Failed to send SMS code',
            };
        }

        console.log('✅ OTP sent successfully');
        return {
            success: true,
            message: 'SMS code sent successfully',
        };
    }

    async verifyOTP(phoneNumber: string, otpCode: string, chatId?: string): Promise<AuthResponse> {
        if (this.config.serverUrl) {
            return this.callProxy('verifyOTP', [phoneNumber, otpCode, chatId, this.config.appId]);
        }

        const cleanedPhone = phoneNumber.replace(/[\s-]/g, '');

        console.log('🔐 Verifying OTP for:', cleanedPhone);

        const response = await fetch(`${this.config.mainApiBase}/Account/LoginUsingPhoneNumber`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'accept': 'application/json',
                'Flipdish-White-Label-Id': this.config.appId,
            },
            body: JSON.stringify({
                PhoneNumber: cleanedPhone,
                SmsCode: otpCode,
            }),
        });

        const xFlipdishToken = response.headers.get('x-flipdish-token');
        const data: FlipdishApiResponse<string> = await response.json();

        if (!data.Success) {
            console.log('❌ OTP verification failed:', data.UserMessage);
            return {
                success: false,
                error: data.UserMessage || 'Invalid OTP code',
            };
        }

        const token = xFlipdishToken || data.Data;

        if (!token) {
            console.error('❌ No token received in OTP verification response');
            return {
                success: false,
                error: 'Authentication successful but no token received',
            };
        }

        console.log('✅ OTP verified successfully');

        let context: CustomerContext | undefined;
        if (chatId) {
            try {
                context = await this.getCustomerContext(chatId, token);
            } catch (error) {
                console.warn('⚠️ Failed to load customer context:', error);
            }
        }

        return {
            success: true,
            token,
            user: {
                phoneNumber: cleanedPhone,
            },
            context,
        };
    }

    // ----------------------------------------
    // SESSION METHODS
    // ----------------------------------------

    async createSession(token?: string, chatId?: string): Promise<{ chatId: string; basket?: BasketSummary; menu?: MenuItem[] }> {
        if (this.config.serverUrl) {
            return this.callProxy('createSession', [
                this.config.appId,
                this.config.storeId,
                token,
                this.config.bearerToken,
                chatId
            ]);
        }

        console.log('📞 Creating chat session (authenticated:', !!token, ')');

        const headers: Record<string, string> = {
            'Authorization': `Bearer ${this.config.bearerToken}`,
            'Content-Type': 'application/json',
        };

        if (token) {
            headers['x-flipdish-token'] = token;
        }

        const response = await fetch(`${this.config.phoneAgentBase}/chat/session`, {
            method: 'POST',
            headers,
            body: JSON.stringify({
                brandId: this.config.appId,
                storeId: this.config.storeId,
            }),
        });

        const data: PhoneAgentApiResponse<{ chatId: string }> = await response.json();

        if (!response.ok || !data.data?.chatId) {
            console.log('❌ Session creation failed:', data.serverErrorMessage);
            throw new FlipdishApiError(
                data.serverErrorMessage || 'Failed to create session',
                response.status
            );
        }

        console.log('✅ Session created:', data.data.chatId);
        return { chatId: data.data.chatId };
    }

    // ----------------------------------------
    // RESTAURANT METHODS
    // ----------------------------------------

    async getRestaurantStatus(storeId?: number): Promise<RestaurantStatus> {
        if (this.config.serverUrl) {
            const targetStoreId = storeId || this.config.storeId;
            return this.callProxy('getRestaurantStatus', [targetStoreId]);
        }

        const targetStoreId = storeId || this.config.storeId;

        console.log('🏪 Checking restaurant status for store:', targetStoreId);

        const response = await fetch(
            `${this.config.mainApiBase}/Restaurant/PickupRestaurantDetails/${targetStoreId}`,
            {
                method: 'GET',
                headers: {
                    'accept': 'application/json',
                },
            }
        );

        if (!response.ok) {
            const errorText = await response.text();
            console.log('❌ Failed to get restaurant status:', errorText);
            throw new FlipdishApiError('Failed to fetch restaurant status', response.status);
        }

        const data: FlipdishApiResponse<{
            IsOpen: boolean;
            OpenTimeMessage: string;
            SecondsUntilRestaurantOpens: number | null;
            SecondsUntilRestaurantCloses: number | null;
            RestaurantName: string;
        }> = await response.json();

        if (!data.Success || !data.Data) {
            throw new FlipdishApiError('Invalid response from restaurant API', 500);
        }

        const status: RestaurantStatus = {
            isOpen: data.Data.IsOpen || false,
            openTimeMessage: data.Data.OpenTimeMessage || '',
            secondsUntilOpens: data.Data.SecondsUntilRestaurantOpens,
            secondsUntilCloses: data.Data.SecondsUntilRestaurantCloses,
            restaurantName: data.Data.RestaurantName || '',
        };

        console.log(`   ${status.isOpen ? '✓ OPEN' : '⚠️  CLOSED'}: ${status.openTimeMessage}`);

        return status;
    }

    // ----------------------------------------
    // CUSTOMER METHODS
    // ----------------------------------------

    async getCustomerContext(chatId: string, token: string): Promise<CustomerContext> {
        if (this.config.serverUrl) {
            return this.callProxy('getCustomerContext', [chatId, token]);
        }

        console.log('👤 Getting customer context for chat:', chatId);

        const response = await fetch(
            `${this.config.phoneAgentBase}/tools/get-customer-context`,
            {
                method: 'GET',
                headers: this.buildPhoneAgentHeaders(chatId, token),
            }
        );

        const data: PhoneAgentApiResponse<{
            brandId?: string;
            customer?: {
                customerId?: number;
                customerPhoneNumber?: string;
                email?: string;
                name?: string;
            };
        }> = await response.json();

        if (!response.ok) {
            throw new FlipdishApiError(
                data.serverErrorMessage || 'Failed to get customer context',
                response.status
            );
        }

        const customer = data.data?.customer;
        return {
            id: customer?.customerId ? String(customer.customerId) : undefined,
            phoneNumber: customer?.customerPhoneNumber,
            email: customer?.email,
            name: customer?.name,
        };
    }

    // ----------------------------------------
    // PAYMENT METHODS
    // ----------------------------------------

    async getPaymentAccounts(token: string): Promise<{
        accounts: PaymentAccount[];
        defaultAccountId: number | null;
    }> {
        if (this.config.serverUrl) {
            return this.callProxy('getPaymentAccounts', [token, this.config.appId]);
        }

        console.log('💳 Fetching payment accounts');

        const response = await fetch(
            `${this.config.mainApiBase}/Payment/PaymentAccountsV2`,
            {
                method: 'GET',
                headers: this.buildMainApiHeaders(token),
            }
        );

        if (!response.ok) {
            if (response.status === 401 || response.status === 403) {
                throw new FlipdishApiError('Token expired or invalid', response.status, 'TOKEN_EXPIRED');
            }
            const errorText = await response.text();
            throw new FlipdishApiError(`Payment API error: ${errorText}`, response.status);
        }

        const data: FlipdishApiResponse<PaymentAccount[]> = await response.json();

        if (!data.Success || !data.Data) {
            throw new FlipdishApiError('Invalid payment accounts response', 500);
        }

        console.log(`💳 Found ${data.Data.length} payment accounts`);

        const defaultAccount = data.Data.find(acc => acc.IsDefaultPaymentMethod);

        return {
            accounts: data.Data,
            defaultAccountId: defaultAccount?.PaymentAccountId || null,
        };
    }

    async addCard(token: string, card: CardDetails): Promise<PaymentAccount> {
        if (this.config.serverUrl) {
            return this.callProxy('addCard', [token, card, this.config.appId]);
        }

        console.log('💳 Adding new card');

        const response = await fetch(
            `${this.config.mainApiBase}/Payment/CardPaymentAccount`,
            {
                method: 'POST',
                headers: this.buildMainApiHeaders(token),
                body: JSON.stringify(card),
            }
        );

        if (!response.ok) {
            const errorText = await response.text();
            throw new FlipdishApiError(`Add card failed: ${errorText}`, response.status);
        }

        const data: FlipdishApiResponse<PaymentAccount> = await response.json();

        if (!data.Success) {
            throw new FlipdishApiError(data.UserMessage || 'Failed to add payment method', 400);
        }

        console.log('💳 Card added successfully');
        return data.Data;
    }

    async setDefaultPayment(token: string, paymentAccountId: number): Promise<void> {
        if (this.config.serverUrl) {
            return this.callProxy('setDefaultPayment', [token, paymentAccountId, this.config.appId]);
        }

        console.log('💳 Setting default payment account:', paymentAccountId);

        const response = await fetch(
            `${this.config.mainApiBase}/Payment/SetDefaultPaymentAccount?PaymentAccountId=${paymentAccountId}`,
            {
                method: 'POST',
                headers: this.buildMainApiHeaders(token),
            }
        );

        if (!response.ok) {
            throw new FlipdishApiError(`Set default failed: ${response.status}`, response.status);
        }

        const data: FlipdishApiResponse<unknown> = await response.json();

        if (!data.Success) {
            throw new FlipdishApiError('Failed to set default payment account', 400);
        }

        console.log('💳 Default payment account set');
    }

    async deletePaymentAccount(token: string, paymentAccountId: number): Promise<void> {
        if (this.config.serverUrl) {
            return this.callProxy('deletePaymentAccount', [token, paymentAccountId, this.config.appId]);
        }

        console.log('💳 Deleting payment account:', paymentAccountId);

        const response = await fetch(
            `${this.config.mainApiBase}/Payment/PaymentAccount?PaymentAccountId=${paymentAccountId}`,
            {
                method: 'DELETE',
                headers: this.buildMainApiHeaders(token),
            }
        );

        if (!response.ok) {
            const errorText = await response.text();
            throw new FlipdishApiError(`Delete failed: ${errorText}`, response.status);
        }

        const data: FlipdishApiResponse<unknown> = await response.json();

        if (!data.Success) {
            throw new FlipdishApiError(data.UserMessage || 'Failed to delete payment method', 400);
        }

        console.log('💳 Payment account deleted');
    }

    // ----------------------------------------
    // BASKET METHODS
    // ----------------------------------------

    async getBasket(chatId: string, token?: string): Promise<BasketSummary> {
        if (this.config.serverUrl) {
            return this.callProxy('getBasket', [chatId, token]);
        }

        console.log(`🛒 Getting basket (${token ? 'authenticated' : 'guest'})`);

        const response = await fetch(
            `${this.config.phoneAgentBase}/tools/basket/summary`,
            {
                method: 'GET',
                headers: this.buildPhoneAgentHeaders(chatId, token),
            }
        );

        const data: PhoneAgentApiResponse<BasketSummary> = await response.json();

        if (!response.ok) {
            throw new FlipdishApiError(
                data.serverErrorMessage || 'Failed to get basket',
                response.status,
                (response.status === 401 || response.status === 403) ? 'TOKEN_EXPIRED' : undefined
            );
        }

        return data.data || {
            basketMenuItems: [],
            totalPrice: 0,
        };
    }

    async updateBasket(
        chatId: string,
        payload: {
            addMenuItems?: Array<{
                menuItemId: number;
                quantity: number;
                optionSelections?: Array<{ optionSetId: string; selectedOptions: string[] }>;
            }>;
            removeMenuItems?: Array<{
                menuItemId: number;
                quantity: number;
                optionSelections?: Array<{ optionSetId: string; selectedOptions: string[] }>;
            }>;
        },
        token?: string
    ): Promise<BasketSummary> {
        if (this.config.serverUrl) {
            // Server returns BasketSummary directly
            return this.callProxy('updateBasket', [chatId, payload, token]);
        }

        const endpoint = token
            ? `${this.config.phoneAgentBase}/tools/basket/update-items`
            : `${this.config.phoneAgentBase}/tools/basket/guest/update-items`;

        console.log(`🛒 Updating basket (${token ? 'authenticated' : 'guest'})`);
        console.log(`   Payload: ${JSON.stringify(payload)}`);

        const response = await fetch(endpoint, {
            method: 'POST',
            headers: this.buildPhoneAgentHeaders(chatId, token),
            body: JSON.stringify(payload),
        });

        const data: PhoneAgentApiResponse<BasketSummary> = await response.json();

        if (!response.ok) {
            console.log(`   ❌ Error ${response.status}: ${JSON.stringify(data)}`);
            throw new FlipdishApiError(
                data.customerErrorMessage || data.serverErrorMessage || 'Failed to update basket',
                response.status,
                (response.status === 401 || response.status === 403) ? 'TOKEN_EXPIRED' : undefined,
                data.customerErrorMessage
            );
        }

        console.log('   ✓ Basket updated');
        return data.data;
    }

    async clearBasket(chatId: string, token?: string): Promise<void> {
        if (this.config.serverUrl) {
            return this.callProxy('clearBasket', [chatId, token]);
        }

        console.log('🛒 Clearing basket');

        const basket = await this.getBasket(chatId, token);

        if (basket.basketMenuItems.length === 0) {
            console.log('   Basket already empty');
            return;
        }

        const removeItems = basket.basketMenuItems.map(item => ({
            menuItemId: item.menuItemId,
            quantity: item.quantity,
        }));

        await this.updateBasket(chatId, { removeMenuItems: removeItems }, token);

        console.log('🛒 Basket cleared');
    }

    // ----------------------------------------
    // MENU METHODS
    // ----------------------------------------

    async searchMenu(chatId: string, query: string, token?: string): Promise<MenuItem[]> {
        if (this.config.serverUrl) {
            return this.callProxy('searchMenu', [chatId, query, token]);
        }

        console.log('🔍 Searching menu for:', query);

        const response = await fetch(
            `${this.config.phoneAgentBase}/tools/menu/search/text`,
            {
                method: 'POST',
                headers: this.buildPhoneAgentHeaders(chatId, token),
                body: JSON.stringify({
                    searchTerms: [query],
                }),
            }
        );

        const data: PhoneAgentApiResponse<{ items: MenuItem[] }> = await response.json();

        if (!response.ok) {
            throw new FlipdishApiError(
                data.serverErrorMessage || 'Menu search failed',
                response.status,
                (response.status === 401 || response.status === 403) ? 'TOKEN_EXPIRED' : undefined
            );
        }

        console.log(`🔍 Found ${data.data?.items?.length || 0} items`);

        // Map raw API response to internal MenuItem type
        // The API likely returns PascalCase fields which need to be mapped to camelCase
        return (data.data?.items || []).map((item: any) => ({
            menuItemId: item.menuItemId || item.MenuItemId,
            name: item.name || item.Name,
            description: item.description || item.Description,
            menuSectionName: item.menuSectionName || item.MenuSectionName,
            price: item.price || item.Price,
            // Map possible image fields
            imageUrl: item.imageUrl || item.ImageUrl || item.ImageName,
            // Map option sets - search/text API returns optionSets (MenuItemOptionSetText[])
            optionSets: item.optionSets || item.OptionSets,
        }));
    }

    // ----------------------------------------
    // ORDER METHODS
    // ----------------------------------------

    async submitOrder(
        chatId: string,
        token: string,
        paymentAccountId?: number
    ): Promise<OrderResult> {
        if (this.config.serverUrl) {
            return this.callProxy('submitOrder', [
                chatId,
                token,
                paymentAccountId,
                this.config.appId,
                this.config.bearerToken
            ]);
        }

        console.log('📦 Submitting order');

        let accountId = paymentAccountId;
        if (!accountId) {
            const { defaultAccountId } = await this.getPaymentAccounts(token);
            if (!defaultAccountId) {
                return {
                    success: false,
                    error: 'No payment method available',
                    errorCode: 'NO_PAYMENT_METHOD',
                };
            }
            accountId = defaultAccountId;
        }

        const response = await fetch(
            `${this.config.phoneAgentBase}/tools/order/submit`,
            {
                method: 'POST',
                headers: this.buildPhoneAgentHeaders(chatId, token),
                body: JSON.stringify({
                    paymentAccountId: accountId,
                }),
            }
        );

        const data: PhoneAgentApiResponse<{
            orderId?: string;
            leadTimePrompt?: string;
        }> = await response.json();

        if (!response.ok) {
            console.log('❌ Order submission failed:', data.serverErrorMessage);
            return {
                success: false,
                error: data.customerErrorMessage || data.serverErrorMessage || 'Order failed',
                errorCode: response.status === 401 ? 'TOKEN_EXPIRED' : undefined,
            };
        }

        console.log('✅ Order submitted:', data.data?.orderId);
        try {
            await this.clearBasket(chatId, token);
        } catch (error) {
            console.warn('⚠️ Failed to clear basket after submit:', error);
        }

        return {
            success: true,
            orderId: data.data?.orderId,
            leadTimePrompt: data.data?.leadTimePrompt,
        };
    }
}

// ============================================
// SINGLETON EXPORT
// ============================================

const flipdishApi = new FlipdishAPI();

export { flipdishApi, FlipdishAPI };
export default flipdishApi;
