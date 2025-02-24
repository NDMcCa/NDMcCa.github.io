import Image from "next/image";
import handleNewTab from "../other/handleNewTab.js";

export default function ProjectCard (props) {
    const { theme } = props;

    function LangTab ({ size, color, lang }) {
        return (
            <div className="h-1/2 pt-3 min-w-fit hover:h-expand transition-height duration-300 px-2 select-none font-ubuntu" style={{ width: `${size}%`, backgroundColor: color }}>
                <p>{lang}</p>
            </div>
        );
    }

    const langTabs = props.percentages.map((percentage, index) => {
        return (
            <LangTab 
                key={index} 
                size={percentage} 
                color={props.colors[index]} 
                lang={props.languages[index]} 
            />
        );
    });

    return (
        <div className="w-full min-h-10 
        sm:min-h-16 md:min-h-20 
        bg-slate-300 dark:bg-themed-mid outline outline-2 outline-themed-navy dark:outline-themed-light
        rounded-lg flex flex-col items-center overflow-hidden
        transition ease-in-out duration-500 shadow-md shadow-neutral-400 dark:shadow-black" key={props.key}>
            <div className="flex flex-col items-start justify-center py-8 px-2 sm:px-4 md:px-8 w-full">
                <div className="flex flex-col px-2 w-full text-xs sm:text-sm md:text-lg gap-y-2">
                    <div className="flex flex-row gap-x-2 gap-y-2">
                        <h3 onClick={() => handleNewTab(`${props.link}`)} className="text-themed-navy dark:text-themed-light text-lg sm:text-sm md:text-lg lg:text-xl xl:text-3xl 2xl:text-4xl font-roboto font-bold cursor-pointer select-none">{props.title}</h3>
                        <div className="ml-auto flex-shrink-0 flex flex-wrap justify-end px-2 sm:px-3 py-2 md:py-0 gap-x-2 gap-y-2">
                            {props.icons.map((icon, index) => {
                                const iconPath = theme === 'dark' ? props.iconMap[`${icon}-dark`] : props.iconMap[icon];
                                return (
                                    <Image key={index} src={iconPath} alt="" width={40} height={40} className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-10 lg:w-10 xl:h-10 xl:w-10 text-themed-navy dark:text-themed-light" />
                                );
                            })}
                        </div>
                    </div>
                    <p className="text-themed-teal text-xs sm:text-xs md:text-sm lg:text-md xl:text-lg 2xl:text-xl">{props.tags}</p>
                    <p className="text-themed-navy dark:text-themed-light text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">{props.description}</p>
                </div>
            </div>
            <div className="flex flex-row items-end justify-center h-8 w-full overflow-visible">
                {langTabs}
            </div>
        </div>
    );
}