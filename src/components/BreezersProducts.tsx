import { motion } from "framer-motion";
import ShareIcon from "@/assets/icons/ShareIcon";
import { BreezersItems } from "@/constants/Menu-options";
import { Link, useNavigate } from "react-router-dom";
import ChevronLeftIcon from "@/assets/icons/ChevronLeft";

/**
 * @interface Product
 * @description Represents a Breezer product item.
 * @property {number} id - Unique identifier for the product.
 * @property {string} name - Name of the Breezer product.
 * @property {string} imageUrl - Image URL of the product.
 * @property {number} price - Price of the Breezer product in LE.
 */
interface Product {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
}

/**
 * @component BreezersProducts
 * @description This component displays a list of Breezers products with animations.
 * Each product is shown with an image, name, price, and a button to navigate to the product details page.
 *
 * @returns {JSX.Element} The BreezersProducts component.
 */
const BreezersProducts = (): JSX.Element => {
    const navigate = useNavigate();

    return (
        <section>
            {/* Page Header */}
            <header className="bg-background-white h-[6.625rem] w-full flex items-center justify-start p-4 text-black text-lg font-semibold sticky top-0 z-50 shadow-md">
                <Link to={'/?tab=home'} className="flex items-center justify-center gap-3 px-4">
                    <ChevronLeftIcon />
                    <span className="text-2xl">Drink menu / Breezers</span>
                </Link>
            </header>

            {/* Breezers Product List */}
            <main className="flex flex-wrap justify-start gap-10 px-4 md:px-10 lg:px-20 mt-10">
                {BreezersItems.map((item: Product, index: number) => (
                    <motion.div
                        key={item.id}
                        className="bg-white relative flex flex-col items-center w-full sm:w-[48%] md:w-[30%] lg:w-[22%] max-w-[14.75rem] mt-5 h-[15.875rem] rounded-t-[120px] rounded-b-2xl shadow-lg"
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
                            alt={item.name}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        />

                        {/* Product Name & Price */}
                        <div className="flex flex-col justify-center items-center z-40 mt-36">
                            <div className="text-center">
                                <h1 className="text-[1.25rem] font-bold">{item.name}</h1>
                            </div>
                            <div className="text-center">
                                <h1 className="text-[1rem] text-[#ff8b43] font-bold">{item.price} LE</h1>
                            </div>
                        </div>

                        {/* Share / Navigate Button */}
                        <div className="absolute bottom-0 right-0 cursor-pointer">
                            <div
                                onClick={() => navigate('/?tab=product-details', { state: item })}
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

export default BreezersProducts;
