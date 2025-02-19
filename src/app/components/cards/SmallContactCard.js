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
        <div className="md:hidden flex flex-col h-fit mx-10 w-full items-center justify-center dark:bg-themed-dark outline outline-2 outline-neutral-400 dark:outline-themed-light rounded-xl overflow-hidden dark:bg-themed-mid">
            <div className="w-full h-fit flex flex-col items-center justify-center py-2 border-b-2 border-neutral-400 dark:border-themed-light">
                <h1 className="font-ubuntu text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-5xl text-black dark:text-themed-light transition-colors ease-in-out duration-500">
                    Nicholas McCamis
                </h1>
            </div>
            <div className="md:hidden flex flex-row h-fit w-full items-center justify-center">
                <div className="flex flex-col h-full w-full items-center justify-center">
                    <Image  src={osk} 
                            alt="A photo of me" 
                            className="object-contain border-b-2 border-neutral-400 dark:border-themed-light"
                            width={175}
                            height={225} 
                    />
                    <Image
                        src="https://github-readme-stats.vercel.app/api/top-langs/?username=NDMcCa&hide_progress=false&theme=transparent&layout=compact&hide_border=true&title_color=88adbb&text_color=88adbb" 
                        alt="Language Stats" 
                        width={400}
                        height={300}
                        layout="responsive"
                        unoptimized={true}
                    />
                </div>
                <div className="flex flex-col items-center justify-center gap-y-4 h-full w-fit transition-colors ease-in-out duration-500 border-l-2 border-neutral-400 dark:border-themed-light">
                    <h1 className="font-ubuntu text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-4xl text-black dark:text-themed-light transition-colors ease-in-out duration-500">
                    Who am I?
                    </h1>
                    <div className="flex flex-col items-start justify-center gap-2 px-2 list-custom">
                        <p className="font-ubuntu whitespace-nowrap text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-2xl text-green-700">
                            Software Developer
                        </p>
                        <p className="font-ubuntu whitespace-nowrap text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-2xl text-green-700">
                            Designer
                        </p>
                        <p className="font-ubuntu whitespace-nowrap text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-2xl text-green-700">
                            UofC CPSC Student
                        </p>
                        <p className="font-ubuntu whitespace-nowrap text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-2xl text-green-700">
                            Tech Enthusiast
                        </p>
                    </div>
                    <div className="flex flex-row w-full h-fit py-4 items-center justify-center space-x-4 border-t-2 border-neutral-400 dark:border-themed-light">
                        <a title="github/NDMcCa" href="https://github.com/NDMcCa" className="flex flex-row items-center justify-center space-x-2 hover:scale-110 hover:opacity-50 transition ease-in-out duration-500">
                            <i className="fab fa-github text-black dark:text-themed-light text-xl sm:text-2xl md:text-3xl xl:text-5xl cursor-pointer transition-colors ease-in-out duration-500" />
                            {/* <p className="text-black dark:text-themed-light transition-colors ease-in-out duration-500 text-xs lg:text-xl">github/NDMcCa</p> */}
                        </a>
                        <a title="insta/nickmccamis67" href="https://www.instagram.com/nickmccamis67?igsh=MXBxOHc3cDU2ODduYQ==" className="flex flex-row items-center justify-center space-x-2 hover:scale-110 hover:opacity-50 transition ease-in-out duration-500">
                            <i className="fab fa-instagram text-black dark:text-themed-light text-xl sm:text-2xl md:text-3xl xl:text-5xl cursor-pointer transition-colors ease-in-out duration-500" />
                            {/* <p className="text-black dark:text-themed-light transition-colors ease-in-out duration-500 text-xs lg:text-xl">insta/nickmccamis67</p> */}
                        </a>
                        <a title="in/nicholas-mccamis" href="https://www.linkedin.com/in/nicholas-mccamis/" className="flex flex-row items-center justify-center space-x-2 hover:scale-110 hover:opacity-50 transition ease-in-out duration-500">
                            <i className="fab fa-linkedin text-black dark:text-themed-light text-xl sm:text-2xl md:text-3xl xl:text-5xl cursor-pointer transition-colors ease-in-out duration-500" />
                            {/* <p className="text-black dark:text-themed-light transition-colors ease-in-out duration-500 text-xs lg:text-xl">in/nicholas-mccamis</p> */}
                        </a>
                    </div>
                    <div className="flex flex-row w-full h-fit items-center justify-center space-x-4">
                        <a title="Email Me" href="mailto:nicholas.m19@gmail.com" className="flex flex-row items-center justify-center space-x-2 hover:scale-110 hover:opacity-50 transition ease-in-out duration-500">
                            <i className="fas fa-envelope text-black dark:text-themed-light text-xl sm:text-2xl md:text-3xl xl:text-5xl cursor-pointer transition-colors ease-in-out duration-500" />
                            {/* <p className="text-black dark:text-themed-light transition-colors ease-in-out duration-500 text-xs lg:text-xl">nicholas.m19@gmail.com</p> */}
                        </a>
                        <a title="Download Resume" onClick={download} className="flex flex-row items-center justify-center space-x-2 hover:scale-110 hover:opacity-50 transition ease-in-out duration-500">
                            <i className="fas fa-file text-black dark:text-themed-light text-xl sm:text-2xl md:text-3xl xl:text-5xl cursor-pointer transition-colors ease-in-out duration-500" />
                            {/* <p className="text-black dark:text-themed-light transition-colors ease-in-out duration-500 text-xs lg:text-xl">nicholas.m19@gmail.com</p> */}
                        </a>
                    </div>
                </div>    
            </div>
        </div>  
    )
}

export default ContactCard;