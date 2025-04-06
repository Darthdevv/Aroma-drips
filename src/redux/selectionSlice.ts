import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Selection {
    id: number;
    size: string;
    addOn: string;
    quantity: number;
}

interface SelectionState {
    selections: Selection[];
}

const initialState: SelectionState = {
    selections: [],
};

const selectionSlice = createSlice({
    name: "selection",
    initialState,
    reducers: {
        selectSize: (state: SelectionState, action: PayloadAction<{ id: number, size: string }>) => {
            // Ensure state.selections exists
            state.selections = state.selections || [];

            const existing = state.selections.find(s => s.id === action.payload.id);
            if (existing) {
                existing.size = action.payload.size;
            } else {
                state.selections.push({
                    id: action.payload.id,
                    size: action.payload.size,
                    addOn: "",
                    quantity: 1 // Initialize with quantity 1
                });
            }
        },
        increaseSelectionQuantity: (state, action: PayloadAction<number>) => {
            const selection = state.selections.find(s => s.id === action.payload);
            if (selection) {
                selection.quantity += 1;
            }
        },
        decreaseSelectionQuantity: (state, action: PayloadAction<number>) => {
            const selectionIndex = state.selections.findIndex(s => s.id === action.payload);
            if (selectionIndex !== -1) {
                if (state.selections[selectionIndex].quantity > 1) {
                    state.selections[selectionIndex].quantity -= 1;
                } else {
                    state.selections.splice(selectionIndex, 1);
                }
            }
        },
        selectAddOn: (state, action: PayloadAction<{ id: number, addOn: string }>) => {
            const existing = state.selections.find(s => s.id === action.payload.id);
            if (existing) {
                existing.addOn = action.payload.addOn;
            } else {
                state.selections.push({
                    id: action.payload.id,
                    size: "",
                    addOn: action.payload.addOn,
                    quantity: 1 // Initialize with quantity 1
                });
            }
        },
        clearSelection: (state, action: PayloadAction<number>) => {
            state.selections = state.selections.filter(s => s.id !== action.payload);
        }
    }
});

export const {
    selectSize,
    selectAddOn,
    clearSelection,
    increaseSelectionQuantity,
    decreaseSelectionQuantity } = selectionSlice.actions;
export default selectionSlice.reducer;