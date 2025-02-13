import Image from "next/image";

function WatchCard (props){
    return (
        <div className="flex flex-row w-full h-fit bg-neutral-800 dark:bg-stone-200 transition ease-in-out duration-500 shadow-md rounded-2xl items-center overflow-hidden">
            <Image src={props.img} alt={props.title} width={200} height={200} />
            <div className="flex flex-col items-left justify-center gap-y-2 px-2">
                <h3 className="text-neutral-200 dark:text-black text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">{props.title}</h3>
                <p className="text-neutral-200 dark:text-black text-xs sm:text-xs md:text-sm lg:text-m xl:text-lg 2xl:text-xl">{props.description}</p>
            </div>
        </div>
    )
}

export default WatchCard;