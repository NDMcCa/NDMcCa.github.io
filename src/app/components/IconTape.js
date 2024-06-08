import React from 'react';
import Image from "next/image";
import { motion } from 'framer-motion';
import tw from "../../../public/tailwind-css-svgrepo-com.svg";
import next from "../../../public/next.svg";
import csharp from "../../../public/csharp.svg";

const langs = [
    {icon: <i className="fab fa-js     text-black dark:text-neutral-200 text-3xl sm:text-4xl md-text-5xl lg:text-6xl xl:text-7xl transition-colors ease-in-out duration-500"></i>},
    {icon: <i className="fab fa-java   text-black dark:text-neutral-200 text-3xl sm:text-4xl md-text-5xl lg:text-6xl xl:text-7xl transition-colors ease-in-out duration-500"></i>},
    {icon: <i className="fab fa-html5  text-black dark:text-neutral-200 text-3xl sm:text-4xl md-text-5xl lg:text-6xl xl:text-7xl transition-colors ease-in-out duration-500"></i>},
    {icon: <i className="fab fa-css3   text-black dark:text-neutral-200 text-3xl sm:text-4xl md-text-5xl lg:text-6xl xl:text-7xl transition-colors ease-in-out duration-500"></i>},
    {icon: <i className="fab fa-python text-black dark:text-neutral-200 text-3xl sm:text-4xl md-text-5xl lg:text-6xl xl:text-7xl transition-colors ease-in-out duration-500"></i>},
    {icon: <i className="fab fa-java   text-black dark:text-neutral-200 text-3xl sm:text-4xl md-text-5xl lg:text-6xl xl:text-7xl transition-colors ease-in-out duration-500"></i>},
    {icon: <Image src={csharp} alt="next" className="h-8 w-8 sm:h-9 sm:w-9 md:h-16 md:w-16 dark:bg-neutral-200 dark:rounded-sm transition-colors ease-in-out duration-500 px-2 py-1" />}
];

const services = [
    {icon: <i className="fab fa-react text-black dark:text-neutral-200 text-3xl sm:text-4xl md-text-5xl lg:text-6xl xl:text-7xl transition-colors ease-in-out duration-500"></i>},
    {icon: <i className="fab fa-node  text-black dark:text-neutral-200 text-3xl sm:text-4xl md-text-5xl lg:text-6xl xl:text-7xl transition-colors ease-in-out duration-500"></i>},
    {icon: <Image src={next} alt="next" className="h-8 w-10 sm:h-9 sm:w-14 md:h-16 md:w-20 dark:bg-neutral-200 dark:rounded-sm transition-colors ease-in-out duration-500 px-1" />},
    {icon: <Image src={tw} alt="next" className="h-8 w-10 sm:h-9 sm:w-14 md:h-16 md:w-20 dark:bg-neutral-200 dark:rounded-sm transition-colors ease-in-out duration-500 px-1" />},
];

const IconTape = () => {
    const repeatLangs = [...langs, ...langs, ...langs];
    const repeatServices = [...services, ...services, ...services, ...services ];

    return (
        <div className="relative z-0 h-24 sm:h-28 md:h-40 lg:h-44 xl:h-48 w-5/6 overflow-hidden py-2 my-4 space-y-2 xl:py-4 xl:my-10 xl:space-y-4 mask-fade">
            <div className="absolute inset-0 z-10 transition-colors ease-in-out duration-500 before:absolute before:left-0 before:top-0 before:w-1/4 before:h-full before:bg-gradient-to-r before:from-neutral-100 before:to-transparent before:filter before:blur-3 dark:before:from-neutral-950 before:transition-colors before:ease-in-out before:duration-500 after:absolute after:right-0 after:top-0 after:w-1/4 after:h-full after:bg-gradient-to-l after:from-neutral-100 after:to-transparent after:filter after:blur-3 dark:after:from-neutral-950 after:transition-colors after:ease-in-out after:duration-500" />
            <motion.div
                className="flex w-fit justify-center langs-center z-0"
                animate={{
                    x: ['0%', '100%'],
                    transition: {
                        duration: 25,
                        repeat: Infinity,
                        repeatType: 'loop',
                        ease: 'linear'
                    }
                }}
                
            >
                {repeatLangs.map((item, index) => (
                    <div key={index} className="flex-shrink-0" style={{ width: `${100 / langs.length}%` }}>
                        <div className="flex flex-col langs-center justify-center h-full text-6xl">
                            {item.icon}
                        </div>
                    </div>
                ))}
            </motion.div>
            <motion.div
                className="flex w-fit justify-center langs-center"
                animate={{
                    x: ['0%', '-100%'],
                    transition: {
                        duration: 30,
                        repeat: Infinity,
                        repeatType: 'loop',
                        ease: 'linear'
                    }
                }}
                
            >
                {repeatServices.map((item, index) => (
                    <div key={index} className="flex-shrink-0" style={{ width: `${100 / services.length}%` }}>
                        <div className="flex flex-col langs-center justify-center h-full text-6xl">
                            {item.icon}
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default IconTape;
