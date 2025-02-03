import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


interface Product {
    id: number;
    name: string;
    imageUrl: string;
    price: string;
    quantity: number;
}


interface CartState {
    cart: Product[];
    orderHistory: Product[];
}

const initialState: CartState = {
    cart: [],
    orderHistory: [],
};


const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        
        addToCart: (state, action: PayloadAction<Product>) => {
            const existingProduct = state.cart.find((item) => item.id === action.payload.id);
            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                state.cart.push({ ...action.payload, quantity: 1 });
            }
        },

       
        removeFromCart: (state, action: PayloadAction<number>) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload);
        },

        
        increaseQuantity: (state, action: PayloadAction<number>) => {
            const product = state.cart.find((item) => item.id === action.payload);
            if (product) {
                product.quantity += 1;
            }
        },

        
        decreaseQuantity: (state, action: PayloadAction<number>) => {
            const product = state.cart.find((item) => item.id === action.payload);
            if (product && product.quantity > 1) {
                product.quantity -= 1;
            }
        },

        
        checkout: (state) => {
            state.orderHistory = [...state.orderHistory, ...state.cart];
            state.cart = [];
        },
    },
});


export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, checkout } = cartSlice.actions;


const persistConfig = {
    key: "cart",
    storage,
};

export default persistReducer(persistConfig, cartSlice.reducer);
