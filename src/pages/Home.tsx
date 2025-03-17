import { useState } from 'react';
import { motion } from 'framer-motion';
import ads1 from '@/assets/images/ads1.png';
import ads2 from '@/assets/images/ads2.png';
import { Drinks } from '@/constants/Menu-options';
import { Controller, useForm } from 'react-hook-form';
import { IconFilter, IconSearch } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';

/**
 * @component Home
 * @description Displays the home page with category selection, advertisements, and drink menu.
 * @returns {JSX.Element} The rendered Home component.
 */
const Home = (): JSX.Element => {
    const [activeButton, setActiveButton] = useState<string>("Drink Menu");
    const navigate = useNavigate();
    const { control } = useForm({
        defaultValues: {
            searchQuery: "",
        },
    });

    /**
     * Generates dynamic styles for category buttons based on their active state.
     * @param {string} label - The label of the button.
     * @returns {string} Tailwind classes for styling.
     */
    const buttonStyles = (label: string): string =>
        activeButton === label
            ? "bg-[#ff8b43] text-white text-[18px] font-semibold w-[9.375rem] h-[3.688rem] rounded-full"
            : "bg-[#f8f8f8] dark:bg-transparent text-[#999999] dark:text-text-whitish dark:border-[#2E3439]  border border-[#999999] text-[18px] font-semibold w-[9.375rem] h-[3.688rem] rounded-full";

    return (
        <div className="flex flex-col">
            <div className="h-[6.625rem] py-5 w-full flex items-center justify-center bg-[#fff] dark:bg-background-navygrey">
                <div className="relative w-[40rem] flex items-center bg-[#fff] dark:bg-background-navygrey rounded-full shadow-sm">
                    <IconSearch className="absolute left-4 text-text-whitish font-semibold" size={20} />
                    <Controller
                        name="searchQuery"
                        control={control}
                        render={({ field }) => (
                            <input
                                {...field}
                                type="text"
                                placeholder="Menu"
                                className="w-[36.375rem] h-[3.625rem] pl-10 bg-background-gray dark:bg-background-navy rounded-full outline-none text-text-whitish placeholder:text-text-whitish font-semibold"
                            />
                        )}
                    />
                    <button className="absolute right-1  h-[3.6rem] w-[9.75rem] bg-[#244937] text-white flex items-center justify-center rounded-full px-6 font-medium">
                        <IconFilter className="mr-2" size={20} />
                        Search
                    </button>
                </div>
            </div>
            {/* Category Buttons */}
            <div className='flex flex-col pl-5 pt-5'>
                <div className="flex items-center gap-6">
                    {["Drink Menu", "Food", "Dessert", "Sandwich"].map((label) => (
                        <motion.button
                            key={label}
                            className={buttonStyles(label)}
                            onClick={() => setActiveButton(label)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                        >
                            {label}
                        </motion.button>
                    ))}
                </div>

                {/* Advertisements */}
                <div className="mt-10 w-full overflow-hidden">
                    <div className="flex animate-marquee whitespace-nowrap">
                        {[ads1, ads2, ads1, ads2].map((ad, index) => (
                            <motion.img
                                key={index}
                                src={ad}
                                alt={`Advertisement ${index + 1}`}
                                className="rounded-lg shadow-md mx-8 object-cover"
                                initial={{ opacity: 0, x: -100 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                            />
                        ))}
                    </div>
                </div>

                {/* Drink Menu */}
                <div className="mt-10 flex flex-col">
                    <h1 className="text-[24px] font-bold text-text-blackish dark:text-text-whitish">Drink Menu</h1>
                    <div className="flex flex-wrap justify-start gap-6 mt-6">
                        {Drinks.map((drink) => (
                            <motion.div
                                onClick={() => {
                                    navigate(`/${drink.value}`)
                                }}
                                key={drink.id}
                                className="bg-white flex flex-col cursor-pointer w-[19rem] justify-center items-center h-[20rem] shadow-lg rounded-lg overflow-hidden"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: drink.id * 0.2 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className=''>
                                    <img
                                        src={drink.image}
                                        alt={`drink-${drink.id}`}
                                        className="object-contain mx-auto w-[14.5rem] h-[14.5rem]"
                                    />
                                </div>
                                <div className='text-center mt-2'>
                                    <h1 className='text-[18px] font-bold'>{drink.name}</h1>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;