import { motion } from "framer-motion";
import CupSize from "@/assets/icons/CupSize";
import { Options, Sizes } from "@/constants/Menu-options";
import { Controller, useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/redux/cartSlice";
import { RootState } from "@/store";
import PlusIcon from "@/assets/icons/PlusIcon";
import MinusIcon from "@/assets/icons/MinusIcon";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import { clearSelection, decreaseSelectionQuantity, increaseSelectionQuantity, selectAddOn, selectSize } from "@/redux/selectionSlice";
import { selectCurrentSelection } from "@/redux/selectors";
import CartNotificationBanner from "@/components/CartNotificationBanner";
import toast from "react-hot-toast";

interface Product {
    id: number;
    imageUrl: string;
    description: string;
    name: string;
    price: number;
    category: string;
}

const ProductDetails = () => {
    const location = useLocation();
    const Product: Product | null = location.state || null;
    const currentSelection = useSelector((state: RootState) =>
        selectCurrentSelection(state, Product?.id)
    );
    const { control, watch, handleSubmit, reset } = useForm({
        defaultValues: {
            size: "",
            type: "",
        }
    });
    console.log(currentSelection);

    const dispatch = useDispatch();
    const selectedSize = watch("size");
    const selectedOption = watch("type");
    const [totalPrice, setTotalPrice] = useState(Product?.price || 0);

    useEffect(() => {
        if (!Product) return;

        if (selectedSize) {
            dispatch(selectSize({ id: Product.id, size: selectedSize }));
        }
    }, [selectedSize, Product, dispatch]);

    useEffect(() => {
        if (!Product) return;

        if (selectedOption) {
            dispatch(selectAddOn({ id: Product.id, addOn: selectedOption }));
        }
    }, [selectedOption, Product, dispatch]);

    useEffect(() => {
        if (!Product) return;

        const selectedOptionObj = Options.find(option => option.name === selectedOption);
        const selectedOptionPrice = selectedOptionObj ? selectedOptionObj.price : 0;

        setTotalPrice((Product?.price || 0) + selectedOptionPrice);
    }, [selectedOption, Product]);

    const handleAddToCart = () => {
        if (!currentSelection?.size) {
            toast.error('You have to choose a size first')
            return;
        }
        if (!Product || !currentSelection?.size) return;

        const productToAdd = {
            id: Product.id,
            name: Product.name,
            imageUrl: Product.imageUrl,
            description: Product.description,
            price: totalPrice,
            basePrice: Product.price,
            size: currentSelection.size,
            addOn: currentSelection.addOn || "",
            quantity: currentSelection.quantity || 1,
            category: Product.category,
            uniqueId: `${Product.id}-${currentSelection.size}-${currentSelection.addOn || 'none'}`
        };

        dispatch(addToCart(productToAdd));
        dispatch(clearSelection(Product.id));
        setTotalPrice(Product.price);
        reset({
            size: "",
            type: ""
        });
    };
    const type = watch('type')
    console.log(type);

    if (!Product) {
        return (
            <div className="text-center text-red-500 font-bold text-lg">
                Product not found!
            </div>
        );
    }

    return (
        <section className="bg-background-grey dark:bg-background-navy min-h-screen">
            <Header
                link="/home"
                text={Product && Product.name}
            />
            <main className="p-4 md:p-5">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className='bg-background-white dark:bg-background-navygrey text-text-blackish dark:text-text-whitish h-auto w-full rounded-xl shadow-lg p-4 md:p-10'
                >
                    <form onSubmit={handleSubmit(handleAddToCart)} className="w-full flex flex-col md:flex-row gap-4 md:gap-5">
                        {/* Product Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="flex justify-center md:justify-start"
                        >
                            {Product && (
                                <img
                                    className="w-[7rem] h-[7rem] md:w-[9.688rem] md:h-[9.688rem] rounded-lg"
                                    src={Product.imageUrl}
                                    alt={Product.name}
                                />
                            )}
                        </motion.div>

                        {/* Product Details */}
                        <div className="flex flex-1 flex-col">
                            <div>
                                <h1 className="text-[16px] md:text-[18px] font-bold">Description</h1>
                                <p className="text-[12px] md:text-[14px] mt-2">{Product?.description || "No description available."}</p>
                            </div>

                            {/* Choice of Size */}
                            <div className="mt-6 md:mt-10">
                                <h1 className="text-[16px] md:text-[18px] font-bold">Choice of Size</h1>
                                <div className="flex items-center gap-2 md:gap-5 mt-3 flex-wrap">
                                    {Sizes.map((size, index) => (
                                        <Controller
                                            key={index}
                                            name="size"
                                            control={control}
                                            render={({ field }) => (
                                                <motion.div
                                                    whileHover={{ scale: 1.1 }}
                                                    whileTap={{ scale: 0.9 }}
                                                    className="flex flex-col items-center cursor-pointer p-1 md:p-3"
                                                    onClick={() => field.onChange(size.name)}
                                                >
                                                    <motion.div
                                                        animate={{ scale: selectedSize === size.name ? 1.2 : 1 }}
                                                        className={`w-[2.5rem] md:w-[3.674rem] flex items-center justify-center h-[2.5rem] md:h-[3.674rem] transition-all rounded-lg ${selectedSize === size.name ? "border border-orange-500" : "hover:bg-gray-100 dark:hover:bg-gray-700"
                                                            }`}
                                                    >
                                                        <CupSize
                                                            width={size.name === "Small" ? 14 : size.name === "Medium" ? 20 : 24}
                                                            height={size.name === "Small" ? 14 : size.name === "Medium" ? 20 : 24}
                                                            className={`transition-all ${selectedSize === size.name ? "text-orange-500" : "text-gray-500 dark:text-gray-300"
                                                                }`}
                                                        />
                                                    </motion.div>
                                                    <span
                                                        className={`text-[10px] md:text-[12px] mt-1 md:mt-2 ${selectedSize === size.name ? "text-orange-500 font-bold" : "text-gray-500 dark:text-gray-300"
                                                            }`}
                                                    >
                                                        {size.name}
                                                    </span>
                                                </motion.div>
                                            )}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Choice of Add On */}
                            <div className="mt-6 md:mt-10">
                                <h1 className="text-[16px] md:text-[18px] font-bold">Choice of Add On</h1>
                                <div className="flex flex-col mt-3 md:mt-5 gap-2">
                                    {Options.map((option, index) => (
                                        <Controller
                                            key={index}
                                            name="type"
                                            control={control}
                                            render={({ field }) => (
                                                <motion.label
                                                    whileHover={{ scale: 1.02 }}
                                                    whileTap={{ scale: 0.98 }}
                                                    className={`cursor-pointer px-2 md:px-3 py-2 rounded-lg flex justify-between items-center h-auto md:h-[3.448rem] transition-all ${field.value === option.name ? "border border-orange-500" : "hover:bg-gray-100 dark:hover:bg-gray-700"
                                                        }`}
                                                    onClick={() => field.onChange(option.name)}
                                                >
                                                    <div className="flex items-center gap-2 md:gap-3">
                                                        <motion.img
                                                            initial={{ opacity: 0, scale: 0.8 }}
                                                            animate={{ opacity: 1, scale: 1 }}
                                                            transition={{ duration: 0.3, delay: index * 0.1 }}
                                                            src={option.imageUrl}
                                                            alt={option.name}
                                                            className="w-6 h-6 md:w-8 md:h-8"
                                                        />
                                                        <span className="text-[12px] md:text-[14px]">{option.name}</span>
                                                    </div>
                                                    <div className="flex gap-2 md:gap-3 items-center">
                                                        <span className="text-[12px] md:text-[14px]">+{option.price} LE</span>
                                                        <input
                                                            type="radio"
                                                            value={option.name}
                                                            checked={field.value === option.name}
                                                            onChange={() => field.onChange(option.name)}
                                                            className="w-4 h-4"
                                                        />
                                                    </div>
                                                </motion.label>
                                            )}
                                        />
                                    ))}
                                </div>
                            </div>

                            <div className="my-4">
                                <hr className="border-gray-200 dark:border-gray-600" />
                            </div>

                            {/* Total Price + Add to Cart */}
                            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-4">
                                <h2 className="text-[18px] md:text-[20px] font-bold">{totalPrice} LE</h2>

                                <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10 w-full md:w-auto">
                                    {currentSelection && (
                                        <div className="flex items-center gap-2 md:gap-4 w-full justify-between md:w-auto">
                                            <button
                                                type="button"
                                                className="w-[2.5rem] md:w-[2.821rem] cursor-pointer h-[2.5rem] md:h-[2.821rem] border border-orange-500 rounded-full flex items-center justify-center text-orange-500 font-bold"
                                                onClick={() => dispatch(decreaseSelectionQuantity(Product.id))}
                                            >
                                                <MinusIcon className="w-4 h-4" />
                                            </button>
                                            <span className="text-[16px] md:text-[18px] font-bold">
                                                {String(currentSelection.quantity || 1).padStart(2, '0')}
                                            </span>
                                            <button
                                                type="button"
                                                className="w-[2.5rem] md:w-[2.821rem] cursor-pointer h-[2.5rem] md:h-[2.821rem] bg-orange-500 text-white rounded-full flex items-center justify-center font-bold"
                                                onClick={() => dispatch(increaseSelectionQuantity(Product.id))}
                                            >
                                                <PlusIcon className="w-4 h-4" />
                                            </button>
                                        </div>
                                    )}
                                    <button
                                        type="submit"
                                        disabled={!currentSelection}
                                        className={`${currentSelection ? "" : " opacity-45 cursor-not-allowed"} w-full md:w-[9.125rem] bg-[#ff8b43] h-[2.5rem] md:h-[3.125rem] rounded-full text-[14px] md:text-[17px] text-white hover:bg-[#e67e34] transition-all`}
                                    >
                                        Add to cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </motion.div>
            </main>
            <CartNotificationBanner />
        </section>
    );
};

export default ProductDetails;