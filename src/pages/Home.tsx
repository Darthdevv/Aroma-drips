import { useState } from 'react';
import { motion } from 'framer-motion';
import adsCamp1 from '@/assets/images/ads2.png';
import adsCamp2 from '@/assets/images/ads1.png';
import drink1 from '@/assets/images/drink1.png';
import drink2 from '@/assets/images/drink2.png';
import drink3 from '@/assets/images/drink3.png';
import drink4 from '@/assets/images/drink4.png';
import drink5 from '@/assets/images/drink5.png';
import drink6 from '@/assets/images/drink6.png';
import drink7 from '@/assets/images/drink7.png';

const Home = () => {
    const [activeButton, setActiveButton] = useState("Drink Menu");

    const Drinks = [
        { id: 1, image: drink1, name: 'Hot Coffee' },
        { id: 2, image: drink2, name: 'Iced Coffee' },
        { id: 3, image: drink3, name: 'Frappe' },
        { id: 4, image: drink4, name: 'Mojito' },
        { id: 5, image: drink7, name: 'Breezers' },
        { id: 6, image: drink5, name: 'Smoothies' },
        { id: 7, image: drink6, name: 'Milk Shakes' },
    ];

    const buttonStyles = (label: string) =>
        activeButton === label
            ? "bg-[#ff8b43] text-white text-[18px] font-semibold w-[9.375rem] h-[3.688rem] rounded-full"
            : "bg-[#f8f8f8] text-[#9d9e9f] border-2 border-[#9d9e9f] text-[18px] font-semibold w-[9.375rem] h-[3.688rem] rounded-full";

    return (
        <div className="flex flex-col pl-10 pt-8">
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
            <div className="mt-10 w-[67.125rem] flex items-center gap-5">
                <motion.img
                    src={adsCamp1}
                    alt="ads-camp"
                    className="rounded-lg shadow-md"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                />
                <motion.img
                    src={adsCamp2}
                    alt="ads-camp"
                    className="rounded-lg shadow-md"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                />
            </div>
            <div className="mt-10 flex flex-col">
                <h1 className="text-[24px] font-bold">Drink Menu</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
                    {Drinks.map((drink) => (
                        <motion.div
                            key={drink.id}
                            className="bg-white flex-col w-[20rem] flex justify-center items-center h-[21rem] shadow-lg rounded-lg overflow-hidden"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: drink.id * 0.2 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className=''>
                                <img
                                    src={drink.image}
                                    alt={`drink-${drink.id}`}
                                    className="object-contain mx-auto w-[15.5rem] h-[15.5rem]"
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
    );
};

export default Home;
