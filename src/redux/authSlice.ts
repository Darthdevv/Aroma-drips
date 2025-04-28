import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import toast from "react-hot-toast";




export interface User {
    id: string;
    name: string;
    email: string;
    password: string;
}


export interface AuthState {
    users: User[];
    currentUser: User | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    error: string | null;
}



export const initialState: AuthState = {
    users: [],
    currentUser: null,
    isAuthenticated: false,
    isLoading: false,
    error: null
}


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signUpStart(state) {
            state.isLoading = true;
            state.error = null;
        },
        signUpSuccess(state, action: PayloadAction<User>) {
            state.users?.unshift(action.payload);
            state.isLoading = false;
            state.error = null;
            toast.success("Account created successfully");
        },
        signUpFailure(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
            toast.error(action.payload);
        },
        signInStart(state) {
            state.isLoading = true;
            state.error = null;
        },
        signInSuccess(state, action: PayloadAction<User>) {
            state.currentUser = action.payload;
            state.isAuthenticated = true;
            state.isLoading = false;
            state.error = null;
            toast.success("Login successful");
        },
        signInFailure(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
            toast.error(action.payload);
        },
        updateProfileStart(state) {
            state.isLoading = true;
            state.error = null;
        },
        updateProfileSuccess(state, action: PayloadAction<User>) {
            state.currentUser = action.payload;
            state.users = state.users.map(user =>
                user.id === action.payload.id ? action.payload : user
            );
            state.isLoading = false;
            state.error = null;
            toast.success("Profile updated successfully");
        },
        updateProfileFailure(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
            toast.error(action.payload);
        },
        signOut(state) {
            state.currentUser = null;
            state.isAuthenticated = false;
            state.isLoading = false;
            state.error = null;
            toast.success("Logout successful");
        },
    }
})



export const {
    signUpStart,
    signUpSuccess,
    signUpFailure,
    signInStart,
    signInSuccess,
    signInFailure,
    signOut,
    updateProfileStart,
    updateProfileSuccess,
    updateProfileFailure,
} = authSlice.actions;

export default authSlice.reducer;