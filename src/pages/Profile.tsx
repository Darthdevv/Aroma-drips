// components/Profile.tsx
import Header from "@/components/Header";
import { RootState } from "@/store";
import { Controller, useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useAuthActions } from "@/hooks/useAuthActions";
import toast from "react-hot-toast";

interface ProfileFormData {
    firstName: string;
    email: string;
    currentPassword: string;
    password: string;
    confirmPassword: string;
}

export const Profile = () => {
    const { currentUser } = useSelector((state: RootState) => state.authAroma);
    const { updateProfile } = useAuthActions();

    const {
        control,
        handleSubmit,
        formState: { errors },
        reset,
        watch,
    } = useForm<ProfileFormData>({
        defaultValues: {
            firstName: currentUser?.name || "",
            email: currentUser?.email || "",
            currentPassword: currentUser?.password || "",
            password: "",
            confirmPassword: "",
        }
    });

    const password = watch("password");

    const onSubmit = async (data: ProfileFormData) => {
        if (!currentUser) return;

        if (data.currentPassword !== currentUser.password) {
            toast.error("Current password is incorrect");
            return;
        }

        if (data.password && data.password !== data.confirmPassword) {
            toast.error("New passwords don't match");
            return;
        }

        const updatedUser = {
            ...currentUser,
            name: data.firstName,
            email: data.email,
            password: data.password || currentUser.password,
        };

        await updateProfile(updatedUser);
        reset({
            firstName: currentUser?.name || "",
            email: currentUser?.email || "",
            currentPassword: currentUser?.password || "",
            password: "",
            confirmPassword: "",
        });
    };

    const onCancel = () => {
        reset({
            firstName: currentUser?.name || "",
            email: currentUser?.email || "",
            currentPassword: currentUser?.password || "",
            password: "",
            confirmPassword: "",
        });
    };

    return (
        <section className="bg-background-grey dark:bg-background-navy min-h-screen text-text-blackish dark:text-text-whitish">
            <Header
                link="/home"
                text="Personal Information"
            />

            <main className="px-4 md:px-10 lg:px-20 mt-6 md:mt-10">
                <form
                    className="flex flex-col max-w-4xl mx-auto"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    {/* First Name */}
                    <div className="flex flex-col mb-6 md:mb-10 w-full">
                        <label className="text-sm md:text-[16px] mb-1">First Name</label>
                        <Controller
                            name="firstName"
                            control={control}
                            rules={{ required: "First name is required" }}
                            render={({ field }) => (
                                <div>
                                    <input
                                        {...field}
                                        type="text"
                                        placeholder="First Name"
                                        className="bg-[#e6e6e6] dark:bg-[#2E3439] text-[#ff8a42] pl-2 rounded-xl h-[3rem] md:h-[3.375rem] w-full max-w-full"
                                    />
                                    {errors.firstName && (
                                        <p className="text-red-500 text-xs md:text-sm mt-1">
                                            {errors.firstName.message}
                                        </p>
                                    )}
                                </div>
                            )}
                        />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col mb-6 md:mb-10 w-full">
                        <label className="text-sm md:text-[16px] mb-1">Email</label>
                        <Controller
                            name="email"
                            control={control}
                            rules={{
                                required: "Email is required",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Invalid email address"
                                }
                            }}
                            render={({ field }) => (
                                <div>
                                    <input
                                        {...field}
                                        type="email"
                                        placeholder="Email"
                                        className="bg-[#e6e6e6] dark:bg-[#2E3439] text-[#ff8a42] pl-2 rounded-xl h-[3rem] md:h-[3.375rem] w-full max-w-full"
                                    />
                                    {errors.email && (
                                        <p className="text-red-500 text-xs md:text-sm mt-1">
                                            {errors.email.message}
                                        </p>
                                    )}
                                </div>
                            )}
                        />
                    </div>

                    {/* Current Password */}
                    <div className="flex flex-col mb-6 md:mb-10 w-full">
                        <label className="text-sm md:text-[16px] mb-1">Current Password</label>
                        <Controller
                            name="currentPassword"
                            control={control}
                            rules={{ required: "Current password is required" }}
                            render={({ field }) => (
                                <div>
                                    <input
                                        {...field}
                                        type="text"
                                        placeholder="Current Password"
                                        className="bg-[#e6e6e6] dark:bg-[#2E3439] text-[#ff8a42] pl-2 rounded-xl h-[3rem] md:h-[3.375rem] w-full max-w-full"
                                    />
                                    {errors.currentPassword && (
                                        <p className="text-red-500 text-xs md:text-sm mt-1">
                                            {errors.currentPassword.message}
                                        </p>
                                    )}
                                </div>
                            )}
                        />
                    </div>

                    {/* New Password */}
                    <div className="flex flex-col gap-6 mb-6 md:mb-10">
                        <div className="flex-1">
                            <label className="text-sm md:text-[16px] mb-1">New Password</label>
                            <Controller
                                name="password"
                                control={control}
                                render={({ field }) => (
                                    <div>
                                        <input
                                            {...field}
                                            type="password"
                                            placeholder="New Password"
                                            className="bg-[#e6e6e6] dark:bg-[#2E3439] text-[#ff8a42] pl-2 rounded-xl h-[3rem] md:h-[3.375rem] w-full max-w-full"
                                        />
                                    </div>
                                )}
                            />
                        </div>
                        <div className="flex-1">
                            <label className="text-sm md:text-[16px] mb-1">Confirm New Password</label>
                            <Controller
                                name="confirmPassword"
                                control={control}
                                rules={{
                                    validate: value =>
                                        value === password || "The passwords do not match"
                                }}
                                render={({ field }) => (
                                    <div>
                                        <input
                                            {...field}
                                            type="password"
                                            placeholder="Confirm New Password"
                                            className="bg-[#e6e6e6] dark:bg-[#2E3439] text-[#ff8a42] pl-2 rounded-xl h-[3rem] md:h-[3.375rem] w-full max-w-full"
                                        />
                                        {errors.confirmPassword && (
                                            <p className="text-red-500 text-xs md:text-sm mt-1">
                                                {errors.confirmPassword.message}
                                            </p>
                                        )}
                                    </div>
                                )}
                            />
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="w-full flex flex-col sm:flex-row gap-3 sm:gap-5 justify-end items-center mt-4 mb-6">
                        <button
                            type="button"
                            onClick={onCancel}
                            className="border-2 w-full sm:w-auto sm:min-w-[10.375rem] rounded-full h-[2.5rem] sm:h-[2.875rem] border-[#ff8a42] text-[#ff8a42] text-sm sm:text-[16px] font-semibold"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="bg-[#ff8a42] h-[2.5rem] sm:h-[2.875rem] w-full sm:w-auto sm:min-w-[10.375rem] rounded-full text-white text-sm sm:text-[16px] font-semibold"
                        >
                            Save Changes
                        </button>
                    </div>
                </form>
            </main>
        </section>
    );
};