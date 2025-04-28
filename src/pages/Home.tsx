import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import ads1 from '@/assets/images/ads1.png';
import ads2 from '@/assets/images/ads2.png';
import { Drinks } from '@/constants/Menu-options';
import { useNavigate } from 'react-router-dom';
import SearchComponent from '@/components/SearchComponent';
import Joyride, { Step } from 'react-joyride';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
// import SearchComponent from '@/components/SearchComponent';

/**
 * @component Home
 * @description Displays the home page with category selection, advertisements, and drink menu.
 * @returns {JSX.Element} The rendered Home component.
 */
const Home = (): JSX.Element => {
    const [activeButton, setActiveButton] = useState<string>("Drink Menu");
    const { users } = useSelector((state: RootState) => state.authAroma);
    console.log(users);

    const [runTour, setRunTour] = useState(false);
    const [steps, setSteps] = useState<Step[]>([]);

    const drinkRefs = useRef<(HTMLDivElement | null)[]>([]);
    const categoryRefs = useRef<(HTMLButtonElement | null)[]>([]);
    const navigate = useNavigate();


    /**
     * Generates dynamic styles for category buttons based on their active state.
     * @param {string} label - The label of the button.
     * @returns {string} Tailwind classes for styling.
     */
    const buttonStyles = (label: string): string =>
        activeButton === label
            ? "bg-[#ff8b43] text-white text-[13px] md:text-[18px] font-semibold w-[9.375rem] h-[3.688rem] rounded-full"
            : "bg-[#f8f8f8] dark:bg-transparent text-[#999999] dark:text-text-whitish dark:border-[#2E3439]  border border-[#999999] text-[13px] md:text-[18px] font-semibold w-[9.375rem] h-[3.688rem] rounded-full";


    // Generate dynamic Joyride steps after component mounts
    useEffect(() => {
        const dynamicSteps: Step[] = [];

        categoryRefs.current.forEach((ref) => {
            if (ref) {
                dynamicSteps.push({
                    target: ref,
                    content: `Click to filter by ${ref.innerText}`,
                    placement: 'bottom',
                });
            }
        });

        drinkRefs.current.forEach((ref) => {
            if (ref) {
                dynamicSteps.push({
                    target: ref,
                    content: `This is our ${ref.querySelector('h1')?.innerText}`,
                    placement: 'top',
                });
            }
        });

        setSteps(dynamicSteps);
        setRunTour(true);
    }, []);
    return (
        <div className="flex flex-col bg-background-gray dark:bg-background-navy">
            <SearchComponent />
            {/* Category Buttons */}
            <div className='flex flex-col pl-5 pt-5'>
                <div className="flex items-center gap-6">
                    {["Drink Menu", "Food", "Dessert", "Sandwich"].map((label, index) => (
                        <motion.button
                            key={label}
                            className={buttonStyles(label)}
                            onClick={() => setActiveButton(label)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            ref={el => categoryRefs.current[index] = el}
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
                    <div className="flex flex-wrap justify-start md:justify-start gap-6 mt-6">
                        {Drinks.map((drink, index) => (
                            <motion.div
                                ref={el => drinkRefs.current[index] = el}
                                key={drink.id}
                                className="bg-background-white dark:bg-background-navygrey text-text-blackish dark:text-text-whitish flex flex-col cursor-pointer w-[10rem] md:w-[19rem] justify-center h-[12.313rem] items-center md:h-[20rem] shadow-lg rounded-lg overflow-hidden"
                                onClick={() => navigate(`/${drink.value}`)}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: drink.id * 0.2 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className='bg-background-gray dark:bg-[#2E3439] rounded-lg  isolate'>
                                    <img
                                        src={drink.image}
                                        alt={`drink-${drink.id}`}
                                        className="object-contain mx-auto w-[8.782rem] h-[7.892rem] md:w-[14.5rem] md:h-[14.5rem] mix-blend-normal"
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

            <Joyride
                steps={steps}
                run={runTour}
                continuous
                scrollToFirstStep
                showSkipButton
                showProgress
                styles={{
                    options: {
                        zIndex: 20,
                    },
                }}
            />
        </div>
    );
};

export default Home;