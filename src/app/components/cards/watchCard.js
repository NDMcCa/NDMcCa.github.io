import Image from "next/image";

function WatchCard (props){
    return (
        <div className="flex flex-row w-full h-fit shadow-md items-center overflow-hidden bg-neutral-800 dark:bg-themed-mid outline outline-2 outline-neutral-400 dark:outline-themed-light
        rounded-lg transition ease-in-out duration-500 shadow-md shadow-neutral-400 dark:shadow-black">
            <Image src={props.img} alt={props.title} width={150} height={150} className="block md:hidden"/>
            <Image src={props.img} alt={props.title} width={200} height={200} className="hidden md:block"/>
            <div className="flex flex-col items-left justify-center gap-y-2 px-2">
                <h3 className="text-neutral-200 dark:text-themed-light text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-roboto font-bold">{props.title}</h3>
                <p className="text-neutral-200 dark:text-themed-light text-xs sm:text-xs md:text-sm lg:text-m xl:text-lg 2xl:text-xl">{props.description}</p>
            </div>
        </div>
    )
}

export default WatchCard;