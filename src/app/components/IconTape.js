import React from 'react';
import Image from "next/image";
import { motion } from 'framer-motion';

import java from "../../../public/Java.png";
import js from "../../../public/JS.png";
import html from "../../../public/HTML5_logo.png";
import css from "../../../public/CSS3_logo.png";
import python from "../../../public/Python.png";
import c from "../../../public/C_Logo.png";
import csharp from "../../../public/CSharp.png";

import react from "../../../public/react.png";
import node from "../../../public/nodejs.png";
import tw from "../../../public/tailwind-css.png";
import next from "../../../public/next.svg";
import svelte from "../../../public/svelte_logo.png";


const langs = [
    {icon: <Image src={java} alt="Java"       className="h-8 w-8 sm:h-9 sm:w-9 md:h-16 md:w-16 bg-transparent dark:rounded-sm transition-colors ease-in-out duration-500" />},
    {icon: <Image src={js} alt="JavaScript"   className="h-8 w-8 sm:h-9 sm:w-9 md:h-16 md:w-16 bg-transparent dark:rounded-sm transition-colors ease-in-out duration-500" />},
    {icon: <Image src={html} alt="HTML5"      className="h-8 w-8 sm:h-9 sm:w-9 md:h-16 md:w-16 bg-transparent dark:rounded-sm transition-colors ease-in-out duration-500" />},
    {icon: <Image src={css} alt="CSS3"        className="h-8 w-8 sm:h-9 sm:w-9 md:h-16 md:w-16 bg-transparent dark:rounded-sm transition-colors ease-in-out duration-500" />},
    {icon: <Image src={python} alt="Python 3" className="h-8 w-8 sm:h-9 sm:w-9 md:h-16 md:w-16 bg-transparent dark:rounded-sm transition-colors ease-in-out duration-500" />},
    {icon: <Image src={c} alt="C"             className="h-8 w-8 sm:h-9 sm:w-9 md:h-16 md:w-16 bg-transparent dark:rounded-sm transition-colors ease-in-out duration-500" />},
    {icon: <Image src={csharp} alt="C#"       className="h-8 w-8 sm:h-9 sm:w-9 md:h-16 md:w-16 bg-transparent dark:rounded-sm transition-colors ease-in-out duration-500" />}
];

const services = [
    {icon: <Image src={react} alt="React"   className="h-8 w-8  sm:h-9 sm:w-9  md:h-16 md:w-16 bg-transparent dark:rounded-sm transition-colors ease-in-out duration-500" />},
    {icon: <Image src={node} alt="Tailwind" className="h-8 w-12 sm:h-9 sm:w-14 md:h-16 md:w-24 bg-transparent dark:rounded-sm transition-colors ease-in-out duration-500" />},
    {icon: <Image src={svelte} alt="Svelte" className="h-8 w-8  sm:h-9 sm:w-9  md:h-16 md:w-16 bg-transparent dark:rounded-sm transition-colors ease-in-out duration-500" />},
    {icon: <Image src={next} alt="NEXT.js"  className="h-8 w-12 sm:h-9 sm:w-16 md:h-16 md:w-24 dark:bg-neutral-200 dark:rounded-sm transition-colors ease-in-out duration-500 px-1" />},
    {icon: <Image src={tw} alt="Tailwind"   className="h-8 w-12 sm:h-9 sm:w-14 md:h-16 md:w-24 bg-transparent dark:rounded-sm transition-colors ease-in-out duration-500" />},
];

const IconTape = () => {
    const repeatLangs = [...langs, ...langs, ...langs];
    const repeatServices = [...services, ...services, ...services, ...services ];

    return (
        <div className="relative z-0 h-40 sm:h-40 md:h-64 lg:h-56 xl:h-80 w-5/6 overflow-hidden py-2 my-4 space-y-2 xl:py-4 xl:my-10 xl:space-y-4 mask-fade">
            <div className='absolute inset-0 z-10 transition-colors ease-in-out duration-500 
                before:absolute before:left-0 before:top-0 before:w-1/4 before:h-full before:bg-gradient-to-r before:from-neutral-100 before:to-transparent 
                before:filter before:blur-3 dark:before:from-neutral-950 before:transition-colors before:ease-in-out before:duration-500 
                after:absolute after:right-0 after:top-0 after:w-1/4 after:h-full after:bg-gradient-to-l after:from-neutral-100 after:to-transparent 
                after:filter after:blur-3 dark:after:from-neutral-950 after:transition-colors after:ease-in-out after:duration-500' />
            <div className='text-center'>
                <h2 className='text-sm sm:text-xl md:text-2xl xl:text-3xl 2xl:text-2xl text-black dark:text-neutral-200 transition-colors ease-in-out duration-500'>
                    Prgramming Languages:
                </h2>
            </div>
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
            <div className='text-center'>
                <h2 className='text-sm sm:text-xl md:text-2xl xl:text-3xl 2xl:text-2xl text-black dark:text-neutral-200 transition-colors ease-in-out duration-500 xl:pt-10'>
                    Frameworks/Technologies:
                </h2>
            </div>
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
