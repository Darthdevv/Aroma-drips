import { motion } from "framer-motion";
import ShareIcon from "@/assets/icons/ShareIcon";
import { SmoothiesItems } from "@/constants/Menu-options";
import { Link, useNavigate } from "react-router-dom";
import ChevronLeftIcon from "@/assets/icons/ChevronLeft";

/**
 * @component SmoothiesProducts
 * @description Displays a list of smoothies available in the drink menu.
 * Each smoothie is displayed in a motion-enhanced card with an image, name, price, and a share icon.
 * @returns {JSX.Element} The SmoothiesProducts component.
 */
const SmoothiesProducts = (): JSX.Element => {
    const navigate = useNavigate();

    return (
        <section>
            {/* Page Header */}
            <header className="bg-background-white h-[6.625rem] w-full flex items-center justify-start p-4 text-black text-lg font-semibold">
                <Link to={'/?tab=home'} className="flex items-center justify-center gap-3 px-4">
                    <ChevronLeftIcon />
                    <span className="text-2xl">Drink menu / Smoothies</span>
                </Link>
            </header>

            {/* Product List */}
            <main className="flex flex-wrap justify-start gap-16 px-4 md:px-10 lg:px-20">
                {SmoothiesItems.map((item, index) => (
                    <motion.div
                        key={index}
                        className="bg-white relative flex flex-col items-center w-[14.75rem] mt-20 mb-14 h-[15.875rem] rounded-t-[120px] rounded-b-2xl"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
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
                        <div className="absolute bottom-0 right-0">
                            <div
                                onClick={() => {
                                    navigate('/?tab=product-details', { state: item });
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
