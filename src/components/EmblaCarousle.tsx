import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay'; // Import the autoplay plugin
import ads1 from '@/assets/images/ads1.png';
import ads2 from '@/assets/images/ads2.png';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

export function EmblaCarousel() {
    // Initialize Embla Carousel with autoplay plugin
    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true, // Enable infinite looping
            align: 'start', // Align slides to the start
            slidesToScroll: 3, // Scroll 3 slides at a time
        },
        [
            Autoplay({ delay: 3000, stopOnInteraction: false }), // Auto-slide every 3 seconds
        ]
    );

    // Optional: Log Embla API for debugging
    useEffect(() => {
        if (emblaApi) {
            console.log('Embla Carousel initialized:', emblaApi);
        }
    }, [emblaApi]);

    return (
        <div className="embla overflow-hidden" ref={emblaRef}>
            <div className="embla__container flex">
                {/* Slide 1 */}
                <div className="embla__slide flex-[0_0_33.33%] min-w-0 pl-4">
                    <motion.img
                        src={ads1}
                        alt="Advertisement 1"
                        className="rounded-lg shadow-md w-full"
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    />
                </div>
                {/* Slide 2 */}
                <div className="embla__slide flex-[0_0_33.33%] min-w-0 pl-4">
                    <motion.img
                        src={ads2}
                        alt="Advertisement 2"
                        className="rounded-lg shadow-md w-full"
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    />
                </div>
                {/* Slide 3 */}
                <div className="embla__slide flex-[0_0_33.33%] min-w-0 pl-4">
                    <motion.img
                        src={ads1}
                        alt="Advertisement 1"
                        className="rounded-lg shadow-md w-full"
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    />
                </div>
                {/* Slide 4 */}
                <div className="embla__slide flex-[0_0_33.33%] min-w-0 pl-4">
                    <motion.img
                        src={ads2}
                        alt="Advertisement 2"
                        className="rounded-lg shadow-md w-full"
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    />
                </div>
                {/* Slide 5 */}
                <div className="embla__slide flex-[0_0_33.33%] min-w-0 pl-4">
                    <motion.img
                        src={ads1}
                        alt="Advertisement 1"
                        className="rounded-lg shadow-md w-full"
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    />
                </div>
                {/* Slide 6 */}
                <div className="embla__slide flex-[0_0_33.33%] min-w-0 pl-4">
                    <motion.img
                        src={ads2}
                        alt="Advertisement 2"
                        className="rounded-lg shadow-md w-full"
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    />
                </div>
            </div>
        </div>
    );
}