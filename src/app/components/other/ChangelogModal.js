import React from 'react';
import ReactDOM from 'react-dom';
import { motion } from 'framer-motion';

const Modal = ({ isShowing, hide }) => isShowing ? ReactDOM.createPortal(
    <motion.div
        className="fixed inset-0 z-50 flex justify-center items-center bg-black/30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
    >
        <motion.div
            className="flex flex-col justify-start bg-white dark:bg-themed-dark/40 outline outline-2 outline-neutral-400 dark:outline-themed-light p-4 rounded-lg w-3/4 lg:w-2/3 2xl:w-1/3 h-5/6 space-y-2 backdrop-blur-sm"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
        >
            <h2 className="text-3xl font-bold font-roboto text-black dark:text-themed-light ">Changelog</h2>
            <div className="overflow-y-scroll w-full h-full max-h-2/3 px-1 py-2 md:px-4 2xl:px-4 2xl:py-4 text-black dark:text-themed-light border-t-2 border-themed-light">
                <h3 className="text-sm md:text-lg 2xl:text-lg font-semibold mt-2 mb-1 text-black dark:text-themed-light">06/02/2024: </h3>
                <p className="text-xs md:text-base 2xl:text-lg text-black dark:text-themed-light">
                    Deployment of initial version of Next.js/Tailwind CSS site featuring responsive UI with light/dark mode. 
                    The webapp contains a personal description "Home" section, a "Dev Work" section showcasing some projects, a "Creations" section showing watch faces, and the "About section with a description of the site and its construction.
                </p>
                <h3 className="text-sm md:text-lg 2xl:text-lg font-semibold mt-2 mb-1 md:mt-4 text-black dark:text-themed-light">06/03/2024: </h3>
                <p className="text-xs md:text-base 2xl:text-lg text-black dark:text-themed-light">
                    Added moon icon for selecting dark mode to complement the sun icon that now is only for selecting light mode. Transitions for these modes are smooth and easy on the eyes. Fixed Next.js and Tailwind CSS icons to be more visible in dark mode (as they are .svg icons).  
                </p>
                <h3 className="text-sm md:text-lg 2xl:text-lg font-semibold mt-2 mb-1 md:mt-4 text-black dark:text-themed-light">06/06/2024: </h3>
                <p className="text-xs md:text-base 2xl:text-lg text-black dark:text-themed-light">
                    Added the easter egg binary clock to the bottom of the page that I have featured on previous iterations of my personal site. 
                    The clock is a fun way to show off my love for binary and programming and develpment of widgets and instruments that provide information to users like on a dashboard or in a cockpit. 
                    It currently may not conform to Tailwind CSS best practices and this may be explored at a later date.
                </p>
                <h3 className="text-sm md:text-lg 2xl:text-lg font-semibold mt-2 mb-1 md:mt-4 text-black dark:text-themed-light">06/07/2024: </h3>
                <p className="text-xs md:text-base 2xl:text-lg text-black dark:text-themed-light">
                    Added this very changelog modal. Added the scrolling skills tapes to the bottom of the "Home" section. Added downloadable resume to the "Home" section. Streamlined the text content of the "Home" section to be more concise.
                    Fixed issues with smaller 16:9 resolutions as before 16:9 worked best on 1440p (now you know the size of my monitor). Added hover animations to cards. Added an extra watch face card for something coming soon (hopefully). Organized import statements in page.js.
                </p>
                <h3 className="text-sm md:text-lg 2xl:text-lg font-semibold mt-2 mb-1 md:mt-4 text-black dark:text-themed-light">10/31/2024: </h3>
                <p className="text-xs md:text-base 2xl:text-lg text-black dark:text-themed-light">
                    Happy Halloween! Fixed the responsive design of the site to be more mobile-friendly where the sizing accounts for the space the browser window takes. Improved accessiblity of resume button, other icon buttons, and title in the "Home" section. Updated text content and sizing in "Home" and "Dev Work" sections. Changed the programming language and framework icons to their more accurate colour versions;
                    finding more of them in black or white that would be easily compatible with light/dark mode was going to get difficult. Fixed a bug with light/dark mode. Changes made to the Dev Work section to be more up to date. Attached updated resume to the "Home" section.
                </p>
                <h3 className="text-sm md:text-lg 2xl:text-lg font-semibold mt-2 mb-1 md:mt-4 text-black dark:text-themed-light">11/1/2024: </h3>
                <p className="text-xs md:text-base 2xl:text-lg text-black dark:text-themed-light">
                    Finally figured out why the UI was broken on 1080p laptop screens: scaling! I now understand why Tailwind set their 2xl breakpoint to 1536px. I have adjusted for that resolution now and have added a breakpoint for true 1080p+ for later use.
                </p>
                <h3 className="text-sm md:text-lg 2xl:text-lg font-semibold mt-2 mb-1 md:mt-4 text-black dark:text-themed-light">11/20/2024: </h3>
                <p className="text-xs md:text-base 2xl:text-lg text-black dark:text-themed-light">
                    Added a new watch face: altimeter watch face.
                </p>
                <h3 className="text-sm md:text-lg 2xl:text-lg font-semibold mt-2 mb-1 md:mt-4 text-black dark:text-themed-light">2/12/2025: </h3>
                <p className="text-xs md:text-base 2xl:text-lg text-black dark:text-themed-light">
                    Wow where to begin, almost everything has been changed into a new format. The site's tech stack remains the same, although I considered no longer using Tailwind as I have gotten better at vanilla CSS and realize how hard Tailwind class names can be to maintain.
                    The new style looks a bit cleaner and is more engaging while showing more detail and information than before. Expect more changes in the future as I continue to learn new things and improve my skills and change my mind on some of the styling.
                </p>
                <h3 className="text-sm md:text-lg 2xl:text-lg font-semibold mt-2 mb-1 md:mt-4 text-black dark:text-themed-light">2/19/2025: </h3>
                <p className="text-xs md:text-base 2xl:text-lg text-black dark:text-themed-light">
                    All of the styling with the exception of the nav bar at the top has been overhauled. The project cards have a language breakdown now included 
                    and a much more readable format. The home section is now mostly a componenet with a "contact card" which is sort of like a business card that looks a lot better than what was there before.
                    The binary clock now has a new home and the watch faces have a much better display as well. Light mode has temporarily been disabled until a new color palatte for it is considered.
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