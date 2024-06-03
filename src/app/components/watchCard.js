import Image from "next/image";

function WatchCard (props){
    return (
        <div className="w-full h-10 bg-slate-700 rounded-lg flex items-center">
            <Image src={props.img} alt="none" width={20} height={20} />
        </div>
    )
}

export default WatchCard;