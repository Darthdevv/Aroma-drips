import { Link } from 'react-router-dom';
import logo from '../assets/images/Assets/AromaLogo.png';
import user from '../assets/images/Assets/user.png';
import { ReactNode, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store';
import { signOut } from '@/redux/authSlice';


/**
 * @component SideBar
 * @description A sidebar navigation component with links to different sections of the app.
 * Supports active tab highlighting based on the current URL query parameters.
 * @returns {JSX.Element} The SideBar component.
 */


interface LinkItem {
    label: string;
    value: string;
    href: string;
    icon: ReactNode;
}

interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
    // Add other cart item properties as needed
}

interface SideBarProps {
    isMenuOpen: boolean;
    links: LinkItem[];
    extractedString: string;
    cart: CartItem[];
    setIsMenuOpen: (isOpen: boolean) => void;
}
const SideBar = ({ isMenuOpen, links, extractedString, cart, setIsMenuOpen }: SideBarProps): JSX.Element => {
    const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
    const { currentUser } = useSelector((state: RootState) => state.authAroma);
    const dispatch: AppDispatch = useDispatch()
    return (
        <aside className={`fixed top-0 left-0 min-h-screen bg-white dark:bg-background-navygrey text-black transition-transform duration-300 z-0
            ${isMenuOpen ? "translate-x-0 w-3/4 sm:w-64 z-50" : "-translate-x-full w-3/4 sm:w-64 z-0"} sm:translate-x-0 sm:block`}>
            <div className='h-[6.625rem] flex justify-center items-center px-5 bg-accent-green dark:bg-background-navy w-full'>
                <Link to={'/home'}>
                    <img src={logo} alt='logo' />
                </Link>
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
                                {link.label === "Cart" && cart.length > 0 && (
                                    <span className='w-[30px] text-[15px] flex justify-center items-center rounded-full h-[30px] bg-[#ff8b43] text-white'>{cart.length}</span>
                                )
                                }
                            </Link>
                        ))}
                    </div>
                </div>
                {/* User Section */}
                <div className='p-4 fixed bottom-0 text-text-blackish my-auto dark:text-text-whitish w-full sm:w-64'>
                    <div
                        className='text-text-blackish flex w-full gap-5 items-center dark:text-text-whitish cursor-pointer relative'
                        onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
                    >
                        <div>
                            <img src={user} className="flex-shrink-0 w-8 h-8 rounded-full" alt="Avatar" />
                        </div>
                        <div className='flex flex-col justify-center'>
                            <span className='text-[17px] text-[#141B22] dark:text-[white]'>{currentUser?.name}</span>
                            <span className='text-[11px] text-[#999999]'>{currentUser?.email}</span>
                        </div>

                        {/* Dropdown Menu */}
                        {isUserDropdownOpen && (
                            <div className="absolute bottom-full left-0 mb-2 w-full bg-white dark:bg-background-navygrey rounded-lg shadow-lg z-10 overflow-hidden">
                                <Link
                                    to="/profile"
                                    className="block px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                                    onClick={() => {
                                        setIsUserDropdownOpen(false);
                                        setIsMenuOpen(false);
                                    }}
                                >
                                    Profile
                                </Link>
                                <button
                                    onClick={() => {
                                        dispatch(signOut());
                                        setIsUserDropdownOpen(false);
                                        setIsMenuOpen(false);
                                    }}
                                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                                >
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </aside>
    );
};

export default SideBar;
