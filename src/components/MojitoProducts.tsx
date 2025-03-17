import { motion } from "framer-motion";
import ShareIcon from "@/assets/icons/ShareIcon";
import { MojitoItems } from "@/constants/Menu-options";
import { Link, useNavigate } from "react-router-dom";
import ChevronLeftIcon from "@/assets/icons/ChevronLeft";

/**
 * @component MojitoProducts
 * @description Displays a list of Mojito drinks in a responsive grid layout with animations.
 * Clicking on a product navigates to the product details page.
 * @returns {JSX.Element} The MojitoProducts component.
 */
const MojitoProducts = (): JSX.Element => {
    const navigate = useNavigate();

    return (
        <section>
            {/* Page Header */}
            <header className="bg-background-white dark:bg-background-navygrey h-[6.625rem] w-full flex items-center justify-start p-4 text-text-blackish dark:text-text-whitish text-lg font-semibold">
                <Link to={'/home'} className="flex items-center justify-center gap-3 px-4">
                    <ChevronLeftIcon />
                    <span className="text-2xl">Drink menu / Mojito</span>
                </Link>
            </header>

            {/* Product Grid */}
            <main className="flex flex-wrap justify-start gap-16 px-4 md:px-10 lg:px-20">
                {MojitoItems.map((item, index) => (
                    <motion.div
                        key={index}
                        className="bg-background-white dark:bg-background-navygrey text-text-blackish dark:text-text-whitish  relative flex flex-col items-center w-[14.75rem] mt-20 mb-14 h-[15.875rem] rounded-t-[120px] rounded-b-2xl"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {/* Product Image */}
                        <motion.img
                            src={item.imageUrl}
                            className="rounded-full w-[9.688rem] absolute top-[-35px]"
                            alt={`${item.name} image`}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        />

                        {/* Product Details */}
                        <div className="flex flex-col justify-center items-center z-40 mt-36">
                            <div className="text-center">
                                <h1 className="text-[1.25rem] font-bold">{item.name}</h1>
                            </div>
                            <div className="text-center">
                                <h1 className="text-[1rem] text-[#ff8b43] font-bold">{item.price} LE</h1>
                            </div>
                        </div>

                        {/* Share Icon */}
                        <div className="absolute -bottom-[1px] -right-[1px] rounded-3xl">
                            <div
                                onClick={() => navigate('/product-details', { state: item })}
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

export default MojitoProducts;
