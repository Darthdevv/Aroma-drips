import logo from '../assets/images/Assets/AromaLogo.png';
import user from '../assets/images/Assets/user.png';
import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { IoMdClose, IoMdMenu } from "react-icons/io"; // Icons for open/close menu
import HomeIcon from "@/assets/icons/HomeIcon";
import SearchIcon from "@/assets/icons/SearchIcon";
import MenuIcon from "@/assets/icons/MenuIcon";
import CartIcon from "@/assets/icons/CartIcon";
import OrderHistoryIcon from "@/assets/icons/OrderHistoryIcon";

const RootLayout = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const location = useLocation();
    const path = location.pathname;
    const extractedString = path.substring(1); // Removes the first "/"

    useEffect(() => {
        setIsDarkMode(document.documentElement.classList.contains("dark"));
    }, []);

    const links = [
        { label: "Home", value: 'home', href: "/home", icon: <HomeIcon color={extractedString === "home" ? "#ff8b43" : isDarkMode ? "#ffffff" : "#000000"} /> },
        { label: "Menu", value: 'menu', href: "/menu", icon: <MenuIcon color={extractedString === "menu" ? "#ff8b43" : isDarkMode ? "#ffffff" : "#000000"} /> },
        { label: "Cart", value: 'cart', href: "/cart", icon: <CartIcon color={extractedString === "cart" ? "#ff8b43" : isDarkMode ? "#ffffff" : "#000000"} /> },
        { label: "Order History", value: 'orderHistory', href: "/orderHistory", icon: <OrderHistoryIcon color={extractedString === "orderHistory" ? "#ff8b43" : isDarkMode ? "#ffffff" : "#000000"} /> }
    ];

    return (
        <div className="flex min-h-screen w-full">
            {/* Sidebar for Desktop and Mobile */}
            <aside className={`fixed top-0 left-0 min-h-screen bg-white dark:bg-background-navygrey text-black transition-transform duration-300 z-50 
                ${isMenuOpen ? "translate-x-0 w-3/4 sm:w-64" : "-translate-x-full w-3/4 sm:w-64"} sm:translate-x-0 sm:block`}>
                <div className='h-[6.625rem] flex justify-between items-center px-5 bg-accent-green dark:bg-background-navy w-full'>
                    <img src={logo} alt='logo' />
                    <button className="sm:hidden text-white" onClick={() => setIsMenuOpen(false)}>
                        <IoMdClose size={28} />
                    </button>
                </div>
                <nav className="mt-3 flex flex-col">
                    <div className="flex p-4 flex-col flex-1 overflow-y-auto overflow-x-hidden">
                        <div className="mt-8 flex flex-col gap-2">
                            {links.map((link, index) => (
                                <Link
                                    to={link.href}
                                    className={`font-bold flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 
                                    ${extractedString === link.value ? 'text-[#ff8b43]' : 'text-black dark:text-white'}`}
                                    key={index}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.icon}
                                    <span>{link.label}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                    {/* User Section */}
                    <div className='p-4 fixed bottom-0 text-text-blackish my-auto dark:text-text-whitish'>
                        <div className='text-text-blackish flex w-full gap-5 items-center dark:text-text-whitish'>
                            <div>
                                <img src={user} className="flex-shrink-0 w-8 h-8 rounded-full" alt="Avatar" />
                            </div>
                            <div className='flex flex-col justify-center'>
                                <span className='text-[17px] text-[#141B22] dark:text-[white]'>Mazen Afifi</span>
                                <span className='text-[11px] text-[#999999]'>mazenafifi1999@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </nav>
            </aside>

            {/* Overlay for Mobile Menu */}
            {isMenuOpen && <div className="fixed inset-0 bg-black bg-opacity-50 sm:hidden z-40" onClick={() => setIsMenuOpen(false)}></div>}

            {/* Main Content */}
            <div className='w-full sm:w-[calc(100%-16rem)] ml-auto bg-[#f8f8f8] min-h-screen'>
                {/* Header with Menu Toggle for Mobile */}
                <header className="bg-accent-green flex items-center justify-between p-4 sm:hidden">
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
