import logo from '../assets/images/Assets/AromaLogo.png';
import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { IoMdMenu } from "react-icons/io"; // Icons for open/close menu
import HomeIcon from "@/assets/icons/HomeIcon";
import SearchIcon from "@/assets/icons/SearchIcon";
import CartIcon from "@/assets/icons/CartIcon";
import OrderHistoryIcon from "@/assets/icons/OrderHistoryIcon";
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import SideBar from '@/components/SideBar';

const RootLayout = () => {

    const { cart } = useSelector((state: RootState) => state.cart)
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const location = useLocation();
    const path = location.pathname;
    const extractedString = path.substring(1); // Removes the first "/"
    // console.log(extractedString);

    useEffect(() => {
        setIsDarkMode(document.documentElement.classList.contains("dark"));
    }, []);

    const links = [
        { label: "Home", value: 'home', href: "/home", icon: <HomeIcon color={extractedString === "home" ? "#ff8b43" : isDarkMode ? "#ffffff" : "#000000"} /> },
        { label: "Cart", value: 'cart', href: "/cart", icon: <CartIcon color={extractedString === "cart" ? "#ff8b43" : isDarkMode ? "#ffffff" : "#000000"} /> },
        { label: "Order History", value: 'orderHistory', href: "/orderHistory", icon: <OrderHistoryIcon color={extractedString === "orderHistory" ? "#ff8b43" : isDarkMode ? "#ffffff" : "#000000"} /> }
    ];

    return (
        <div className="flex min-h-screen w-full">
            {/* Sidebar for Desktop and Mobile */}
            <SideBar 
            cart={cart}
            isMenuOpen={isMenuOpen}
            links={links}
            extractedString={extractedString}
            setIsMenuOpen={setIsMenuOpen}
            />
            {/* Overlay for Mobile Menu */}
            {isMenuOpen && <div className="fixed inset-0 bg-black bg-opacity-50 sm:hidden z-40" onClick={() => setIsMenuOpen(false)}></div>}

            {/* Main Content */}
            <div className='w-full sm:w-[calc(100%-16rem)] ml-auto bg-background-gray dark:bg-background-navy min-h-screen'>
                {/* Header with Menu Toggle for Mobile */}
                <header className="bg-accent-green dark:bg-background-navy flex items-center justify-between p-4 sm:hidden">
                    <button className="text-white" onClick={() => setIsMenuOpen(true)}>
                        <IoMdMenu size={28} />
                    </button>
                    <img src={logo} alt="logo" className="h-8" />
                    <button>
                        <SearchIcon />
                    </button>
                </header>

                <Outlet />
            </div>
        </div>
    );
};

export default RootLayout;
