import { Action, combineReducers } from "redux";
import { configureStore, ThunkAction } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import cartReducer from './redux/cartSlice'
import selectionReducer from './redux/selectionSlice';
import authReducer from './redux/authSlice';



const rootReducer = combineReducers({
    cart: cartReducer,
    selection: selectionReducer,
    authAroma: authReducer,
});


const persistConfig = {
    key: "root",
    storage,
};


const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});


export const persistor = persistStore(store);


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
export default store;
