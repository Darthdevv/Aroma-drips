import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

/**
 * @interface Product
 * @description Represents a product in the cart.
 * @property {number} id - Unique identifier for the product.
 * @property {string} name - Name of the product.
 * @property {string} description - Description of the product.
 * @property {string} imageUrl - URL of the product image.
 * @property {number} price - Price of the product (number type for calculations).
 * @property {number} quantity - Quantity of the product in the cart.
 * @property {string} category - Category of the product.
 */
interface Product {
    id: number;
    name: string;
    imageUrl: string;
    description: string;
    price: number;
    quantity: number;
    category: string;
}

/**
 * @interface CartState
 * @description Represents the state structure for the cart.
 * @property {Product[]} cart - List of products in the cart.
 * @property {Product[]} orderHistory - List of products previously ordered.
 */
interface CartState {
    cart: Product[];
    orderHistory: Product[];
}

/**
 * Initial state of the cart.
 */
const initialState: CartState = {
    cart: [],
    orderHistory: [],
};

/**
 * Redux Slice for Cart Management.
 */
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {

        /**
         * @function addToCart
         * @description Adds a product to the cart. If it already exists, increases its quantity.
         */
        addToCart: (state, action: PayloadAction<Product>) => {
            const existingProduct = state.cart.find((item) => item.id === action.payload.id);
            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                state.cart.push({ ...action.payload, quantity: 1 });
            }
        },

        /**
         * @function removeProduct
         * @description Removes a product from the cart by its ID.
         */
        removeProduct: (state, action: PayloadAction<number>) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload);
        },

        /**
         * @function increaseQuantity
         * @description Increases the quantity of a product in the cart.
         */
        increaseQuantity: (state, action: PayloadAction<number>) => {
            const product = state.cart.find((item) => item.id === action.payload);
            if (product) {
                product.quantity += 1;
            }
        },

        /**
         * @function decreaseQuantity
         * @description Decreases the quantity of a product. If the quantity reaches 0, it is removed from the cart.
         */
        decreaseQuantity: (state, action: PayloadAction<number>) => {
            const productIndex = state.cart.findIndex((item) => item.id === action.payload);
            if (productIndex !== -1) {
                if (state.cart[productIndex].quantity > 1) {
                    state.cart[productIndex].quantity -= 1;
                } else {
                    state.cart.splice(productIndex, 1); // Remove product if quantity reaches 0
                }
            }
        },

        /**
         * @function checkout
         * @description Moves all cart items to order history and clears the cart.
         */
        checkout: (state) => {
            state.orderHistory = [...state.orderHistory, ...state.cart];
            state.cart = [];
        },
    },
});

/**
 * Exports all cart actions.
 */
export const { addToCart, removeProduct, increaseQuantity, decreaseQuantity, checkout } = cartSlice.actions;

/**
 * Configuration for persisting cart state.
 */
const persistConfig = {
    key: "cart",
    storage,
};

/**
 * Exports the persisted reducer.
 */
export default persistReducer(persistConfig, cartSlice.reducer);
