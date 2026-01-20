import React, { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Plus, Loader2, Check } from 'lucide-react';
import { MenuItem } from '../api/flipdish-types';
import { useFlipDish } from '../context/FlipDishProvider';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "./ui/carousel"
import { MenuItemOptionModal } from './MenuItemOptionModal';

interface MenuItemCardProps {
    item: MenuItem;
    compact?: boolean;
}

export function MenuItemCard({ item, compact = false }: MenuItemCardProps) {
    const { updateBasket } = useFlipDish();
    const [isLoading, setIsLoading] = useState(false);
    const [isAdded, setIsAdded] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAdd = async () => {
        // If item has options, open modal instead of adding directly
        if (item.optionSets && item.optionSets.length > 0) {
            setIsModalOpen(true);
            return;
        }

        setIsLoading(true);
        try {
            await updateBasket({
                type: 'add',
                menuItemId: item.menuItemId,
                quantity: 1
            });
            setIsAdded(true);
            setTimeout(() => setIsAdded(false), 2000);
        } catch (err) {
            console.error('Failed to add item', err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <Card className="w-full bg-card border shadow-sm hover:shadow-md transition-all h-full flex flex-col">
                <div className="aspect-[4/3] relative overflow-hidden bg-muted rounded-t-lg">
                    {item.imageUrl ? (
                        <img
                            src={item.imageUrl}
                            alt={item.name}
                            className="w-full h-full object-cover transition-transform hover:scale-105"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-muted-foreground bg-primary/5">
                            <span className="text-3xl font-bold opacity-30">
                                {item.name.charAt(0).toUpperCase()}
                            </span>
                        </div>
                    )}
                </div>

                <CardContent className="p-3 space-y-1 flex-1">
                    <CardTitle className="text-sm font-semibold truncate" title={item.name}>
                        {item.name}
                    </CardTitle>
                    <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-primary">
                            {item.price.toFixed(2)}
                        </span>
                        {item.menuSectionName && (
                            <span className="text-[10px] text-muted-foreground uppercase truncate max-w-[80px]">
                                {item.menuSectionName}
                            </span>
                        )}
                    </div>
                    {item.description && (
                        <p className="text-xs text-muted-foreground line-clamp-2 min-h-[2.5em]">
                            {item.description}
                        </p>
                    )}
                </CardContent>

                <CardFooter className="p-3 pt-0 mt-auto">
                    <Button
                        size="sm"
                        className="w-full h-8 text-xs gap-1.5"
                        variant={isAdded ? "outline" : "default"}
                        onClick={handleAdd}
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <Loader2 className="w-3 h-3 animate-spin" />
                        ) : isAdded ? (
                            <>
                                <Check className="w-3 h-3" />
                                Added
                            </>
                        ) : (
                            <>
                                <Plus className="w-3 h-3" />
                                {item.optionSets && item.optionSets.length > 0 ? 'Customize' : 'Add'}
                            </>
                        )}
                    </Button>
                </CardFooter>
            </Card>

            <MenuItemOptionModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                item={item}
            />
        </>
    );
}

export function MenuItemCarousel({ items }: { items: MenuItem[] }) {
    if (!items || items.length === 0) return null;

    return (
        <Carousel
            opts={{
                align: "start",
                dragFree: true,
            }}
            className="w-full max-w-[95%]"
        >
            <CarouselContent className="-ml-2 md:-ml-4">
                {items.map((item) => (
                    <CarouselItem key={item.menuItemId} className="pl-2 md:pl-4 basis-[55%] sm:basis-[45%] md:basis-[40%]">
                        <MenuItemCard item={item} />
                    </CarouselItem>
                ))}
            </CarouselContent>
            {items.length > 2 && (
                <>
                    <CarouselPrevious className="hidden sm:flex -left-4 w-8 h-8" />
                    <CarouselNext className="hidden sm:flex -right-4 w-8 h-8" />
                </>
            )}
        </Carousel>
    );
}
