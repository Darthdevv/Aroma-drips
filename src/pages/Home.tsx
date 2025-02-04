/**
 * @file Home.tsx
 * @description This file contains the Home component, which serves as the landing page.
 * It features category buttons, advertisements, and drink menu items.
 */

import { useState } from 'react';
import { motion } from 'framer-motion';
import adsCamp1 from '@/assets/images/Assets/ads2.png';
import adsCamp2 from '@/assets/images/Assets/ads1.png';
import { Drinks } from '@/constants/Menu-options';
import { Link } from 'react-router-dom';

/**
 * @component Home
 * @description Displays the home page with category selection, advertisements, and drink menu.
 * @returns {JSX.Element} The rendered Home component.
 */
const Home = (): JSX.Element => {
    const [activeButton, setActiveButton] = useState<string>("Drink Menu");

    /**
     * Generates dynamic styles for category buttons based on their active state.
     * @param {string} label - The label of the button.
     * @returns {string} Tailwind classes for styling.
     */
    const buttonStyles = (label: string): string =>
        activeButton === label
            ? "bg-[#ff8b43] text-white text-[18px] font-semibold w-[9.375rem] h-[3.688rem] rounded-full"
            : "bg-[#f8f8f8] text-[#9d9e9f] border-2 border-[#9d9e9f] text-[18px] font-semibold w-[9.375rem] h-[3.688rem] rounded-full";

    return (
        <div className="flex flex-col pl-10 pt-8">
            {/* Category Buttons */}
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
            <div className="mt-10 w-full flex flex-wrap justify-start gap-5">
                <motion.img
                    src={adsCamp1}
                    alt="Advertisement 1"
                    className="rounded-lg shadow-md"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                />
                <motion.img
                    src={adsCamp2}
                    alt="Advertisement 2"
                    className="rounded-lg shadow-md"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                />
            </div>

            {/* Drink Menu */}
            <div className="mt-10 flex flex-col">
                <h1 className="text-[24px] font-bold">Drink Menu</h1>
                <div className="flex flex-wrap justify-start gap-6 mt-6">
                    {Drinks.map((drink) => (
                        <motion.div
                            key={drink.id}
                            className="bg-white flex flex-col cursor-pointer w-[20rem] justify-center items-center h-[21rem] shadow-lg rounded-lg overflow-hidden"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: drink.id * 0.2 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <Link to={`/?tab=${drink.name}`} className=''>
                                <img
                                    src={drink.image}
                                    alt={`drink-${drink.id}`}
                                    className="object-contain mx-auto w-[15.5rem] h-[15.5rem]"
                                />
                            </Link>
                            <div className='text-center mt-2'>
                                <h1 className='text-[18px] font-bold'>{drink.name}</h1>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
