import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
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
// Update your Product interface in cartSlice.ts
interface Product {
    id: number;
    name: string;
    imageUrl: string;
    description: string;
    price: number;
    quantity: number;
    category: string;
    size: string;
    addOn: string;
    basePrice: number; // To track original price before add-ons
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
            const existingProduct = state.cart.find(
                item => item.id === action.payload.id &&
                    item.size === action.payload.size &&
                    item.addOn === action.payload.addOn
            );

            if (existingProduct) {
                existingProduct.quantity += action.payload.quantity || 1;
            } else {
                state.cart.push({
                    ...action.payload,
                    quantity: action.payload.quantity || 1
                });
            }
            toast.success("Added To cart successfully")
        },
        /**
         * @function removeProduct
         * @description Removes a product from the cart by its ID.
         */
        // In your cartSlice.ts
        removeProduct: (state, action: PayloadAction<{ id: number, size: string, addOn: string }>) => {
            state.cart = state.cart.filter(item =>
                !(item.id === action.payload.id &&
                    item.size === action.payload.size &&
                    item.addOn === action.payload.addOn)
            );
            toast.success('Removed from cart successfully')
        },

        /**
         * @function increaseQuantity
         * @description Increases the quantity of a product in the cart.
         */
        increaseQuantity: (state, action: PayloadAction<{ id: number, size: string, addOn: string }>) => {
            const product = state.cart.find(
                item => item.id === action.payload.id &&
                    item.size === action.payload.size &&
                    item.addOn === action.payload.addOn
            );
            if (product) {
                product.quantity += 1;
            }
        },

        /**
         * @function decreaseQuantity
         * @description Decreases the quantity of a product. If the quantity reaches 0, it is removed from the cart.
         */
        decreaseQuantity: (state, action: PayloadAction<{ id: number, size: string, addOn: string }>) => {
            const productIndex = state.cart.findIndex(
                item => item.id === action.payload.id &&
                    item.size === action.payload.size &&
                    item.addOn === action.payload.addOn
            );
            if (productIndex !== -1) {
                if (state.cart[productIndex].quantity > 1) {
                    state.cart[productIndex].quantity -= 1;
                } else {
                    state.cart.splice(productIndex, 1);
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
