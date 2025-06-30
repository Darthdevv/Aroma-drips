import { motion } from "framer-motion";
import ShareIcon from "@/assets/icons/ShareIcon";
import { FrappeItems } from "@/constants/Menu-options";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useRef } from "react";
import { ThemeContext } from "@/context/themeContext";

/**
 * @interface FrappeProduct
 * @description Represents a frappe product item.
 * @property {number} id - Unique identifier for the frappe product.
 * @property {string} name - Name of the frappe product.
 * @property {string} imageUrl - Image URL of the product.
 * @property {number} price - Price of the frappe product.
 */
interface FrappeProduct {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
}

/**
 * @component FrappeProducts
 * @description Displays a list of frappe products available in the menu.
 * It provides navigation to a product details page.
 * @returns {JSX.Element} The FrappeProducts component.
 */
const FrappeProducts = (): JSX.Element => {
    const navigate = useNavigate();
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error(
            "AccessibilitySettings must be used within a ThemeProvider"
        );
    }
    const { settings } = context;
    const productRefs = useRef<(HTMLDivElement | null)[]>([]);
    // Focus management for keyboard navigation
    useEffect(() => {
        if (settings.keyboardNavigation && productRefs.current[0]) {
            productRefs.current[0]?.focus();
        }
    }, [settings.keyboardNavigation]);

    // Handle keyboard events
    const handleKeyDown = (e: React.KeyboardEvent, item: typeof FrappeItems[0]) => {
        if (!settings.keyboardNavigation) return;

        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            navigate('/product-details', { state: item });
        }

        // Arrow key navigation
        if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
            e.preventDefault();
            const currentIndex = productRefs.current.findIndex(ref =>
                ref === document.activeElement
            );

            if (currentIndex === -1) return;

            let nextIndex = currentIndex;
            const itemsPerRow = Math.floor(window.innerWidth / 300); // Adjust based on your item width

            switch (e.key) {
                case 'ArrowRight':
                    nextIndex = (currentIndex + 1) % FrappeItems.length;
                    break;
                case 'ArrowLeft':
                    nextIndex = (currentIndex - 1 + FrappeItems.length) % FrappeItems.length;
                    break;
                case 'ArrowDown':
                    nextIndex = Math.min(currentIndex + itemsPerRow, FrappeItems.length - 1);
                    break;
                case 'ArrowUp':
                    nextIndex = Math.max(currentIndex - itemsPerRow, 0);
                    break;
            }

            productRefs.current[nextIndex]?.focus();
        }
    };
    return (
        <section className="bg-background-grey dark:bg-background-navy min-h-screen">
            {/* Page Header */}
            <Header
                link="/home"
                text="Drink menu / Frappe"
            />
            {/* Frappe Products List */}
            <main className="flex flex-wrap justify-center md:justify-start gap-16 md:px-10 lg:px-20">
                {FrappeItems.map((item: FrappeProduct, index: number) => (
                    <motion.div
                        role="button"
                        aria-label={`View details for ${item.name}, price ${item.price}`}
                        key={index}
                        ref={el => productRefs.current[index] = el}
                        tabIndex={settings.keyboardNavigation ? 0 : -1}
                        className={`${settings.keyboardNavigation ? 'focus:ring-4 focus:ring-[#ff8b43] focus:ring-opacity-50' : ''
                            } bg-background-white dark:bg-background-navygrey text-text-blackish dark:text-text-whitish  relative flex flex-col items-center w-[14.75rem] mt-20 mb-14 h-[15.875rem] rounded-t-[120px] rounded-b-2xl`}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onKeyDown={(e) => handleKeyDown(e, item)}
                        onClick={() => {
                            if (!settings.keyboardNavigation) {
                                navigate('/product-details', { state: item });
                            }
                        }}
                    >
                        {/* Frappe Image */}
                        <motion.img
                            src={item.imageUrl}
                            className="rounded-full w-[9.688rem] absolute top-[-35px]"
                            alt={item.name}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        />
                        {/* Frappe Name & Price */}
                        <div className="flex flex-col justify-center items-center z-40 mt-36">
                            <div className="text-center">
                                <h1 className="text-[1.25rem] font-bold">{item.name}</h1>
                            </div>
                            <div className="text-center">
                                <h1 className="text-[1rem] text-[#ff8b43] font-bold">{item.price} LE</h1>
                            </div>
                        </div>

                        {/* Navigate to Product Details */}
                        <div className="absolute -bottom-[1px] -right-[1px] rounded-3xl">
                            <div
                                role="button"
                                aria-label={`View details for ${item.name}, price ${item.price}`}
                                onClick={() => {
                                    navigate('/product-details', { state: item });
                                }}
                                className="cursor-pointer"
                            >
                                <ShareIcon />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </main>
        </section>
    );
};

export default FrappeProducts;
