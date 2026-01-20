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
import { MenuItem, MenuItemOptionSetText, MenuItemOptionText, MenuItemOptionSelection } from '../api/flipdish-types';
import { useFlipDish } from '../context/FlipDishProvider';
import { Loader2, ArrowLeft } from 'lucide-react';

interface MenuItemOptionModalProps {
    isOpen: boolean;
    onClose: () => void;
    item: MenuItem;
}

interface SelectionState {
    optionSetId: string;
    selectedOptions: string[];
}

export function MenuItemOptionModal({ isOpen, onClose, item }: MenuItemOptionModalProps) {
    const { updateBasket } = useFlipDish();
    const optionSets = item.optionSets || [];
    const [currentSetIndex, setCurrentSetIndex] = useState(0);
    const [selections, setSelections] = useState<SelectionState[]>([]);
    const [isAdding, setIsAdding] = useState(false);

    // Reset state when modal opens
    useEffect(() => {
        if (isOpen) {
            console.log('[OptionModal] Opening for item:', item.name, 'optionSets:', optionSets);
            setCurrentSetIndex(0);
            setSelections([]);
            setIsAdding(false);
        }
    }, [isOpen, item]);

    const currentSet = optionSets[currentSetIndex];

    if (!currentSet) {
        console.log('[OptionModal] No current set at index:', currentSetIndex, 'total sets:', optionSets.length);
        return null;
    }

    const handleOptionSelect = (option: MenuItemOptionText) => {
        console.log('[OptionModal] Selected option:', option.name, 'for set:', currentSet.optionSetId);

        // Find if we already have a selection for this set
        const existingSelectionIndex = selections.findIndex(s => s.optionSetId === currentSet.optionSetId);

        const newSelection: SelectionState = {
            optionSetId: currentSet.optionSetId,
            selectedOptions: [option.name] // Single select for now
        };

        let newSelections = [...selections];
        if (existingSelectionIndex >= 0) {
            newSelections[existingSelectionIndex] = newSelection;
        } else {
            newSelections.push(newSelection);
        }
        setSelections(newSelections);

        // Move to next set or submit
        if (currentSetIndex < optionSets.length - 1) {
            setCurrentSetIndex(currentSetIndex + 1);
        } else {
            // End of all option sets
            submitOrder(newSelections);
        }
    };

    const handleSkip = () => {
        console.log('[OptionModal] Skipping set:', currentSet.optionSetId);
        if (currentSetIndex < optionSets.length - 1) {
            setCurrentSetIndex(currentSetIndex + 1);
        } else {
            submitOrder(selections);
        }
    };

    const handleBack = () => {
        if (currentSetIndex > 0) {
            setCurrentSetIndex(currentSetIndex - 1);
        }
    };

    const submitOrder = async (finalSelections: SelectionState[]) => {
        console.log('[OptionModal] Submitting with selections:', finalSelections);
        setIsAdding(true);
        try {
            // Convert to API format
            const optionSelections: MenuItemOptionSelection[] = finalSelections.map(s => ({
                optionSetId: s.optionSetId,
                selectedOptions: s.selectedOptions
            }));

            console.log('[OptionModal] Calling updateBasket with optionSelections:', optionSelections);

            await updateBasket({
                type: 'add',
                menuItemId: item.menuItemId,
                quantity: 1,
                optionSelections
            });
            onClose();
        } catch (error) {
            console.error("[OptionModal] Failed to add item with options:", error);
        } finally {
            setIsAdding(false);
        }
    };

    const isOptional = !currentSet.required || currentSet.min === 0;

    return (
        <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>{item.name}</DialogTitle>
                    <DialogDescription>
                        {currentSet.optionSetId}
                        {currentSet.required && <span className="text-destructive ml-1">*</span>}
                    </DialogDescription>
                </DialogHeader>

                <div className="grid gap-4 py-4 max-h-[60vh] overflow-y-auto">
                    <p className="text-sm text-muted-foreground">
                        {currentSet.required ? 'Required - ' : 'Optional - '}
                        Select {currentSet.min === currentSet.max ? currentSet.min : `${currentSet.min}-${currentSet.max}`}
                    </p>

                    <div className="grid gap-2">
                        {currentSet.options.map((option, idx) => (
                            <Button
                                key={`${currentSet.optionSetId}-${option.name}-${idx}`}
                                variant="outline"
                                className="justify-between h-auto py-3 px-4"
                                onClick={() => handleOptionSelect(option)}
                                disabled={isAdding}
                            >
                                <span>{option.name}</span>
                                {option.price && option.price > 0 && (
                                    <span className="text-muted-foreground">
                                        +{option.price.toFixed(2)}
                                    </span>
                                )}
                            </Button>
                        ))}
                    </div>
                </div>

                <DialogFooter className="flex flex-row justify-between sm:justify-between w-full">
                    <div className="flex-1">
                        {currentSetIndex > 0 && (
                            <Button variant="ghost" onClick={handleBack} disabled={isAdding} className="gap-1 pl-0">
                                <ArrowLeft className="w-4 h-4" />
                                Back
                            </Button>
                        )}
                    </div>
                    <div className="flex-1 flex justify-end">
                        {isOptional && (
                            <Button variant="secondary" onClick={handleSkip} disabled={isAdding}>
                                {currentSetIndex < optionSets.length - 1 ? 'Skip' : 'Add Without'}
                            </Button>
                        )}
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
