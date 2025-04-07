import Header from "@/components/Header"
import { Controller, useForm } from "react-hook-form"


export const Profile = () => {
    const { control } = useForm({
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            currentPassword: "",
            password: "",
            confirmPassword: "",
            phone: "",
            dateOfBirth: "",
            address: "",
        }
    })
    return (
        <section className="bg-background-grey dark:bg-background-navy min-h-screen text-text-blackish dark:text-text-whitish">
            {/* Page Header */}
            <Header
                link="/home"
                text="Personal Information"
            />
            {/* Personal info */}
            <main className="flex flex-wrap justify-start gap-10 px-4 md:px-10 lg:px-20 mt-10">
                <form className="flex flex-col">
                    <div className="flex flex-col md:flex-row gap-6 mb-10">
                        <div className="flex-1">
                            <label className="text-[16px]">First Name</label>
                            <Controller
                                name="firstName"
                                control={control}
                                render={({ field }) => (
                                    <div>
                                        <input
                                            {...field}
                                            type="text"
                                            placeholder="First Name"
                                            className="bg-[#e6e6e6] dark:bg-[#2E3439] text-[#ff8a42] pl-2 rounded-xl h-[3.375rem] w-[28.5rem]"
                                        />
                                    </div>
                                )}
                            />
                        </div>
                        <div className="flex-1">
                            <label className="text-[16px]">Last Name</label>
                            <Controller
                                name="lastName"
                                control={control}
                                render={({ field }) => (
                                    <div>
                                        <input
                                            {...field}
                                            type="text"
                                            placeholder="Last Name"
                                            className="bg-[#e6e6e6] dark:bg-[#2E3439] text-[#ff8a42] pl-2 rounded-xl h-[3.375rem] w-[28.5rem]"
                                        />
                                    </div>
                                )}
                            />
                        </div>
                    </div>
                    <div className="flex items-center gap-6 mb-10">
                        <div className="flex-1">
                            <label className="text-[16px]">Email</label>
                            <Controller
                                name="email"
                                control={control}
                                render={({ field }) => (
                                    <div>
                                        <input
                                            {...field}
                                            type="email"
                                            placeholder="email"
                                            className="bg-[#e6e6e6] dark:bg-[#2E3439] text-[#ff8a42] pl-2 rounded-xl h-[3.375rem] w-[28.5rem]"
                                        />
                                    </div>
                                )}
                            />
                        </div>
                    </div>
                    <div className="flex items-center gap-6 mb-10">
                        <div className="flex-1">
                            <label className="text-[16px]">Current Password</label>
                            <Controller
                                name="currentPassword"
                                control={control}
                                render={({ field }) => (
                                    <div>
                                        <input
                                            {...field}
                                            type="password"
                                            placeholder="Current Password"
                                            className="bg-[#e6e6e6] dark:bg-[#2E3439] text-[#ff8a42] pl-2 rounded-xl h-[3.375rem] w-[28.5rem]"
                                        />
                                    </div>
                                )}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 mb-10">
                        <div className="flex-1">
                            <label className="text-[16px]">New Password</label>
                            <Controller
                                name="password"
                                control={control}
                                render={({ field }) => (
                                    <div>
                                        <input
                                            {...field}
                                            type="password"
                                            placeholder="New Password"
                                            className="bg-[#e6e6e6] dark:bg-[#2E3439] text-[#ff8a42] pl-2 rounded-xl h-[3.375rem] w-[28.5rem]"
                                        />
                                    </div>
                                )}
                            />
                        </div>
                        <div className="flex-1">
                            <label className="text-[16px]">Confirm New Password</label>
                            <Controller
                                name="confirmPassword"
                                control={control}
                                render={({ field }) => (
                                    <div>
                                        <input
                                            {...field}
                                            type="password"
                                            placeholder="Confirm New Password"
                                            className="bg-[#e6e6e6] dark:bg-[#2E3439] text-[#ff8a42] pl-2 rounded-xl h-[3.375rem] w-[28.5rem]"
                                        />
                                    </div>
                                )}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 mb-10">
                        <div className="flex-1">
                            <label className="text-[16px]">Phone Number</label>
                            <Controller
                                name="phone"
                                control={control}
                                render={({ field }) => (
                                    <div>
                                        <input
                                            {...field}
                                            type="number"
                                            min={0}
                                            placeholder="Phone Number"
                                            className="bg-[#e6e6e6] dark:bg-[#2E3439] text-[#ff8a42] pl-2 rounded-xl h-[3.375rem] w-[28.5rem]"
                                        />
                                    </div>
                                )}
                            />
                        </div>
                        <div className="flex-1">
                            <label className="text-[16px]">Date Of Birth</label>
                            <Controller
                                name="dateOfBirth"
                                control={control}
                                render={({ field }) => (
                                    <div>
                                        <input
                                            {...field}
                                            type="date"
                                            className="bg-[#e6e6e6] dark:bg-[#2E3439] text-[#ff8a42] pl-2 rounded-xl h-[3.375rem] w-[28.5rem]"
                                        />
                                    </div>
                                )}
                            />
                        </div>
                    </div>
                    <div className="flex items-center gap-6 mb-10">
                        <div className="flex-1">
                            <label className="text-[16px]">Address</label>
                            <Controller
                                name="address"
                                control={control}
                                render={({ field }) => (
                                    <div>
                                        <input
                                            {...field}
                                            type="text"
                                            placeholder="Address"
                                            className="bg-[#e6e6e6] dark:bg-[#2E3439] text-[#ff8a42] pl-2 rounded-xl h-[3.375rem] w-[28.5rem]"
                                        />
                                    </div>
                                )}
                            />
                        </div>
                    </div>
                    <div className="w-full flex gap-5 justify-end items-center">
                        <button className="bg-[#ff8a42] h-[2.875rem] w-[10.375rem] rounded-full text-white text-[16px] font-semibold">Save Changes</button>
                        <button className="border-2 w-[10.375rem] rounded-full h-[2.875rem] border-[#ff8a42] text-[#ff8a42] text-[16px] font-semibold">Cancel</button>
                    </div>
                </form>
            </main>
        </section>
    )
}
