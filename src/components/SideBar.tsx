import { useState } from 'react';
import { Sidebar, SidebarBody, SidebarLink } from './ui/sidebar';
import { useLocation } from 'react-router-dom';
import logo from '../assets/images/Assets/AromaLogo.png';
import user from '../assets/images/Assets/user.png';
import HomeIcon from '@/assets/icons/HomeIcon';
import MenuIcon from '@/assets/icons/MenuIcon';
import CartIcon from '@/assets/icons/CartIcon';
import OrderHistoryIcon from '@/assets/icons/OrderHistoryIcon';

const SideBar = () => {
    const [sideBarOpen, setSideBarOpen] = useState(false);
    const location = useLocation();

    const links = [
        { label: "Home", href: "/?tab=home", icon: <HomeIcon color={location.search.includes("home") ? "#ff8b43" : "#000000"} /> },
        { label: "Menu", href: "/?tab=menu", icon: <MenuIcon color={location.search.includes("menu") ? "#ff8b43" : "#000000"} /> },
        { label: "Cart", href: "/?tab=cart", icon: <CartIcon color={location.search.includes("cart") ? "#ff8b43" : "#000000"} /> },
        { label: "Categories", href: "/?tab=categories", icon: <CartIcon color={location.search.includes("categories") ? "#ff8b43" : "#000000"} /> },
        { label: "Order History", href: "/?tab=orderHistory", icon: <OrderHistoryIcon color={location.search.includes("orderHistory") ? "#ff8b43" : "#000000"} /> }
    ];

    return (
        <Sidebar open={sideBarOpen} setOpen={setSideBarOpen}> 
            <div className='flex-1'>
                <SidebarBody className="justify-between bg-white gap-10">
                    <div>
                        <div className='h-[6.625rem] flex justify-center items-center bg-[#244937] w-full'>
                            <img src={logo} alt='logo' />
                        </div>
                        <div className="flex p-4 flex-col flex-1 overflow-y-auto overflow-x-hidden">
                            <div className="mt-8 flex flex-col gap-2">
                                {links.map((link, index) => {
                                    const isActive = location.search.includes(link.href.split("=")[1]);
                                    return (
                                        <SidebarLink
                                            className={`font-bold flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${isActive ? 'text-[#ff8b43]' : 'text-black'
                                                }`}
                                            key={index}
                                            link={{
                                                label: link.label,
                                                href: link.href,
                                                icon: link.icon,
                                            }}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    <div className='p-4'>
                        <SidebarLink
                            link={{
                                label: "John Esmat",
                                href: "#",
                                icon: (
                                    <img
                                        src={user}
                                        className="h-7 w-7 flex-shrink-0 rounded-full"
                                        width={50}
                                        height={50}
                                        alt="Avatar"
                                    />
                                ),
                            }}
                        />
                    </div>
                </SidebarBody>
            </div>
        </Sidebar>
    );
};

export default SideBar;
