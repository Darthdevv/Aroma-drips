import Cart from "@/pages/Cart"
import Home from "@/pages/Home"
import Menu from "@/pages/Menu"
import OrderHistory from "@/pages/OrderHistory"
import { IconFilter, IconSearch } from "@tabler/icons-react"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { Controller, useForm } from "react-hook-form"


const MainContent = () => {
    const { control } = useForm({
        defaultValues: {
            searchQuery: ""
        }
    })
    const location = useLocation()
    const [tab, setTab] = useState<string>("home")

    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const tab = urlParams.get("tab") || '';
        setTab(tab)
    }, [location.search])
    return (
        <div className="w-full flex flex-col">
            <div className="h-[6.625rem] w-full flex items-center justify-center">
                <div className="relative w-[40rem] flex items-center bg-[#f5f5f5] rounded-full shadow-sm">
                    <IconSearch className="absolute left-4 text-gray-400" size={20} />
                    <Controller
                        name="searchQuery"
                        control={control}
                        render={({ field }) => (
                            <input
                                {...field}
                                type="text"
                                placeholder="Menu"
                                className="w-[36.375rem] h-[3.625rem] pl-10 bg-[#f5f5f5] rounded-full outline-none text-gray-500"
                            />
                        )}
                    />
                    <button className="absolute right-1 top-1 bottom-1 bg-[#244937] text-white flex items-center justify-center rounded-full px-6 font-medium">
                        <IconFilter className="mr-2" size={20} />
                        Search
                    </button>
                </div>
            </div>
            <div className="w-full bg-[#f8f8f8]">
                {tab === "home" && <Home />}
                {tab === "menu" && <Menu />}
                {tab === "cart" && <Cart />}
                {tab === "orderHistory" && <OrderHistory />}
            </div>
        </div>
    )
}

export default MainContent