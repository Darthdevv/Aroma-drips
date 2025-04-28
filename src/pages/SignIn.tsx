import { RootState } from "@/store";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import SignInImage from '../assets/images/login-image.png';
import { Controller, useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useAuthActions } from "@/hooks/useAuthActions";

type SignInFormInputs = {
  email: string;
  password: string;
};

const SignIn = () => {
  const navigate = useNavigate();
  const { isAuthenticated, isLoading, users } = useSelector((state: RootState) => state.authAroma);

  const { signIn } = useAuthActions();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormInputs>({
    defaultValues: {
      email: '',
      password: '',
    }
  });

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/home');
    }
  }, [isAuthenticated, navigate]);

  const onSubmit = (data: SignInFormInputs) => {
    signIn(data.email, data.password);
  };

  return (
    <div className="w-full flex flex-col lg:flex-row min-h-screen">
      {/* Image Section - Hidden on mobile, visible on tablet and up */}
      <div className="hidden md:flex flex-1 items-center justify-center bg-gray-50">
        <img
          className="w-full max-w-[45rem] h-auto max-h-[64rem] object-cover"
          src={SignInImage}
          alt="Login illustration"
        />
      </div>

      {/* Form Section */}
      <div className="flex-1 flex flex-col gap-6 sm:gap-8 items-center justify-center p-4 sm:p-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-center">Welcome Back to Aroma</h1>

        <form
          className="w-full max-w-[28.75rem] flex flex-col gap-6 sm:gap-8"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* Email Input */}
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
                  className={`w-full h-12 sm:h-14 bg-[#F2F2F2] pl-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-coffee-500 ${errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                  placeholder="your@email.com"
                />
              )}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>

          {/* Password Input */}
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
                  className={`w-full h-12 sm:h-14 bg-[#F2F2F2] pl-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-coffee-500 ${errors.password ? 'border-red-500' : 'border-gray-300'
                    }`}
                  placeholder="••••••••"
                />
              )}
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
            )}
          </div>

          {/* Forgot Password Link */}
          <div className="text-right">
            <Link
              to="/forgot-password"
              className="text-sm text-[#FF8A42] hover:text-[#E67A38]"
            >
              Forgot password?
            </Link>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full flex justify-center h-12 sm:h-14 items-center rounded-full text-sm sm:text-base font-medium text-white bg-[#FF8A42] hover:bg-[#E67A38] transition-colors ${isLoading ? 'opacity-70 cursor-not-allowed' : ''
                }`}
            >
              {isLoading ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Signing in...
                </>
              ) : 'Login'}
            </button>
          </div>
        </form>

        {/* Sign Up Link */}
        <div className="text-sm sm:text-base text-gray-600">
          Don't have an account?{' '}
          <Link
            to="/signup"
            className="text-[#FF8A42] hover:text-[#E67A38] font-medium"
          >
            Create new account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;