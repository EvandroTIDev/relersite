'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
    '/homescreen.webp',
    '/homepage.webp'
];

export function SmartphoneSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 4000); // 4 seconds per slide

        return () => clearInterval(timer);
    }, []);

    // Calculate the next index to show it behind the current one
    const nextIndex = (currentIndex + 1) % images.length;

    return (
        <div className="relative w-[300px] h-[600px] md:w-[350px] md:h-[700px] mx-auto select-none">
            {/* Smartphone Frame */}
            <div className="absolute inset-0 bg-black rounded-[3rem] border-8 border-gray-900 shadow-2xl z-20 pointer-events-none overflow-hidden ring-1 ring-white/20">
                {/* Dynamic Island / Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-2xl z-30" />

                {/* Screen Content */}
                <div className="relative w-full h-full bg-black">

                    {/* Static Background (Next Image) - Always visible behind */}
                    <div className="absolute inset-0">
                        <Image
                            src={images[nextIndex]}
                            alt={`Next slide`}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Animated Foreground (Current Image) - Animate Out ONLY */}
                    <AnimatePresence>
                        <motion.div
                            key={currentIndex}
                            initial={{ y: 0, opacity: 1 }} // Starts visible (it was already there as 'next')
                            animate={{ y: 0, opacity: 1 }} // Stays visible until exit
                            exit={{ y: '-100%', opacity: 1 }} // Slides UP completely to reveal the next image underneath
                            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
                            className="absolute inset-0 z-10 bg-black" // bg-black needed to cover the one behind
                        >
                            <Image
                                src={images[currentIndex]}
                                alt={`Current slide`}
                                fill
                                className="object-cover"
                                priority
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Back Glow */}
            <div className="absolute inset-0 bg-red-500/20 blur-[60px] rounded-[3rem] -z-10 transform scale-90 animate-pulse-glow" />

            {/* Reflection - Reduced opacity */}
            <div className="absolute inset-0 rounded-[3rem] z-30 pointer-events-none bg-gradient-to-tr from-white/10 to-transparent opacity-20" />
        </div>
    );
}
