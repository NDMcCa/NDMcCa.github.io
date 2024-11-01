import React from 'react';
import ReactDOM from 'react-dom';
import { motion } from 'framer-motion';

const Modal = ({ isShowing, hide }) => isShowing ? ReactDOM.createPortal(
    <motion.div
        className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
    >
        <motion.div
            className="flex flex-col justify-start bg-white dark:bg-neutral-900 p-4 rounded-lg w-3/4 lg:w-2/3 2xl:w-1/3 h-5/6 space-y-2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
        >
            <h2 className="text-2xl font-bold text-black dark:text-neutral-200">Changelog</h2>
            <div className="overflow-y-scroll w-full h-full max-h-2/3 px-1 py-2 md:px-4 2xl:px-4 2xl:py-4 text-black dark:text-neutral-200">
                <h3 className="text-sm md:text-lg 2xl:text-lg font-semibold mt-2 mb-1 text-black dark:text-neutral-200">06/02/2024: </h3>
                <p className="text-xs md:text-base 2xl:text-lg text-black dark:text-neutral-200">
                    Deployment of initial version of Next.js/Tailwind CSS site featuring responsive UI with light/dark mode. 
                    The webapp contains a personal description "Home" section, a "Dev Work" section showcasing some projects, a "Creations" section showing watch faces, and the "About section with a description of the site and its construction.
                </p>
                <h3 className="text-sm md:text-lg 2xl:text-lg font-semibold mt-2 mb-1 md:mt-4 text-black dark:text-neutral-200">06/03/2024: </h3>
                <p className="text-xs md:text-base 2xl:text-lg text-black dark:text-neutral-200">
                    Added moon icon for selecting dark mode to complement the sun icon that now is only for selecting light mode. Transitions for these modes are smooth and easy on the eyes. Fixed Next.js and Tailwind CSS icons to be more visible in dark mode (as they are .svg icons).  
                </p>
                <h3 className="text-sm md:text-lg 2xl:text-lg font-semibold mt-2 mb-1 md:mt-4 text-black dark:text-neutral-200">06/06/2024: </h3>
                <p className="text-xs md:text-base 2xl:text-lg text-black dark:text-neutral-200">
                    Added the easter egg binary clock to the bottom of the page that I have featured on previous iterations of my personal site. 
                    The clock is a fun way to show off my love for binary and programming and develpment of widgets and instruments that provide information to users like on a dashboard or in a cockpit. 
                    It currently may not conform to Tailwind CSS best practices and this may be explored at a later date.
                </p>
                <h3 className="text-sm md:text-lg 2xl:text-lg font-semibold mt-2 mb-1 md:mt-4 text-black dark:text-neutral-200">06/07/2024: </h3>
                <p className="text-xs md:text-base 2xl:text-lg text-black dark:text-neutral-200">
                    Added this very changelog modal. Added the scrolling skills tapes to the bottom of the "Home" section. Added downloadable resume to the "Home" section. Streamlined the text content of the "Home" section to be more concise.
                    Fixed issues with smaller 16:9 resolutions as before 16:9 worked best on 1440p (now you know the size of my monitor). Added hover animations to cards. Added an extra watch face card for something coming soon (hopefully). Organized import statements in page.js.
                </p>
                <h3 className="text-sm md:text-lg 2xl:text-lg font-semibold mt-2 mb-1 md:mt-4 text-black dark:text-neutral-200">10/31/2024: </h3>
                <p className="text-xs md:text-base 2xl:text-lg text-black dark:text-neutral-200">
                    Happy Halloween! Fixed the responsive design of the site to be more mobile-friendly where the sizing accounts for the space the browser window takes. Improved accessiblity of resume button, other icon buttons, and title in the "Home" section. Updated text content and sizing in "Home" and "Dev Work" sections. Changed the programming language and framework icons to their more accurate colour versions;
                    finding more of them in black or white that would be easily compatible with light/dark mode was going to get difficult. Fixed a bug with light/dark mode. Changes made to the Dev Work section to be more up to date. Attached updated resume to the "Home" section.
                </p>
            </div>
            <button
                className="bg-red-500 hover:bg-red-800 hover:scale-105 text-white font-bold py-2 px-4 rounded transition ease-in-out duration-500 w-1/2 self-center"
                onClick={hide}
            >
                Close
            </button>
        </motion.div>
    </motion.div>, document.body
) : null;

export default Modal;