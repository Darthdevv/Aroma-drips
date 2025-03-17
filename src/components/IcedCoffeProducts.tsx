import { motion } from "framer-motion";
import ShareIcon from "@/assets/icons/ShareIcon";
import { iceCoffeeItems } from "@/constants/Menu-options";
import { Link, useNavigate } from "react-router-dom";
import ChevronLeftIcon from "@/assets/icons/ChevronLeft";

/**
 * @interface IcedCoffeeProduct
 * @description Represents an iced coffee product item.
 * @property {number} id - Unique identifier for the iced coffee product.
 * @property {string} name - Name of the iced coffee product.
 * @property {string} imageUrl - Image URL of the product.
 * @property {number} price - Price of the iced coffee product.
 */
interface IcedCoffeeProduct {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
}

/**
 * @component IcedCoffeProducts
 * @description Displays a list of iced coffee products available in the menu.
 * It provides navigation to a product details page.
 * @returns {JSX.Element} The IcedCoffeProducts component.
 */
const IcedCoffeProducts = (): JSX.Element => {
    const navigate = useNavigate();

    return (
        <section>
            {/* Page Header */}
            <header className="bg-background-white dark:bg-background-navygrey h-[6.625rem] w-full flex items-center justify-start p-4 text-text-blackish dark:text-text-whitish text-lg font-semibold">
                <Link to={'/home'} className="flex items-center justify-center gap-3 px-4">
                    <ChevronLeftIcon />
                    <span className="text-2xl">Drink menu / Ice Coffee</span>
                </Link>
            </header>

            {/* Iced Coffee Products List */}
            <main className="flex flex-wrap justify-start gap-16 px-4 md:px-10 lg:px-20">
                {iceCoffeeItems.map((item: IcedCoffeeProduct, index: number) => (
                    <motion.div
                        key={index}
                        className="bg-background-white dark:bg-background-navygrey text-text-blackish dark:text-text-whitish  relative flex flex-col items-center w-[14.75rem] mt-20 mb-14 h-[15.875rem] rounded-t-[120px] rounded-b-2xl"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {/* Iced Coffee Image */}
                        <motion.img
                            src={item.imageUrl}
                            className="rounded-full w-[9.688rem] absolute top-[-35px]"
                            alt={item.name}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        />
                        {/* Iced Coffee Name & Price */}
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

export default IcedCoffeProducts;
