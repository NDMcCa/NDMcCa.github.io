import Image from "next/image";

export default function ProjectCard (props) {

    const handleNewTab = () => {
        window.open({link}, "_blank", "noopener", "noreferrer");
    }

    function LangTab ({ size, color, lang }) {
        return (
            <div className="h-1/2 pt-3 hover:h-expand transition-height duration-300 px-2 select-none cursor-pointer" style={{ width: `${size}%`, backgroundColor: color }}>
                <p >{lang}</p>
            </div>
        )
    };

    console.log("Props:", props);
    
    const langTabs = props.percentages.map((percentage, index) => {
        console.log(props.colors[index]);
        return (
            <LangTab 
                key={index} 
                size={percentage} 
                color={props.colors[index]} 
                lang={props.languages[index]} 
            />
        )
    });

    return (
        <div className="w-full min-h-10 
        sm:min-h-16 md:min-h-20 
        bg-neutral-800 dark:bg-themed-dark outline outline-2 outline-neutral-400 dark:outline-themed-light
        rounded-lg flex flex-col items-center overflow-hidden
        transition ease-in-out duration-500 shadow-md shadow-neutral-400 dark:shadow-black" key={props.key}>
            <div className="flex flex-col items-start justify-center py-8 px-2 sm:px-4 md:px-8 w-full " >
                <div className="flex-1 px-2 text-xs sm:text-sm md:text-lg">
                    <div className="flex flex-row gap-x-2 gap-y-2">
                        <a href={props.link} className="dark:text-themed-light text-lg sm:text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-roboto font-bold">{props.title}</a>
                        <div className="flex-shrink-0 flex flex-wrap justify-end px-2 sm:px-3 py-2 md:py-0 gap-x-2 gap-y-2">
                        {props.icons.map((icon, index) => (
                            <Image key={index} src={icon} alt="" className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-10 lg:w-10 xl:h-10 xl:w-10 dark:invert dark:text-themed-light" />
                        ))}
                        </div>
                    </div>
                    <p className="hidden md:block text-green-500 text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">{props.tags}</p>
                    <p className="hidden md:block dark:text-themed-light text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">{props.description}</p>
                </div>
            </div>
            <div className="flex flex-row items-end justify-center h-8 w-full overflow-visible">
                    {langTabs}
            </div>
        </div>
    )
};