import Cart from "@/pages/Cart";
import Home from "@/pages/Home";
import Menu from "@/pages/Menu";
import OrderHistory from "@/pages/OrderHistory";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import IcedCoffeProducts from "./IcedCoffeProducts";
import MilkShakeProducts from "./MilkShakeProducts";
import CoffeProducts from "./CoffeProducts";
import FrappeProducts from "./FrappeProducts";
import MojitoProducts from "./MojitoProducts";
import BreezersProducts from "./BreezersProducts";
import SmoothiesProducts from "./SmoothiesProducts";
import ProductDetails from "@/pages/ProductDetails";

/**
 * @component MainContent
 * @description Handles routing and displays the appropriate page based on the selected tab.
 * It includes a search bar on the home page.
 * @returns {JSX.Element} The MainContent component.
 */
const MainContent = (): JSX.Element => {
    const { control } = useForm({
        defaultValues: {
            searchQuery: ""
        }
    });

    const location = useLocation();
    const [tab, setTab] = useState<string>("home");

    /**
     * @function useEffect
     * @description Extracts the `tab` parameter from the URL and updates the component state.
     */
    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const tab = urlParams.get("tab") || "home";
        setTab(tab);
    }, [location.search]);

    return (
        <div className="w-full flex flex-col">
            {/* Search Bar (Only on Home Page) */}
            {tab === "home" && (
                <div className="h-[7rem] py-5 w-full flex items-center justify-center bg-[#fff] dark:bg-background-navygrey">
                    <div className="relative w-[40rem] flex items-center bg-[#fff] dark:bg-background-navygrey rounded-full shadow-sm">
                        {/* <IconSearch className="absolute left-4 text-text-whitish font-semibold" size={20} /> */}
                        <Controller
                            name="searchQuery"
                            control={control}
                            render={({ field }) => (
                                <input
                                    {...field}
                                    type="text"
                                    placeholder="Menu"
                                    className="w-[36.375rem] h-[3.625rem] pl-10 bg-background-gray dark:bg-background-navy rounded-full outline-none text-text-whitish placeholder:text-text-whitish font-semibold"
                                />
                            )}
                        />
                        <button className="absolute right-1  h-[3.6rem] w-[9.75rem] bg-[#244937] text-white flex items-center justify-center rounded-full px-6 font-medium">
                            {/* <IconFilter className="mr-2" size={20} /> */}
                            Search
                        </button>
                    </div>
                </div>
            )}

            {/* Dynamic Content Based on Selected Tab */}
            <div className="w-full h-full bg-background-gray dark:bg-background-navy">
                {tab === "home" && <Home />}
                {tab === "menu" && <Menu />}
                {tab === "cart" && <Cart />}
                {tab === "orderHistory" && <OrderHistory />}
                {tab === "Hot Coffee" && <CoffeProducts />}
                {tab === "Iced Coffee" && <IcedCoffeProducts />}
                {tab === "Milk Shakes" && <MilkShakeProducts />}
                {tab === "Frappe" && <FrappeProducts />}
                {tab === "Mojito" && <MojitoProducts />}
                {tab === "Breezers" && <BreezersProducts />}
                {tab === "Smoothies" && <SmoothiesProducts />}
                {tab === "product-details" && <ProductDetails />}
            </div>
        </div>
    );
};

export default MainContent;
