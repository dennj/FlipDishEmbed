'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useFlipDish } from '../context/FlipDishProvider';
import { Send, ShoppingCart, LogIn, LogOut, Loader2, X, ChevronLeft, MessageCircle, User, CreditCard, Check, Plus, Minus } from 'lucide-react';
import { cn } from '../utils/cn';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
} from './ui/card';
import { flipdishApi } from '../api/flipdish-api';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { MenuItemCarousel } from './MenuItemCard';
import { BasketItem, MenuItemOptionSelection, MenuItem, MenuItemOptionSetText, MenuItemOptionText } from '../api/flipdish-types';

// ============================================
// AUTH MODAL
// ============================================

interface AuthModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSuccess?: () => void;
}

function AuthModal({ isOpen, onClose, onSuccess }: AuthModalProps) {
    const { initiateOTP, verifyOTP } = useFlipDish();
    const [phone, setPhone] = useState('');
    const [code, setCode] = useState('');
    const [step, setStep] = useState<'phone' | 'code'>('phone');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    // Auto-verify when 4 digits are entered
    useEffect(() => {
        if (code.length === 4 && !loading) {
            handleVerify();
        }
    }, [code]);

    if (!isOpen) return null;

    const handleSendCode = async () => {
        setLoading(true);
        setError('');
        const result = await initiateOTP(phone);
        setLoading(false);
        if (result.success) {
            setStep('code');
        } else {
            setError(result.error || 'Failed to send code');
        }
    };

    const handleVerify = async () => {
        if (code.length !== 4) return;
        setLoading(true);
        setError('');
        const result = await verifyOTP(phone, code);
        setLoading(false);
        if (result.success) {
            if (onSuccess) onSuccess();
            onClose();
        } else {
            setError(result.error || 'Invalid code');
        }
    };

    return (
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <Card className="w-full max-w-sm shadow-lg animate-in fade-in zoom-in-95 duration-200">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-xl">Sign In</CardTitle>
                    <Button variant="ghost" size="icon" onClick={onClose} className="h-8 w-8 p-0">
                        <X className="h-4 w-4" />
                    </Button>
                </CardHeader>
                <CardContent className="pt-4">
                    {step === 'phone' ? (
                        <div className="space-y-4">
                            <p className="text-sm text-muted-foreground">
                                Enter your phone number to receive a verification code
                            </p>
                            <div className="space-y-2">
                                <Input
                                    type="tel"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    placeholder="+353 89 123 4567"
                                />
                                {error && <p className="text-destructive text-xs">{error}</p>}
                            </div>
                            <div className="flex gap-2">
                                <Button variant="outline" className="flex-1" onClick={onClose}>Cancel</Button>
                                <Button className="flex-1" onClick={handleSendCode} disabled={loading || !phone}>
                                    {loading ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : null}
                                    Send Code
                                </Button>
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            <Button variant="link" className="px-0 h-auto text-muted-foreground" onClick={() => setStep('phone')}>
                                <ChevronLeft className="w-4 h-4 mr-1" />
                                Back
                            </Button>
                            <p className="text-sm text-muted-foreground">
                                Enter the 4-digit code sent to <span className="font-medium text-foreground">{phone}</span>
                            </p>
                            <div className="space-y-2">
                                <Input
                                    type="text"
                                    value={code}
                                    onChange={(e) => setCode(e.target.value)}
                                    placeholder="0000"
                                    className="text-center text-2xl tracking-[0.5em] font-mono"
                                    maxLength={4}
                                    disabled={loading}
                                />
                                {error && <p className="text-destructive text-xs">{error}</p>}
                                {loading && (
                                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                                        <Loader2 className="w-4 h-4 animate-spin" />
                                        <span>Verifying...</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}

// ============================================
// BASKET PANEL
// ============================================

interface BasketPanelProps {
    isOpen: boolean;
    onClose: () => void;
    onSignInNeeded: () => void;
}

function BasketPanel({ isOpen, onClose, onSignInNeeded }: BasketPanelProps) {
    const { basketItems, basketTotal, isAuthenticated, defaultPaymentAccount, placeOrder, addMessage, updateBasket, menuItems, addMenuItems, sessionId } = useFlipDish();
    const [isPlacingOrder, setIsPlacingOrder] = React.useState(false);
    const [updatingItemId, setUpdatingItemId] = React.useState<number | null>(null);
    const [error, setError] = React.useState<string | null>(null);

    const getOptionSelections = (item: BasketItem, explicitMenuItem?: MenuItem): MenuItemOptionSelection[] | undefined => {
        if (!item.menuItemOptionSetItems || item.menuItemOptionSetItems.length === 0) return undefined;

        // Find the original menu item to get option set IDs
        // Use the explicit one if provided (avoids stale state race condition), otherwise look in context
        const menuItem = explicitMenuItem || menuItems.find(m => m.menuItemId === item.menuItemId);
        if (!menuItem || !menuItem.optionSets) return undefined;

        const selections: MenuItemOptionSelection[] = [];

        // Group basket options by their set
        // Challenge: Basket options don't have set IDs directly, we have to infer from the menu definition
        // We iterate through the menu's option sets and see if any selected options match

        if (menuItem.optionSets) {
            menuItem.optionSets.forEach((optionSet: MenuItemOptionSetText) => {
                const selectedOptionsInSet: string[] = [];

                optionSet.options.forEach((option: MenuItemOptionText) => {
                    // Check if this option is in our basket item's choices
                    // Note: This relies on unique option names within the item context, which is generally true but not guaranteed by schema
                    // A more robust way would need option IDs from the basket, but the current type might not have them fully mapped?
                    // Checking BasketItemOption definition: it has menuItemOptionSetItemId but not the set ID.

                    const found = item.menuItemOptionSetItems?.find(
                        i => i.name === option.name
                    );

                    if (found) {
                        selectedOptionsInSet.push(option.name);
                    }
                });

                if (selectedOptionsInSet.length > 0) {
                    selections.push({
                        optionSetId: optionSet.optionSetId,
                        selectedOptions: selectedOptionsInSet
                    });
                }
            });
        }

        return selections.length > 0 ? selections : undefined;
    };

    const handleUpdateQuantity = async (item: BasketItem, delta: number, idx: number) => {
        console.log(`🔘 Update Quantity Clicked:`, { item, delta, idx });
        setUpdatingItemId(idx);

        try {
            // Explicit Failure Check: We must have the menu definition to update items with options
            let menuItem: MenuItem | undefined = undefined;

            if (item.menuItemOptionSetItems && item.menuItemOptionSetItems.length > 0) {
                menuItem = menuItems.find(m => m.menuItemId === item.menuItemId);

                // LAZY LOAD: If we don't have the definition, try to fetch it specifically (self-healing)
                if (!menuItem && sessionId) {
                    console.log(`⚠️ Item ${item.menuItemId} missing definition. Attempting lazy fetch...`);
                    try {
                        // Search by exact name to find the definition
                        const results = await flipdishApi.searchMenu(sessionId, item.name);
                        const found = results.find(m => m.menuItemId === item.menuItemId); // ensure ID match
                        if (found) {
                            console.log(`✅ Lazy fetch successful for ${item.name}`);
                            addMenuItems([found]);
                            menuItem = found; // Update local reference for this run
                        } else {
                            console.warn(`❌ Lazy fetch returned results but ID mismatch or not found.`);
                        }
                    } catch (err) {
                        console.error("Lazy fetch failed:", err);
                    }
                }

                if (!menuItem) {
                    alert("System Error: Menu item definition missing. Cannot update options. Please reload or contact support.");
                    throw new Error(`Menu item definition not found for ID ${item.menuItemId}`);
                }
            } else {
                // For items without options (simple items), we don't strictly need the definition, 
                // but it's good practice. We'll proceed without it for now as strict check is only for options.
            }

            // Pass the menuItem (which might be the one we just fetched) to avoid race condition with stale context state
            const optionSelections = getOptionSelections(item, menuItem);

            await updateBasket({
                type: delta > 0 ? 'add' : 'remove',
                menuItemId: item.menuItemId,
                quantity: Math.abs(delta),
                optionSelections
            });
        } catch (e) {
            console.error("Failed to update quantity", e);
            // If it's not the specific alert we just threw, might be API error
            if (e instanceof Error && !e.message.includes("Menu item definition")) {
                // optionally show error in UI state
            }
        } finally {
            setUpdatingItemId(null);
        }
    };

    const buildConfirmationMessage = (leadTimePrompt?: string, orderId?: string) => {
        let message = 'Thanks! Your order has been placed.';
        if (leadTimePrompt) {
            const trimmed = leadTimePrompt.replace(/^Tell the user:\s*/i, '').trim();
            message = trimmed.replace(/^"+|"+$/g, '') || message;
        }
        if (orderId) {
            message += `\nOrder ID: ${orderId}`;
        }
        return message;
    };

    const handleCheckout = async () => {
        setError(null);
        if (!isAuthenticated) {
            onClose();
            onSignInNeeded();
            return;
        }
        setIsPlacingOrder(true);
        console.log('🛒 Placing order...');
        const result = await placeOrder(defaultPaymentAccount?.PaymentAccountId);
        setIsPlacingOrder(false);
        if (result.success) {
            addMessage({
                role: 'assistant',
                content: buildConfirmationMessage(result.leadTimePrompt, result.orderId),
            });
            onClose();
        } else {
            setError(result.error || 'Failed to place order');
        }
    };

    if (!isOpen) return null;

    return (
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-end justify-center z-50">
            <Card className="w-full max-h-[85%] flex flex-col rounded-b-none border-b-0 shadow-xl animate-in slide-in-from-bottom duration-300">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 border-b">
                    <CardTitle>Your Basket</CardTitle>
                    <Button variant="ghost" size="icon" onClick={onClose} className="h-8 w-8 p-0">
                        <X className="h-4 w-4" />
                    </Button>
                </CardHeader>

                <div className="flex-1 overflow-y-auto p-4">
                    {basketItems.length === 0 ? (
                        <div className="text-center py-12 space-y-4">
                            <div className="bg-muted w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                                <ShoppingCart className="w-8 h-8 text-muted-foreground" />
                            </div>
                            <p className="text-muted-foreground">Your basket is empty</p>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {basketItems.map((item, idx) => (
                                <div key={idx} className="flex justify-between items-start pb-4 border-b last:border-0 last:pb-0">
                                    <div className="flex-1 min-w-0">
                                        <div className="flex justify-between">
                                            <p className="font-medium text-sm">{item.name}</p>
                                            <p className="font-semibold text-sm text-right">{item.totalPrice.toFixed(2)}</p>
                                        </div>
                                        {item.menuItemOptionSetItems && item.menuItemOptionSetItems.length > 0 && (
                                            <p className="text-xs text-muted-foreground mt-1">
                                                {item.menuItemOptionSetItems.map(opt => opt.name).join(', ')}
                                            </p>
                                        )}

                                        <div className="flex items-center gap-3 mt-3">
                                            <div className="flex items-center border rounded-md shadow-sm bg-background">
                                                <button
                                                    className="p-1 px-2 hover:bg-muted text-muted-foreground transition-colors disabled:opacity-50"
                                                    onClick={() => handleUpdateQuantity(item, -1, idx)}
                                                    disabled={updatingItemId === idx}
                                                >
                                                    <Minus className="w-3 h-3" />
                                                </button>
                                                <span className="text-xs font-medium w-6 text-center">
                                                    {updatingItemId === idx ? (
                                                        <Loader2 className="w-3 h-3 animate-spin mx-auto" />
                                                    ) : (
                                                        item.quantity
                                                    )}
                                                </span>
                                                <button
                                                    className="p-1 px-2 hover:bg-muted text-muted-foreground transition-colors disabled:opacity-50"
                                                    onClick={() => handleUpdateQuantity(item, 1, idx)}
                                                    disabled={updatingItemId === idx}
                                                >
                                                    <Plus className="w-3 h-3" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {basketItems.length > 0 && (
                    <div className="p-4 border-t bg-muted/20">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-muted-foreground">Total</span>
                            <span className="text-xl font-bold">{basketTotal.toFixed(2)}</span>
                        </div>

                        {isAuthenticated && defaultPaymentAccount && (
                            <p className="text-xs text-muted-foreground mb-4">
                                Payment: {defaultPaymentAccount.Description}
                            </p>
                        )}

                        {error && (
                            <div className="mb-4 p-3 bg-destructive/10 border border-destructive/20 rounded-md">
                                <p className="text-xs text-destructive font-medium">{error}</p>
                            </div>
                        )}

                        <Button className="w-full" onClick={handleCheckout} disabled={isPlacingOrder}>
                            {isPlacingOrder ? (
                                <>
                                    <Loader2 className="w-4 h-4 animate-spin mr-2" />
                                    Processing...
                                </>
                            ) : (
                                isAuthenticated ? "Buy Now" : "Log in to Checkout"
                            )}
                        </Button>
                    </div>
                )}
            </Card>
        </div>
    );
}

// ============================================
// PAYMENT METHOD PANEL
// ============================================

interface PaymentMethodPanelProps {
    isOpen: boolean;
    onClose: () => void;
}

function PaymentMethodPanel({ isOpen, onClose }: PaymentMethodPanelProps) {
    const { paymentAccounts, defaultPaymentAccount, setPaymentMethod, logout } = useFlipDish();

    const handleLogout = () => {
        logout();
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <Card className="w-full max-w-sm shadow-lg animate-in fade-in zoom-in-95 duration-200">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-xl">Payment Methods</CardTitle>
                    <Button variant="ghost" size="icon" onClick={onClose} className="h-8 w-8 p-0">
                        <X className="h-4 w-4" />
                    </Button>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                    <div className="space-y-2">
                        {paymentAccounts.length === 0 ? (
                            <p className="text-sm text-muted-foreground text-center py-4">No payment methods found</p>
                        ) : (
                            paymentAccounts.map((account) => {
                                const isSelected = defaultPaymentAccount?.PaymentAccountId === account.PaymentAccountId;
                                return (
                                    <div
                                        key={account.PaymentAccountId}
                                        className={cn(
                                            "flex items-center justify-between p-3 rounded-lg border cursor-pointer transition-colors",
                                            isSelected ? "bg-primary/5 border-primary" : "hover:bg-muted"
                                        )}
                                        onClick={() => setPaymentMethod(account.PaymentAccountId)}
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="bg-muted p-2 rounded-full">
                                                <CreditCard className="w-4 h-4 text-muted-foreground" />
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-sm font-medium">{account.Description}</span>
                                            </div>
                                        </div>
                                        {isSelected && (
                                            <Check className="w-4 h-4 text-primary" />
                                        )}
                                    </div>
                                );
                            })
                        )}
                    </div>

                    <Button variant="destructive" className="w-full" onClick={handleLogout}>
                        <LogOut className="w-4 h-4 mr-2" />
                        Log Out
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}

// ============================================
// MAIN CHAT COMPONENT
// ============================================

export function FlipDishChat() {
    const {
        messages,
        sendMessage,
        isLoading,
        isInitialized,
        isAuthenticated,
        isRestaurantOpen,
        restaurantStatus,
        basketItems,
        logout,
        phoneNumber,
        addMenuItems,
    } = useFlipDish();

    const [input, setInput] = useState('');
    const [showAuth, setShowAuth] = useState(false);
    const [showBasket, setShowBasket] = useState(false);
    const [showProfile, setShowProfile] = useState(false);
    const [returnToBasket, setReturnToBasket] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    // Auto-scroll
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    // Capture menu items from tool messages to populate our local cache
    useEffect(() => {
        messages.forEach(msg => {
            if (msg.role === 'tool') {
                try {
                    const content = JSON.parse(msg.content);
                    if (content.displayType === 'menu_cards' && content.items && Array.isArray(content.items)) {
                        addMenuItems(content.items);
                    }
                } catch {
                    // Ignore invalid JSON
                }
            }
        });
    }, [messages, addMenuItems]);

    const handleSend = async () => {
        if (!input.trim() || isLoading) return;
        const message = input;
        setInput('');

        try {
            const response = await sendMessage(message);

            // Handle Token Expiry (Hard Reset)
            if (response.tokenExpired) {
                logout();
                window.location.reload();
                return;
            }

            // Handle simple auth requirement (e.g. checkout attempt)
            if (response.authRequired) {
                setReturnToBasket(true);
                setShowAuth(true);
            }
            if (response.orderSubmitted && showBasket) {
                setShowBasket(false);
            }
        } catch (error) {
            console.error('Chat error:', error);
        }
    };

    const renderMessageContent = (msg: any) => {
        // Handle User Messages
        if (msg.role === 'user') {
            return (
                <div className="flex flex-col gap-1 items-end">
                    <div className="bg-primary text-primary-foreground rounded-2xl rounded-br-sm px-5 py-3 text-sm shadow-sm">
                        <p className="whitespace-pre-wrap leading-relaxed">{msg.content}</p>
                    </div>
                </div>
            );
        }

        // Handle Tool Messages (Rich Content)
        if (msg.role === 'tool') {
            try {
                const content = JSON.parse(msg.content);
                if (content.displayType === 'menu_cards' && content.items?.length > 0) {
                    return (
                        <div className="w-full pl-11 mb-2">
                            <MenuItemCarousel items={content.items} />
                        </div>
                    );
                }
            } catch (e) {
                // Ignore invalid JSON or non-displayable tools
                return null;
            }
            return null;
        }

        // Handle Assistant Messages (Text)
        if (msg.role === 'assistant') {
            if (!msg.content) return null; // Skip empty assistant messages (e.g. only tool calls)
            return (
                <div className="flex gap-3 max-w-[85%] animate-in fade-in slide-in-from-bottom-2 duration-300">
                    <Avatar className="h-8 w-8 mt-1 border shadow-sm bg-card">
                        <AvatarImage src="/placeholder-logo.png" />
                        <AvatarFallback className="bg-background text-[10px] font-bold text-muted-foreground">AI</AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col gap-1">
                        <div className="bg-card text-card-foreground border rounded-2xl rounded-bl-sm px-5 py-3 text-sm shadow-sm overflow-hidden prose prose-sm dark:prose-invert max-w-none leading-relaxed break-words [&>p]:mb-2 [&>p:last-child]:mb-0 [&>ul]:list-disc [&>ul]:pl-4 [&>ol]:list-decimal [&>ol]:pl-4">
                            <ReactMarkdown
                                remarkPlugins={[remarkGfm]}
                                components={{
                                    // Use defaults but ensure links open in new tab
                                    a: (props: any) => <a target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2 hover:text-primary/80" {...props} />,
                                }}
                            >
                                {msg.content}
                            </ReactMarkdown>
                        </div>
                    </div>
                </div>
            );
        }

        return null; // Ensure functional component return type compliance
    };

    // Filter messages to show (User, Assistant, and Tools with displayable content)
    const visibleMessages = messages.filter(m => {
        if (m.role === 'system') return false;
        if (m.role === 'tool') {
            try {
                const content = JSON.parse(m.content);
                return content.displayType === 'menu_cards';
            } catch {
                return false;
            }
        }
        return true;
    });

    if (!isInitialized) {
        return (
            <div className="flex flex-col h-full bg-background items-center justify-center space-y-4">
                <Loader2 className="w-8 h-8 animate-spin text-primary" />
                <p className="text-sm text-muted-foreground font-medium">Connecting...</p>
            </div>
        );
    }

    return (
        <Card className="flex flex-col h-full rounded-xl border shadow-lg overflow-hidden bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            {/* Header */}
            <CardHeader className="flex flex-row items-center justify-between p-4 border-b space-y-0 text-left bg-card/50">
                <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10 border-2 border-background shadow-sm">
                        <AvatarImage src="/placeholder-logo.png" />
                        <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
                            {restaurantStatus?.restaurantName?.charAt(0) || 'F'}
                        </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col gap-0.5">
                        <CardTitle className="text-base font-semibold leading-none">
                            FlipDish
                        </CardTitle>
                        <div className="flex items-center gap-1.5">
                            <span className={cn(
                                "flex h-2 w-2 rounded-full",
                                isRestaurantOpen ? "bg-green-500" : "bg-red-500"
                            )}>
                                <span className={cn(
                                    "animate-ping absolute inline-flex h-2 w-2 rounded-full opacity-75",
                                    isRestaurantOpen ? "bg-green-400" : "bg-red-400"
                                )} />
                            </span>
                            <CardDescription className="text-xs font-medium">
                                {isRestaurantOpen ? 'Online & Ordering' : 'Currently Closed'}
                            </CardDescription>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-1">
                    <Button
                        variant="secondary"
                        size="icon"
                        onClick={() => setShowBasket(true)}
                        className="relative h-9 w-9 rounded-full shadow-sm"
                    >
                        <ShoppingCart className="h-4 w-4" />
                        {basketItems.length > 0 && (
                            <span className="absolute -top-1 -right-1 h-5 w-5 bg-primary text-primary-foreground text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-background shadow-sm">
                                {basketItems.length}
                            </span>
                        )}
                    </Button>

                    {isAuthenticated ? (
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setShowProfile(true)}
                            title="Profile & Payment"
                            className="h-9 w-9 rounded-full"
                        >
                            <User className="h-4 w-4 text-muted-foreground" />
                        </Button>
                    ) : (
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setShowAuth(true)}
                            title="Sign in"
                            className="h-9 w-9 rounded-full"
                        >
                            <LogIn className="h-4 w-4 text-muted-foreground" />
                        </Button>
                    )}
                </div>
            </CardHeader>

            {/* Messages */}
            <CardContent className="flex-1 overflow-y-auto p-4 space-y-6 bg-muted/10 scroll-smooth" ref={scrollRef}>
                {visibleMessages.length === 0 && (
                    <div className="flex flex-col items-center justify-center h-full text-center px-6 py-10 animate-in fade-in zoom-in duration-300">
                        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 shadow-instagram">
                            <MessageCircle className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="font-semibold text-lg mb-2">Welcome!</h3>
                        <p className="text-sm text-muted-foreground mb-8 max-w-[260px] leading-relaxed">
                            I can help you browse the menu, find popular items, and track your order.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-sm">
                            {['🍔 Show me burgers', '🥗 Vegetarian options', '🥤 Drinks menu', '🥡 Popular items'].map((text) => (
                                <Button
                                    key={text}
                                    variant="outline"
                                    className="h-auto py-3 px-4 justify-start text-sm font-normal text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-primary/5 transition-all"
                                    onClick={() => setInput(text)}
                                >
                                    {text}
                                </Button>
                            ))}
                        </div>
                    </div>
                )}

                {visibleMessages.map((msg, idx) => {
                    // Suppress assistant text if the immediate next message is a menu_cards display
                    if (msg.role === 'assistant') {
                        const nextMsg = visibleMessages[idx + 1];
                        if (nextMsg && nextMsg.role === 'tool') {
                            try {
                                const content = JSON.parse(nextMsg.content);
                                if (content.displayType === 'menu_cards') {
                                    return null;
                                }
                            } catch {
                                // ignore
                            }
                        }
                    }

                    return (
                        <React.Fragment key={idx}>
                            {renderMessageContent(msg)}
                        </React.Fragment>
                    );
                })}

                {isLoading && (
                    <div className="flex gap-3 max-w-[85%] animate-pulse">
                        <Avatar className="h-8 w-8 mt-1 border shadow-sm">
                            <AvatarFallback className="bg-background text-[10px]">AI</AvatarFallback>
                        </Avatar>
                        <div className="bg-card border rounded-2xl rounded-bl-sm px-5 py-4 shadow-sm flex items-center gap-1.5 w-20">
                            <span className="w-1.5 h-1.5 bg-foreground/30 rounded-full animate-bounce [animation-delay:-0.3s]" />
                            <span className="w-1.5 h-1.5 bg-foreground/30 rounded-full animate-bounce [animation-delay:-0.15s]" />
                            <span className="w-1.5 h-1.5 bg-foreground/30 rounded-full animate-bounce" />
                        </div>
                    </div>
                )}
            </CardContent>

            {/* Input */}
            <CardFooter className="p-4 bg-background border-t">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleSend();
                    }}
                    className="flex w-full items-end gap-2 relative"
                >
                    <div className="relative flex-1">
                        <Input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Type a message..."
                            disabled={isLoading}
                            className="pr-12 py-6 bg-muted/30 border-muted-foreground/20 focus-visible:ring-primary/20 rounded-xl"
                        />
                    </div>
                    <Button
                        type="submit"
                        size="icon"
                        disabled={isLoading || !input.trim()}
                        className={cn(
                            "h-12 w-12 rounded-xl shrink-0 shadow-sm transition-all",
                            input.trim() ? "bg-primary hover:bg-primary/90" : "bg-muted text-muted-foreground"
                        )}
                    >
                        <Send className="h-5 w-5" />
                        <span className="sr-only">Send</span>
                    </Button>
                </form>
            </CardFooter>

            <AuthModal
                isOpen={showAuth}
                onClose={() => setShowAuth(false)}
                onSuccess={() => {
                    if (returnToBasket) {
                        setShowBasket(true);
                        setReturnToBasket(false);
                    }
                }}
            />

            <BasketPanel
                isOpen={showBasket}
                onClose={() => setShowBasket(false)}
                onSignInNeeded={() => {
                    setReturnToBasket(true);
                    setShowAuth(true);
                }}
            />

            <PaymentMethodPanel
                isOpen={showProfile}
                onClose={() => setShowProfile(false)}
            />
        </Card >
    );
}
