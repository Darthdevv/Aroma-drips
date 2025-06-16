import { motion } from "framer-motion";
import ShareIcon from "@/assets/icons/ShareIcon";
import { SmoothiesItems } from "@/constants/Menu-options";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { useContext, useEffect, useRef } from "react";
import { ThemeContext } from "@/context/themeContext";

/**
 * @component SmoothiesProducts
 * @description Displays a list of smoothies available in the drink menu.
 * Each smoothie is displayed in a motion-enhanced card with an image, name, price, and a share icon.
 * @returns {JSX.Element} The SmoothiesProducts component.
 */
const SmoothiesProducts = (): JSX.Element => {
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
    const handleKeyDown = (e: React.KeyboardEvent, item: typeof SmoothiesItems[0]) => {
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
                    nextIndex = (currentIndex + 1) % SmoothiesItems.length;
                    break;
                case 'ArrowLeft':
                    nextIndex = (currentIndex - 1 + SmoothiesItems.length) % SmoothiesItems.length;
                    break;
                case 'ArrowDown':
                    nextIndex = Math.min(currentIndex + itemsPerRow, SmoothiesItems.length - 1);
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
                text="Drink menu / Smoothies"
            />
            {/* Product List */}
            <main className="flex flex-wrap justify-start gap-16 px-4 md:px-10 lg:px-20">
                {SmoothiesItems.map((item, index) => (
                    <motion.div
                        role="button"
                        aria-label={`View details for ${item.name}, price ${item.price}`}
                        key={index}
                        ref={el => productRefs.current[index] = el}
                        tabIndex={settings.keyboardNavigation ? 0 : -1}
                        className={`bg-background-white dark:bg-background-navygrey text-text-blackish dark:text-text-whitish relative flex flex-col items-center w-[14.75rem] mt-20 mb-14 h-[15.875rem] rounded-t-[120px] rounded-b-2xl focus:outline-none ${settings.keyboardNavigation ? 'focus:ring-4 focus:ring-[#ff8b43] focus:ring-opacity-50' : ''
                            }`}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ scale: settings.keyboardNavigation ? 1 : 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onKeyDown={(e) => handleKeyDown(e, item)}
                        onClick={() => {
                            if (!settings.keyboardNavigation) {
                                navigate('/product-details', { state: item });
                            }
                        }}
                    >
                        {/* Smoothie Image */}
                        <motion.img
                            src={item.imageUrl}
                            className="rounded-full w-[9.688rem] absolute top-[-35px]"
                            alt={`${item.name} Image`}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        />

                        {/* Smoothie Details */}
                        <div className="flex flex-col justify-center items-center z-40 mt-36">
                            <div className="text-center">
                                <h1 className="text-[1.25rem] font-bold">{item.name}</h1>
                            </div>
                            <div className="text-center">
                                <h1 className="text-[1rem] text-[#ff8b43] font-bold">{item.price} LE</h1>
                            </div>
                        </div>

                        {/* Share Button */}
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

export default SmoothiesProducts;
