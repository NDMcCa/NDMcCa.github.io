import osk from "../../images/osk.jpg";
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
        <div className="flex flex-col md:flex-row items-center justify-center max-w-fit md:w-1/2 space-x-4 md:py-4 transition-colors ease-in-out duration-500 bg-neutral-100 dark:bg-neutral-950">
            <div className="flex flex-col items-center justify-center">
                <Image src={osk} alt="osk" className="rounded-t-2xl h-24 w-24 sm:h-32 sm:w-32 md:h-36 md:w-36 xl:h-48 xl:w-48 2xl:h-60 2xl:w-60" />
                <button onClick={download} className="rounded-b-2xl w-full h-12 md:h-16 md:text-lg lg:h-18 lg:text-xl xl:h-20 xl:text-2xl text-neutral-200 dark:text-black bg-neutral-900 dark:bg-neutral-300 hover:bg-neutral-600 dark:shadow-black transition ease-in-out duration-500 px-2">Resume</button>
            </div>
            <div className="hidden md:flex flex-col items-center justify-center space-y-4">
                <div className="flex flex-row md:flex-col md:items-start justify-left md:space-y-3 gap-x-2 pt-2 md:pt-0">
                    <a href="https://github.com/NDMcCa" className="flex flex-row items-center justify-center space-x-2 hover:scale-105 transition ease-in-out duration-500">
                        <i className="fab fa-github text-black dark:text-neutral-200 text-3xl sm:text-3xl md:text-5xl xl:text-6xl cursor-pointer transition-colors ease-in-out duration-500" />
                        <p className="text-black dark:text-neutral-200 transition-colors ease-in-out duration-500 text-xs lg:text-xl">github/NDMcCa</p>
                    </a>
                    <a href="https://www.instagram.com/nickmccamis67?igsh=MXBxOHc3cDU2ODduYQ==" className="flex flex-row items-center justify-center space-x-2 hover:scale-105 transition ease-in-out duration-500">
                        <i className="fab fa-instagram text-black dark:text-neutral-200 text-4xl sm:text-4xl md:text-5xl xl:text-6xl cursor-pointer transition-colors ease-in-out duration-500" />
                        <p className="text-black dark:text-neutral-200 transition-colors ease-in-out duration-500 text-xs lg:text-xl">insta/nickmccamis67</p>
                    </a>
                    <a href="https://www.linkedin.com/in/nicholas-mccamis/" className="flex flex-row items-center justify-center space-x-2 hover:scale-105 transition ease-in-out duration-500">
                        <i className="fab fa-linkedin text-black dark:text-neutral-200 text-4xl sm:text-4xl md:text-5xl xl:text-6xl cursor-pointer transition-colors ease-in-out duration-500" />
                        <p className="text-black dark:text-neutral-200 transition-colors ease-in-out duration-500 text-xs lg:text-xl">in/nicholas-mccamis</p>
                    </a>
                    <a href="mailto:nicholas.m19@gmail.com" className="flex flex-row items-center justify-center space-x-2 hover:scale-105 transition ease-in-out duration-500">
                        <i className="fas fa-envelope text-black dark:text-neutral-200 text-4xl sm:text-4xl md:text-5xl xl:text-6xl cursor-pointer transition-colors ease-in-out duration-500" />
                        <p className="text-black dark:text-neutral-200 transition-colors ease-in-out duration-500 text-xs lg:text-xl">nicholas.m19@gmail.com</p>
                    </a>
                </div>
            </div>
        </div>        
    )
}

export default ContactCard;