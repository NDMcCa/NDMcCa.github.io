
export default function ProjectCard (props){
    return (
    <a href={props.link} className="w-full h-10 sm:h-16 md:h-20 sm:px-4 md:px-8 bg-neutral-950 dark:bg-neutral-100 rounded-lg flex items-center hover:scale-105 transition ease-in-out duration-500 shadow-md shadow-neutral-400 dark:shadow-black" key={props.key}>
        <div className="w-3/4 px-2 text-sm sm:text-lg md:text-2xl">
            <h2 className ="dark:text-black">{props.title}</h2>
            <p  className ="dark:text-black">{props.tags}</p>
        </div>
        <div className="w-1/4 flex justify-end px-3">
            <i className={props.icons + " dark:text-black transition-colors ease-in-out duration-500 text-lg sm:text-3xl md:text-5xl"} ></i>    
        </div>
    </a>
    )
}
