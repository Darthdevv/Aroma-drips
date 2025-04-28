// hooks/useAuthActions.ts
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { signUpSuccess, signInSuccess, signUpFailure, signInFailure, updateProfileStart, updateProfileSuccess, updateProfileFailure, User } from '@/redux/authSlice';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';

export const useAuthActions = () => {
    const dispatch = useDispatch();
    const users = useSelector((state: RootState) => state.authAroma.users);

    const signUp = async ({ name, email, password }: { name: string; email: string; password: string }) => {
        try {
            const userExists = await users?.some(user => user.email === email);

            if (userExists) {
                dispatch(signUpFailure('Email already exists.'));
                return;
            }

            const newUser = {
                id: uuidv4(),
                name,
                email,
                password,
            };

            dispatch(signUpSuccess(newUser));
            dispatch(signInSuccess(newUser));
        } catch (error) {
            dispatch(signUpFailure(error instanceof Error ? error.message : 'Signup failed.'));
        }
    };

    const signIn = async (email: string, password: string) => {
        try {
            const matchedUser = await users?.find(user => user.email === email && user.password === password);

            if (matchedUser) {
                dispatch(signInSuccess(matchedUser));
            } else {
                dispatch(signInFailure('Invalid email or password.'));
            }
        } catch (error) {
            dispatch(signInFailure(error instanceof Error ? error.message : 'Login failed.'));
        }
    };

    const updateProfile = async (updatedUser: User) => {
        try {
            dispatch(updateProfileStart());
            dispatch(updateProfileSuccess(updatedUser));
        } catch (error) {
            dispatch(updateProfileFailure(error instanceof Error ? error.message : 'Update failed.'));
        }
    };

    return { signUp, signIn, updateProfile };
};