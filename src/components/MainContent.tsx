import Cart from "@/pages/Cart"
import Home from "@/pages/Home"
import Menu from "@/pages/Menu"
import OrderHistory from "@/pages/OrderHistory"
import { IconFilter, IconSearch } from "@tabler/icons-react"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { Controller, useForm } from "react-hook-form"
import IcedCoffeProducts from "./IcedCoffeProducts"
import MilkShakeProducts from "./MilkShakeProducts"
import CoffeProducts from "./CoffeProducts"
import FrappeProducts from "./FrappeProducts"
import MojitoProducts from "./MojitoProducts"
import BreezersProducts from "./BreezersProducts"
import SmoothiesProducts from "./SmoothiesProducts"
import ProductDetails from "@/pages/ProductDetails"


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
        const tab = urlParams.get("tab") || 'home';
        setTab(tab)
    }, [location.search])
    return (
        <div className="w-full flex flex-col">
            {tab === "home" && <div className="h-[6.625rem] w-full flex items-center justify-center">
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
            </div>}
            <div className="w-full bg-[#f8f8f8]">
                {tab === "home" && <Home />}
                {tab === "menu" && <Menu />}
                {tab === "cart" && <Cart />}
                {tab === "orderHistory" && <OrderHistory />}
                {tab === "Hot-Coffee" && <CoffeProducts />}
                {tab === "Iced-Coffee" && <IcedCoffeProducts />}
                {tab === "Milk-Shakes" && <MilkShakeProducts />}
                {tab === "Frappe" && <FrappeProducts />}
                {tab === "Mojito" && <MojitoProducts />}
                {tab === "Breezers" && <BreezersProducts />}
                {tab === "Smoothies" && <SmoothiesProducts />}
                {tab === "product-details" && <ProductDetails />}
            </div>
        </div>
    )
}

export default MainContent