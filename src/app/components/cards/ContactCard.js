import osk from "../../../images/osk.jpg";
import Image from 'next/image';

const download = () => {
    fetch("../../public/Nichiolas_Resume.pdf").then(response => {
      response.blob().then(blob => {
        let url = window.URL.createObjectURL(blob);
        let a = document.createElement('a');
        a.href = url;
        a.download = "Resume.pdf";
        a.click();
      });
    });
  };

const ContactCard = () => {
    return(
        <div className="flex flex-row h-80 mx-20 w-full items-center justify-center dark:bg-themed-dark outline outline-2 outline-neutral-400 dark:outline-themed-light rounded-xl overflow-hidden dark:bg-themed-dark pr-4">
                    <Image  src={osk} 
                            alt="A photo of me" 
                            className="object-contain border-r-2 border-neutral-400 dark:border-themed-light"
                            width={300}
                            height={400} 
                    />
                <div className="flex flex-col h-full w-1/2 ">
                    <Image
                        src="https://github-readme-stats.vercel.app/api/top-langs/?username=NDMcCa&hide_progress=false&theme=transparent&layout=compact&hide_border=true&title_color=88adbb&text_color=88adbb" 
                        alt="Language Stats" 
                        width={400}
                        height={300}
                        layout="responsive"
                        unoptimized={true}
                    />
                    <div className="flex flex-row h-full items-center justify-center space-x-4 border-t-2 border-neutral-400 dark:border-themed-light">
                        <a title="github/NDMcCa" href="https://github.com/NDMcCa" className="flex flex-row items-center justify-center space-x-2 hover:scale-105 transition ease-in-out duration-500">
                            <i className="fab fa-github text-black dark:text-themed-light text-xl sm:text-2xl md:text-3xl xl:text-5xl cursor-pointer transition-colors ease-in-out duration-500" />
                            {/* <p className="text-black dark:text-themed-light transition-colors ease-in-out duration-500 text-xs lg:text-xl">github/NDMcCa</p> */}
                        </a>
                        <a title="insta/nickmccamis67" href="https://www.instagram.com/nickmccamis67?igsh=MXBxOHc3cDU2ODduYQ==" className="flex flex-row items-center justify-center space-x-2 hover:scale-105 transition ease-in-out duration-500">
                            <i className="fab fa-instagram text-black dark:text-themed-light text-xl sm:text-2xl md:text-3xl xl:text-5xl cursor-pointer transition-colors ease-in-out duration-500" />
                            {/* <p className="text-black dark:text-themed-light transition-colors ease-in-out duration-500 text-xs lg:text-xl">insta/nickmccamis67</p> */}
                        </a>
                        <a title="in/nicholas-mccamis" href="https://www.linkedin.com/in/nicholas-mccamis/" className="flex flex-row items-center justify-center space-x-2 hover:scale-105 transition ease-in-out duration-500">
                            <i className="fab fa-linkedin text-black dark:text-themed-light text-xl sm:text-2xl md:text-3xl xl:text-5xl cursor-pointer transition-colors ease-in-out duration-500" />
                            {/* <p className="text-black dark:text-themed-light transition-colors ease-in-out duration-500 text-xs lg:text-xl">in/nicholas-mccamis</p> */}
                        </a>
                        <a title="Email Me" href="mailto:nicholas.m19@gmail.com" className="flex flex-row items-center justify-center space-x-2 hover:scale-105 transition ease-in-out duration-500">
                            <i className="fas fa-envelope text-black dark:text-themed-light text-xl sm:text-2xl md:text-3xl xl:text-5xl cursor-pointer transition-colors ease-in-out duration-500" />
                            {/* <p className="text-black dark:text-themed-light transition-colors ease-in-out duration-500 text-xs lg:text-xl">nicholas.m19@gmail.com</p> */}
                        </a>
                        <a title="Download Resume" onClick={download} className="flex flex-row items-center justify-center space-x-2 hover:scale-105 transition ease-in-out duration-500">
                            <i className="fas fa-file text-black dark:text-themed-light text-xl sm:text-2xl md:text-3xl xl:text-5xl cursor-pointer transition-colors ease-in-out duration-500" />
                            {/* <p className="text-black dark:text-themed-light transition-colors ease-in-out duration-500 text-xs lg:text-xl">nicholas.m19@gmail.com</p> */}
                        </a>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-y-4 h-full w-fit md:w-1/2 bg-neutral-100 dark:bg-themed-dark transition-colors ease-in-out duration-500 border-l-2 border-neutral-400 dark:border-themed-light">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-4xl text-black dark:text-themed-light transition-colors ease-in-out duration-500">
                        Nicholas McCamis
                    </h1>
                    <ul className="flex flex-col items-start justify-center gap-2 list-custom">
                        <li className="flex flex-row">
                        <p className="whitespace-nowrap text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-2xl text-green-700">
                            Software Developer
                        </p>
                        </li>
                        <li className="flex flex-row">
                        <p className="whitespace-nowrap text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-2xl text-green-700">
                            Designer
                        </p>
                        </li>
                        <li className="flex flex-row">
                        <p className="whitespace-nowrap text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-2xl text-green-700">
                            UofC CPSC Student
                        </p>
                        </li>
                        <li className="flex flex-row">
                        <p className="whitespace-nowrap text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-2xl text-green-700">
                            Tech Enthusiast
                        </p>
                        </li>
                    </ul>
                    </div>
                
                {/* <button onClick={download} className="rounded-b-2xl w-full h-12 md:h-16 md:text-lg lg:h-18 lg:text-xl xl:h-20 xl:text-2xl text-themed-light dark:themed-light hover:bg-neutral-600 dark:shadow-black transition ease-in-out duration-500 px-2">Resume</button> */}
            </div>
      
    )
}

export default ContactCard;