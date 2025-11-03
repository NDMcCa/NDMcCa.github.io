import pfp from "../../../images/pfp.jpg";
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
        <div className="flex flex-row h-fit max-w-96 md:h-80 md:w-full md:max-w-full items-center justify-center bg-slate-300 dark:bg-themed-dark outline outline-2 outline-themed-navy dark:outline-themed-light rounded-xl overflow-hidden dark:bg-themed-mid shadow-md shadow-neutral-400 dark:shadow-black  ">
            <Image  src={pfp} 
                    alt="A photo of me" 
                    className="hidden lg:block object-contain border-r-2 border-themed-navy dark:border-themed-light"
                    width={300}
                    height={400} 
            />
            
            {/* Displayed only on small screens */}
            <div className="flex flex-col h-full w-full md:w-3/5">
                <div className="w-full h-fit flex flex-col items-center justify-center py-2 border-b-2 border-themed-navy dark:border-themed-light">
                    <h1 className="font-ubuntu text-2xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-5xl text-themed-navy dark:text-themed-light transition-colors ease-in-out duration-500">
                        Nicholas McCamis
                    </h1>
                </div>
                <div className="flex flex-col items-center justify-center gap-y-4 h-full w-full transition-colors ease-in-out duration-500 border-themed-navy">
                    <div className="md:hidden flex flex-col h-full w-full items-center justify-center py-4 border-b-2 dark:border-themed-light">
                        <h1 className="md:hidden font-ubuntu text-2xl sm:text-4xl text-themed-navy dark:text-themed-light transition-colors ease-in-out duration-500">
                            Who am I?
                        </h1>
                        <div className=" md:hidden flex flex-col h-full w-full items-center justify-center">
                            <ul className="md:hidden flex flex-col items-start justify-center gap-2 list-custom px-2 xl:px-0">
                                <li className="flex flex-row">
                                    <p className="font-ubuntu whitespace-nowrap text-sm sm:text-2xl text-green-700">
                                        Software Developer
                                    </p>
                                </li>
                                <li className="flex flex-row">
                                    <p className="font-ubuntu whitespace-nowrap text-sm sm:text-2xl text-green-700">
                                        Outdoorsman
                                    </p>
                                </li>
                                <li className="flex flex-row">
                                    <p className="font-ubuntu whitespace-nowrap text-sm sm:text-2xl text-green-700">
                                        UofC BSc CPSC Graduate
                                    </p>
                                </li>
                                <li className="flex flex-row">
                                    <p className="font-ubuntu whitespace-nowrap text-sm sm:text-2xl text-green-700">
                                        Tech Enthusiast
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <Image
                        src="https://github-readme-stats.vercel.app/api/top-langs/?username=NDMcCa&hide_progress=false&theme=transparent&layout=compact&hide_border=true&title_color=88adbb&text_color=88adbb" 
                        alt="Language Stats" 
                        width={400}
                        height={300}
                        layout="responsive"
                        unoptimized={true}
                    />

                    {/* Displayed only on small screens */}
                    <div className="md:hidden flex flex-row w-full h-fit py-4 items-center justify-center space-x-4 px-4 sm:space-x-8 border-t-2 border-themed-navy dark:border-themed-light">
                        <a title="github/NDMcCa" href="https://github.com/NDMcCa" className="flex flex-row items-center justify-center space-x-2 hover:scale-110 hover:opacity-50 transition ease-in-out duration-500">
                            <i className="fab fa-github text-themed-navy dark:text-themed-light text-3xl sm:text-5xl cursor-pointer transition-colors ease-in-out duration-500" />
                        </a>
                        <a title="insta/nickmccamis67" href="https://www.instagram.com/nickmccamis67?igsh=MXBxOHc3cDU2ODduYQ==" className="flex flex-row items-center justify-center space-x-2 hover:scale-110 hover:opacity-50 transition ease-in-out duration-500">
                            <i className="fab fa-instagram text-themed-navy dark:text-themed-light text-3xl sm:text-5xl cursor-pointer transition-colors ease-in-out duration-500" />
                        </a>
                        <a title="in/nicholas-mccamis" href="https://www.linkedin.com/in/nicholas-mccamis/" className="flex flex-row items-center justify-center space-x-2 hover:scale-110 hover:opacity-50 transition ease-in-out duration-500">
                            <i className="fab fa-linkedin text-themed-navy dark:text-themed-light text-3xl sm:text-5xl cursor-pointer transition-colors ease-in-out duration-500" />
                        </a>
                        <a title="Email Me" href="mailto:nicholas.m19@gmail.com" className="flex flex-row items-center justify-center space-x-2 hover:scale-110 hover:opacity-50 transition ease-in-out duration-500">
                            <i className="fas fa-envelope text-themed-navy dark:text-themed-light text-3xl sm:text-5xl cursor-pointer transition-colors ease-in-out duration-500" />
                        </a>
                        <a title="Download Resume" onClick={download} className="flex flex-row items-center justify-center space-x-2 hover:scale-110 hover:opacity-50 transition ease-in-out duration-500">
                            <i className="fas fa-file text-themed-navy dark:text-themed-light text-3xl sm:text-5xl cursor-pointer transition-colors ease-in-out duration-500" />
                        </a>
                    </div>
                </div>                                            
            </div>

            {/* Displayed only on larger screens */}
            <div className="hidden md:flex flex-col items-center justify-center gap-y-4 h-full w-fit md:w-1/2 transition-colors ease-in-out duration-500 border-l-2 border-themed-navy dark:border-themed-light">
                <h1 className="font-ubuntu text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-6xl 2xl:text-4xl text-themed-navy dark:text-themed-light transition-colors ease-in-out duration-500">
                    Who am I?
                </h1>
                <ul className="flex flex-col items-start justify-center gap-2 list-custom px-2 xl:px-0">
                    <li className="flex flex-row">
                        <p className="font-ubuntu whitespace-nowrap text-sm sm:text-xl lg:text-2xl text-themed-teal">
                            Software Developer
                        </p>
                    </li>
                    <li className="flex flex-row">
                        <p className="font-ubuntu whitespace-nowrap text-sm sm:text-xl lg:text-2xl text-themed-teal">
                            Outdoorsman
                        </p>
                    </li>
                    <li className="flex flex-row">
                        <p className="font-ubuntu whitespace-nowrap text-sm sm:text-xl lg:text-2xl text-themed-teal">
                            UofC BSc CPSC Graduate
                        </p>
                    </li>
                    <li className="flex flex-row">
                        <p className="font-ubuntu whitespace-nowrap text-sm sm:text-xl lg:text-2xl text-themed-teal">
                            Tech Enthusiast
                        </p>
                    </li>
                </ul>
                <div className="flex flex-row w-full h-fit py-4 items-center justify-center space-x-4 border-t-2 border-themed-navy dark:border-themed-light">
                    <a title="github/NDMcCa" href="https://github.com/NDMcCa" className="flex flex-row items-center justify-center space-x-2 hover:scale-110 hover:opacity-50 transition ease-in-out duration-500">
                        <i className="fab fa-github text-themed-navy dark:text-themed-light text-xl sm:text-2xl md:text-3xl xl:text-5xl cursor-pointer transition-colors ease-in-out duration-500" />
                    </a>
                    <a title="insta/nickmccamis67" href="https://www.instagram.com/nickmccamis67?igsh=MXBxOHc3cDU2ODduYQ==" className="flex flex-row items-center justify-center space-x-2 hover:scale-110 hover:opacity-50 transition ease-in-out duration-500">
                        <i className="fab fa-instagram text-themed-navy dark:text-themed-light text-xl sm:text-2xl md:text-3xl xl:text-5xl cursor-pointer transition-colors ease-in-out duration-500" />
                    </a>
                    <a title="in/nicholas-mccamis" href="https://www.linkedin.com/in/nicholas-mccamis/" className="flex flex-row items-center justify-center space-x-2 hover:scale-110 hover:opacity-50 transition ease-in-out duration-500">
                        <i className="fab fa-linkedin text-themed-navy dark:text-themed-light text-xl sm:text-2xl md:text-3xl xl:text-5xl cursor-pointer transition-colors ease-in-out duration-500" />
                    </a>
                    <a title="Email Me" href="mailto:nicholas.m19@gmail.com" className="flex flex-row items-center justify-center space-x-2 hover:scale-110 hover:opacity-50 transition ease-in-out duration-500">
                        <i className="fas fa-envelope text-themed-navy dark:text-themed-light text-xl sm:text-2xl md:text-3xl xl:text-5xl cursor-pointer transition-colors ease-in-out duration-500" />
                    </a>
                    <a title="Download Resume" onClick={download} className="flex flex-row items-center justify-center space-x-2 hover:scale-110 hover:opacity-50 transition ease-in-out duration-500">
                        <i className="fas fa-file text-themed-navy dark:text-themed-light text-xl sm:text-2xl md:text-3xl xl:text-5xl cursor-pointer transition-colors ease-in-out duration-500" />
                    </a>
                </div>
            </div>            
        </div>
    )
}

export default ContactCard;