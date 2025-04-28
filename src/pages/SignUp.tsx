import { AppDispatch, RootState } from "@/store";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import SignUpImage from '../assets/images/signup-image.png';
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "@/redux/authSlice";
import { useAuthActions } from "@/hooks/useAuthActions";

type FormData = {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
};

const SignUp = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const { isAuthenticated, isLoading } = useSelector((state: RootState) => state.authAroma);
    const { signUp } = useAuthActions();

    const {
        control,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm<FormData>({
        defaultValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    });

    const password = watch('password');

    const onSubmit = async (data: FormData) => {
        const { confirmPassword, ...credentials } = data;
        try {
            signUp({
                email: credentials.email,
                password: credentials.password,
                name: credentials.name
            });
        } catch (err) {
            console.error("Sign up failed", err);
        }
    };

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/home');
        }
    }, [isAuthenticated, navigate]);

    return (
        <div className="w-full flex flex-col lg:flex-row min-h-screen dark:bg-background-navygrey bg-background-white text-text-blackish dark:text-text-whitish">
            {/* Left side with image - hidden on mobile, shown on tablet and up */}
            <div className="hidden md:flex flex-1 items-center justify-center bg-background-white dark:bg-background-navy">
                <img
                    className="w-full max-w-[45rem] h-auto max-h-[64rem] object-cover"
                    src={SignUpImage}
                    alt="Coffee illustration"
                />
            </div>

            {/* Right side with form */}
            <div className="flex-1 flex flex-col gap-6 items-center justify-center p-4 sm:p-8">
                <h1 className="text-2xl sm:text-3xl font-bold">Join Aroma</h1>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="w-full max-w-[28.75rem] flex flex-col gap-4 sm:gap-6"
                >
                    {/* Name Field */}
                    <div>
                        <label htmlFor="name" className="block text-sm sm:text-base font-medium mb-1">
                            Full Name
                        </label>
                        <Controller
                            name="name"
                            control={control}
                            rules={{
                                required: 'Name is required',
                                minLength: {
                                    value: 2,
                                    message: 'Name must be at least 2 characters'
                                }
                            }}
                            render={({ field }) => (
                                <input
                                    {...field}
                                    type="text"
                                    id="name"
                                    className={`w-full h-12 sm:h-14 bg-[#F2F2F2] text-text-blackish pl-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-coffee-500 ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                                    placeholder="John Doe"
                                />
                            )}
                        />
                        {errors.name && (
                            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                        )}
                    </div>

                    {/* Email Field */}
                    <div>
                        <label htmlFor="email" className="block text-sm sm:text-base font-medium mb-1">
                            Email
                        </label>
                        <Controller
                            name="email"
                            control={control}
                            rules={{
                                required: 'Email is required',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: 'Invalid email address'
                                }
                            }}
                            render={({ field }) => (
                                <input
                                    {...field}
                                    type="email"
                                    id="email"
                                    className={`w-full h-12 sm:h-14 bg-[#F2F2F2] text-text-blackish pl-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-coffee-500 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                                    placeholder="johndoe@example.com"
                                />
                            )}
                        />
                        {errors.email && (
                            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                        )}
                    </div>

                    {/* Password Field */}
                    <div>
                        <label htmlFor="password" className="block text-sm sm:text-base font-medium mb-1">
                            Password
                        </label>
                        <Controller
                            name="password"
                            control={control}
                            rules={{
                                required: 'Password is required',
                                minLength: {
                                    value: 6,
                                    message: 'Password must be at least 6 characters'
                                }
                            }}
                            render={({ field }) => (
                                <input
                                    {...field}
                                    type="password"
                                    id="password"
                                    className={`w-full h-12 sm:h-14 bg-[#F2F2F2] text-text-blackish pl-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-coffee-500 ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
                                    placeholder="••••••••"
                                />
                            )}
                        />
                        {errors.password && (
                            <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
                        )}
                    </div>

                    {/* Confirm Password Field */}
                    <div>
                        <label htmlFor="confirmPassword" className="block text-sm sm:text-base font-medium mb-1">
                            Confirm Password
                        </label>
                        <Controller
                            name="confirmPassword"
                            control={control}
                            rules={{
                                required: 'Please confirm your password',
                                validate: value => value === password || 'Passwords do not match'
                            }}
                            render={({ field }) => (
                                <input
                                    {...field}
                                    type="password"
                                    id="confirmPassword"
                                    className={`w-full h-12 sm:h-14 bg-[#F2F2F2] text-text-blackish pl-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-coffee-500 ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'}`}
                                    placeholder="••••••••"
                                />
                            )}
                        />
                        {errors.confirmPassword && (
                            <p className="mt-1 text-sm text-red-600">{errors.confirmPassword.message}</p>
                        )}
                    </div>

                    <div className="flex flex-col gap-3">
                        <button
                            type="submit"
                            disabled={isLoading}
                            className={`w-full flex justify-center h-12 sm:h-14 items-center rounded-full text-sm sm:text-base font-medium text-white bg-[#FF8A42] hover:bg-[#E67A38] transition-colors ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                        >
                            {isLoading ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Creating account...
                                </>
                            ) : 'Create Account'}
                        </button>
                        <button
                            type="button"
                            onClick={() => dispatch(signOut())}
                            className="text-sm text-gray-400 hover:text-gray-700"
                        >
                            Reset form
                        </button>
                    </div>
                </form>

                {/* Already have an account link */}
                <div className="mt-4 text-sm sm:text-base flex items-center">
                    <span className="text-gray-400">Already have an account?</span>
                    <Link
                        to="/signin"
                        className="ml-2 text-[#FF8A42] hover:text-[#E67A38]"
                    >
                        Sign in
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SignUp;