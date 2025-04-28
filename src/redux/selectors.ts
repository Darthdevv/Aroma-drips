import { RootState } from '@/store';
import { createSelector } from '@reduxjs/toolkit';

export const selectSelections = (state: RootState) => state.selection?.selections || [];

export const selectCurrentSelection = createSelector(
    [selectSelections, (_, productId: number | undefined) => productId],
    (selections, productId) => selections.find(s => s.id === productId)
);

export const selectCartItem = createSelector(
    [(state: RootState) => state.cart.cart, selectCurrentSelection, (_, productId: number | undefined) => productId],
    (cart, currentSelection, productId) =>
        cart.find(item =>
            item.id === productId &&
            item.size === currentSelection?.size &&
            item.addOn === currentSelection?.addOn
        )
);