import React, { useState, useEffect } from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { MenuItem, MenuItemOptionSet, MenuItemOption } from '../api/flipdish-types';
import { useFlipDish } from '../context/FlipDishProvider';
import { Loader2, ArrowLeft } from 'lucide-react';

interface MenuItemOptionModalProps {
    isOpen: boolean;
    onClose: () => void;
    item: MenuItem;
}

interface SelectionState {
    optionSetId: number;
    selectedOptionId: number | null;
}

export function MenuItemOptionModal({ isOpen, onClose, item }: MenuItemOptionModalProps) {
    const { updateBasket } = useFlipDish();
    const [currentSet, setCurrentSet] = useState<MenuItemOptionSet | undefined>(item.menuItemOptions);
    const [history, setHistory] = useState<MenuItemOptionSet[]>([]);
    const [selections, setSelections] = useState<SelectionState[]>([]);
    const [isAdding, setIsAdding] = useState(false);

    // Reset state when modal opens
    useEffect(() => {
        if (isOpen) {
            setCurrentSet(item.menuItemOptions);
            setHistory([]);
            setSelections([]);
            setIsAdding(false);
        }
    }, [isOpen, item]);

    if (!currentSet) return null;

    const handleOptionSelect = (option: MenuItemOption) => {
        // Find if we already have a selection for this set
        const existingSelectionIndex = selections.findIndex(s => s.optionSetId === currentSet.menuItemOptionSetId);

        const newSelection = {
            optionSetId: currentSet.menuItemOptionSetId,
            selectedOptionId: option.menuItemOptionSetItemId
        };

        let newSelections = [...selections];
        if (existingSelectionIndex >= 0) {
            newSelections[existingSelectionIndex] = newSelection;
        } else {
            newSelections.push(newSelection);
        }
        setSelections(newSelections);

        // Determine next step
        // In the recursive structure, the NEXT set is defined loosely.
        // Based on inspection: "afterChoosingThis" exists on the OptionSet (the parent).
        // Wait, if "afterChoosingThis" is on the Set, it means "After choosing *from* this set, go here".
        // But what if different options lead to different paths?
        // The API type I defined allows for `afterChoosingThis` on OptionSet.
        // Let's assume the linear flow for now as observed in "Coffee".

        if (currentSet.afterChoosingThis) {
            setHistory([...history, currentSet]);
            setCurrentSet(currentSet.afterChoosingThis);
        } else {
            // End of the line
            submitOrder(newSelections);
        }
    };

    const handleSkip = () => {
        if (currentSet.afterChoosingThis) {
            setHistory([...history, currentSet]);
            setCurrentSet(currentSet.afterChoosingThis);
        } else {
            submitOrder(selections);
        }
    };

    const handleBack = () => {
        if (history.length > 0) {
            const previousSet = history[history.length - 1];
            setHistory(history.slice(0, -1));
            setCurrentSet(previousSet);
            // Verify: Should we clear the selection for the current set when going back?
            // Maybe not, keeps state.
        }
    };

    const submitOrder = async (finalSelections: SelectionState[]) => {
        setIsAdding(true);
        try {
            // Collect all selected option IDs
            const allOptionIds = finalSelections.map(s => s.selectedOptionId).filter((id): id is number => id !== null);

            await updateBasket({
                type: 'add',
                menuItemId: item.menuItemId,
                quantity: 1,
                options: allOptionIds
            });
            onClose();
        } catch (error) {
            console.error("Failed to add item with options:", error);
        } finally {
            setIsAdding(false);
        }
    };

    const isOptional = currentSet.minSelectCount === 0 ||
        (currentSet.optionsRules?.toLowerCase().includes('optional'));

    return (
        <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>{item.name}</DialogTitle>
                    <DialogDescription>
                        {currentSet.name || "Choose an option"}
                    </DialogDescription>
                </DialogHeader>

                <div className="grid gap-4 py-4 max-h-[60vh] overflow-y-auto">
                    {currentSet.optionsRules && (
                        <p className="text-sm text-muted-foreground">{currentSet.optionsRules}</p>
                    )}

                    <div className="grid gap-2">
                        {currentSet.options.map((option) => (
                            <Button
                                key={option.menuItemOptionSetItemId}
                                variant="outline"
                                className="justify-between h-auto py-3 px-4"
                                onClick={() => handleOptionSelect(option)}
                                disabled={isAdding}
                            >
                                <span>{option.name}</span>
                                {option.price > 0 && (
                                    <span className="text-muted-foreground">
                                        +{(option.price).toFixed(2)}
                                    </span>
                                )}
                            </Button>
                        ))}
                    </div>
                </div>

                <DialogFooter className="flex flex-row justify-between sm:justify-between w-full">
                    <div className="flex-1">
                        {history.length > 0 && (
                            <Button variant="ghost" onClick={handleBack} disabled={isAdding} className="gap-1 pl-0">
                                <ArrowLeft className="w-4 h-4" />
                                Back
                            </Button>
                        )}
                    </div>
                    <div className="flex-1 flex justify-end">
                        {isOptional && (
                            <Button variant="secondary" onClick={handleSkip} disabled={isAdding}>
                                Skip
                            </Button>
                        )}
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
