import { motion } from "framer-motion";
import ShareIcon from "@/assets/icons/ShareIcon";
import { coffeeItems } from "@/constants/Menu-options";
import { Link, useNavigate } from "react-router-dom";
import ChevronLeftIcon from "@/assets/icons/ChevronLeft";

/**
 * @interface CoffeeProduct
 * @description Represents a coffee product item.
 * @property {number} id - Unique identifier for the coffee product.
 * @property {string} name - Name of the coffee product.
 * @property {string} imageUrl - Image URL of the product.
 * @property {number} price - Price of the coffee product.
 */
interface CoffeeProduct {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
}

/**
 * @component CoffeProducts
 * @description Displays a list of coffee products available in the menu.
 * It provides navigation to a product details page.
 * @returns {JSX.Element} The CoffeProducts component.
 */
const CoffeProducts = (): JSX.Element => {
    const navigate = useNavigate();

    return (
        <section>
            {/* Page Header */}
            <header className="bg-background-white dark:bg-background-navygrey h-[6.625rem] w-full flex items-center justify-start p-4 text-text-blackish dark:text-text-whitish text-lg font-semibold">
                <Link to={'/home'} className="flex items-center justify-center gap-3 px-4">
                    <ChevronLeftIcon />
                    <span className="text-2xl">Drink menu / Hot Coffee</span>
                </Link>
            </header>

            {/* Coffee Products List */}
            <main className="flex flex-wrap justify-start gap-16 px-4 md:px-10 lg:px-20">
                {coffeeItems.map((item: CoffeeProduct, index: number) => (
                    <motion.div
                        key={index}
                        className="bg-background-white dark:bg-background-navygrey text-text-blackish dark:text-text-whitish  relative flex flex-col items-center w-[14.75rem] mt-20 mb-14 h-[15.875rem] rounded-t-[120px] rounded-b-2xl"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {/* Coffee Image */}
                        <motion.img
                            src={item.imageUrl}
                            className="rounded-full w-[9.688rem] absolute top-[-35px]"
                            alt={item.name}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        />
                        {/* Coffee Name & Price */}
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

export default CoffeProducts;
