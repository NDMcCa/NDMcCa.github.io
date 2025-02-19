import Image from "next/image";
import BinClock from "../other/binClock.js";
import handleNewTab from "../other/handleNewTab.js";



function ClockCard (){ 

    return (
        <div onClick={() => handleNewTab("https://en.wikipedia.org/wiki/Binary_clock")} className="flex flex-row w-full h-fit shadow-md items-center overflow-hidden bg-neutral-800 dark:bg-themed-mid outline outline-2 outline-neutral-400 dark:outline-themed-light cursor-pointer
        rounded-lg transition ease-in-out duration-500 shadow-md shadow-neutral-400 dark:shadow-black">
            <BinClock />
            <div className="flex flex-col items-left justify-center gap-y-2 px-4">
                <h3  className="text-neutral-200 dark:text-themed-light text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-roboto font-bold  select-none">How it works</h3>
                <p className="text-neutral-200 dark:text-themed-light text-xs sm:text-xs md:text-sm lg:text-m xl:text-lg 2xl:text-xl">
                    A binary clock is a 24hr clock using a series of lights that count in binary.
                    Each digit in the time is represented column, in this case red for hours, green for minutes and yellow for seconds, with each light representing a power of 2. 
                </p>
            </div>
        </div>
    )
}

export default ClockCard;