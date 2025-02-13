import Image from "next/image";

export default function ProjectCard (props) {
    return (
        <a href={props.link} className="w-full min-h-10 sm:min-h-16 md:min-h-20 py-2 px-2 sm:px-4 md:px-8 bg-neutral-800 dark:bg-neutral-100 rounded-lg flex flex-col md:flex-row items-center hover:scale-105 transition ease-in-out duration-500 shadow-md shadow-neutral-400 dark:shadow-black" key={props.key}>
            <div className="flex-1 px-2 text-xs sm:text-sm md:text-lg">
                <h3 className="dark:text-black text-lg sm:text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">{props.title}</h3>
                <p className="hidden md:block text-green-500 text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">{props.tags}</p>
                <p className="hidden md:block dark:text-black text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">{props.description}</p>
            </div>
            <div className="flex-shrink-0 flex flex-wrap justify-end px-2 sm:px-3 py-2 md:py-0 gap-x-2 gap-y-2">
                {props.icons.map((icon, index) => (
                    <Image key={index} src={icon} alt="" className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 xl:h-14 xl:w-14 dark:invert-0 invert" />
                ))}
            </div>
        </a>
    )
}