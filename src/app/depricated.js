"use client";

import Image from "next/image";
import React, { useState } from "react";

// DO NOT LISTEN TO THE LINTER HERE vvvvvvv
import { Menu } from './components/menu/menu.js';
import BinClock from "./components/other/binClock.js";

import IconTape from "./components/IconTape.js";
import Modal from "./components/other/ChangelogModal.js";

import ProjectCard from './components/cards/projectCard.js';
import projects from './components/data/projects.js';

// import WatchCard from './components/watchCard.js';
// import watches from './components/data/watches.js';

import osk from "../images/osk.jpg";
import tw from "../../public/tailwind-css-svgrepo-com.svg";
import next from "../../public/next.svg";
import char from "./components/images/chargerwatch.png";
import st from "./components/images/stwatch.png";
import hdd from "./components/images/hddwatch.png";
import alt from "./components/images/altwatch.png";
import eadi from "./components/images/eadiwatch.png";

export default function Home() {

  const [showModal, setShowModal] = useState(false);

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

  const projectCards = projects.map((project, index) => {
    return <ProjectCard 
      title={project.title}
      icons={project.icons}
      link={project.link}
      key={index}
      />
  });

  const sections = [
    { id: 'Home', label: 'Home' },
    { id: 'Dev Work', label: 'Dev Work' },
    { id: 'Creations', label: 'Creations' },
    { id: 'About', label: 'About' }
  ];

  return (
    <main id="page" className="overflow-y-scroll max-lg:snap-y max-lg:snap-mandatory transition-colors ease-in-out duration-500 bg-neutral-100 dark:bg-neutral-950 h-screen w-screen" >
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" 
      integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" 
      crossOrigin="anonymous" referrerPolicy="no-referrer" />
      <div className="fixed top-0 flex items-center justify-center w-full bg-neutral-300 dark:bg-neutral-900 h-fit py-3 transition-colors ease-in-out duration-500 z-50">
        <Menu sections={sections} containerId="page" />
      </div>
      <div className="sm:px-6 md:px-8 lg:px-36 xl:px-56 2xl:w-fit 2xl:max-w-1800 2xl:mx-auto 2xl:px-0 relative z-0">
        <section className="snap-center max-lg:snap-always flex flex-col 2xl:flex-row items-center justify-start w-full h-screen transition-colors ease-in-out duration-500 bg-neutral-100 pt-20 md:pt-28 dark:bg-neutral-950 xl:mb-18">
          <div id='Home' className="flex flex-row 2xl:flex-col 2xl:items-center 2xl:justify-start 2xl:h-full 2xl:w-fit items-left justify-center w-full h-fit space-x-1 md:space-x-4 xl:space-x-28 2xl:space-x-0 2xl:space-y-4 md:pt-2 pb-4 xl:py-8 transition-colors ease-in-out duration-500
          bg-neutral-100 dark:bg-neutral-950">
            <Image src={osk} alt="osk" className="rounded-full h-24 w-24 sm:h-32 sm:w-32 md:h-44 md:w-44 xl:h-60 xl:w-60 2xl:h-70 2xl:w-70" />
            <div className="flex flex-col 2xl:w-full 2xl:space-y-10">
              <h1 className="text-3xl md:text-5xl 2xl:text-6xl text-black dark:text-neutral-200 m-auto text-center transition-colors ease-in-out duration-500 px-2">Nicholas McCamis</h1>
              <div className="flex flex-row items-center justify-center w-full h-fit space-x-3 md:space-x-6 xl:space-x-10 px-4">
                <a href="https://github.com/NDMcCa">
                  <i className="fab fa-github text-black dark:text-neutral-200 text-3xl sm:text-4xl md:text-5xl cursor-pointer transition-colors ease-in-out duration-500" />
                </a>
                <a href="https://www.instagram.com/nickmccamis67?igsh=MXBxOHc3cDU2ODduYQ==">
                  <i className="fab fa-instagram text-black dark:text-neutral-200 text-3xl sm:text-4xl md:text-5xl cursor-pointer transition-colors ease-in-out duration-500" /> {/* xl:text-7xl*/} 
                </a>
                <a href="https://www.linkedin.com/in/nicholas-mccamis/">
                  <i className="fab fa-linkedin text-black dark:text-neutral-200 text-3xl sm:text-4xl md:text-5xl cursor-pointer transition-colors ease-in-out duration-500" /> {/* xl:text-7xl*/}
                </a>
                <a href="mailto:nicholas.m19@gmail.com">
                  <i className="fas fa-envelope text-black dark:text-neutral-200 text-3xl sm:text-4xl md:text-5xl cursor-pointer transition-colors ease-in-out duration-500" /> {/* xl:text-7xl*/}
                </a>
              </div>
            </div>
            <button onClick={download} className="w-30 h-24 md:w-48 md:h-40 md:text-xl lg:w-52 lg:h-20 lg:text-2xl xl:w-72 xl:h-20 xl:text-3xl 
            text-neutral-200 dark:text-black bg-neutral-900 dark:bg-neutral-200 hover:bg-neutral-500 rounded-xl shadow-md shadow-neutral-600 dark:shadow-black hover:scale-105 transition ease-in-out duration-500 px-2">Resume</button>
          </div>
          {/* <hl className="w-0 h-0 2xl:w-1 2xl:h-4/5 2xl:mb-16 2xl:bg-neutral-950 2xl:dark:bg-neutral-400 transition-colors ease-in-out duration-500" /> */}
          <div className="flex flex-col items-center justify-start w-full h-fit bg-neutral-100 dark:bg-neutral-950 space-x-4 space-y-2 px-4 xl:py-8 py-1 2xl:self-start transition-colors ease-in-out duration-500">
            <h1 className="text-2xl sm:text-4xl md:text-5xl text-black dark:text-neutral-200 m-auto text-center transition-colors ease-in-out duration-500 pb-2">So Who Am I Anyway?</h1>
            <p className="text-xs sm:text-xl md:text-xl xl:text-lg 2xl:text-lg text-black dark:text-neutral-200 transition-colors ease-in-out duration-500">I am a aspiring software developer and a soon to be graduated 4th year Computer Science student at the University of Calgary. I have a strong interest in embedded systems programming and cyber security.
            </p>
            <p className="text-xs sm:text-xl md:text-xl xl:text-lg 2xl:text-lg text-black dark:text-neutral-200 transition-colors ease-in-out duration-500">My greatest passion is the outdoors; I love hiking, backpacking, bouldering, and anything else that's an excuse to get outside. I'm also an avid fan of aviation, aerospace, and anything with wings and as amateur sound engineer, I have contributed to audio in well-known flight sim projects. 
            </p>
            <IconTape />
          </div>
        </section>
        <section className="max-lg:snap-start max-lg:snap-always flex flex-col items-center w-full h-screen pt-24 md:pt-28 xl:pt-0 bg-neutral-100  dark:bg-neutral-950 transition-colors ease-in-out duration-500 xl:mb-2">
          <div id='Dev Work' className="flex flex-col items-center w-full h-fit bg-neutral-100  dark:bg-neutral-950 space-y-4 px-4 xl:px-10 transition-colors ease-in-out duration-500">
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-black dark:text-neutral-200 m-auto text-center transition-colors ease-in-out duration-500">Development Work</h1>
            <p className="text-xs sm:text-xl md:text-xl xl:text-3xl 2xl:text-2xl text-black dark:text-neutral-200 transition-colors ease-in-out duration-500">Below is a collection of some of my projects from micro projects to large projects developed on a team of 20 developers. This collection spans from front end React/JSX development to fully Object-Oriented back end Java code. 
              All projects are available for viewing in repositories. Click on the items below to see more.
            </p>
            {projectCards}
          </div>
        </section>
        <section className="max-lg:snap-start max-lg:snap-always flex flex-col items-center w-full h-screen pt-24 md:pt-28 xl:pt-0 bg-neutral-100 dark:bg-neutral-950 transition-colors ease-in-out duration-500">
          <div id='Creations' className="flex flex-col items-center w-full h-fit bg-neutral-100  dark:bg-neutral-950 space-y-4 lg:space-y-10 px-4 xl:px-10 transition-colors ease-in-out duration-500">
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-black dark:text-neutral-200 m-auto text-center">Creations</h1>
            <p className="text-xs sm:text-xl md:text-xl xl:text-3xl 2xl:text-2xl text-black dark:text-neutral-200">I have created a few watch faces for the Wear OS platform. I have always been interested in the idea of creating a watch face and I have been able to create a few that I am proud of.</p>
            <p className="text-xs sm:text-xl md:text-xl xl:text-3xl 2xl:text-2xl text-black dark:text-neutral-200">To date, I have only created watch faces using Watch Face Studio, although I am looking to expand my knowledge of Android Studio which would enable me to create more complex watch faces in the future.</p>
            <div className="snap-x snap-mandatory flex flex-row items-center justify-start w-64 md:w-60 lg:w-full lg:justify-center h-fit bg-neutral-100 dark:bg-neutral-950 py-4 overflow-x-auto transition-colors ease-in-out duration-500 gap-9">
              <Image src={char} alt="Charger Watch" className="h-64 w-64 lg:h-72 lg:w-72 rounded-3xl snap-center snap-always shadow-md shadow-neutral-600 dark:shadow-black" />
              <Image src={st} alt="Star Trek Watch" className="h-64 w-64 lg:h-72 lg:w-72 rounded-3xl snap-center snap-always shadow-md shadow-neutral-600 dark:shadow-black" />
              <Image src={hdd} alt="Hard Disk Watch" className="h-64 w-64 lg:h-72 lg:w-72 rounded-3xl snap-center snap-always shadow-md shadow-neutral-600 dark:shadow-black" />
              <Image src={alt} alt="Altimeter Watch" className="h-64 w-64 lg:h-72 lg:w-72 rounded-3xl snap-center snap-always shadow-md shadow-neutral-600 dark:shadow-black" />
              {/* <Image src={eadi} alt="Coming Soon" className="h-64 w-64 lg:h-72 lg:w-72 rounded-3xl snap-center snap-always shadow-md shadow-neutral-600 dark:shadow-black" /> */}
            </div>
          </div>
        </section>
        <section className="max-lg:snap-start max-lg:snap-always flex flex-col items-center w-full h-screen pt-24 md:pt-28 xl:pt-0 bg-neutral-100 dark:bg-neutral-950 transition-colors ease-in-out duration-500">
          <div className="flex flex-col items-center w-full h-fit bg-neutral-100  dark:bg-neutral-950 space-y-4 lg:space-y-10 px-4 xl:px-10 transition-colors ease-in-out duration-500">
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-black dark:text-neutral-200 m-auto text-center">About</h1>
            <p id='About' className="sm:text-xl md:text-2xl text-black dark:text-neutral-200 transition-colors ease-in-out duration-500">This site was build in React/Next.js and uses the Tailwind CSS and Framer Motion libraries and the Font Awesome library for some of the used icons.</p>
            <p className="sm:text-xl md:text-2xl text-black dark:text-neutral-200 transition-colors ease-in-out duration-500">It is very much still a work in progress at this time. Expect to see new functionality added in the future such as more detail, more pages, more features on the existing page, and code optimization.</p>
            <div className="flex flex-row items-center justify-center w-full h-fit space-x-4 px-4 py-4">
              <i className="fab fa-js text-black dark:text-neutral-200 text-3xl sm:text-4xl md:text-7xl cursor-pointer transition-colors ease-in-out duration-500" />
              <i className="fab fa-react text-black dark:text-neutral-200 text-3xl sm:text-4xl md:text-7xl cursor-pointer transition-colors ease-in-out duration-500" />
              <Image src={next} alt="next" className="h-8 w-10 sm:h-9 sm:w-14 md:h-16 md:w-20 dark:bg-neutral-200 dark:rounded-sm transition-colors ease-in-out duration-500 px-1" />
              <Image src={tw} alt="tailwind" className="h-8 w-8 sm:h-9 sm:w-9 md:h-16 md:w-16 dark:bg-neutral-200 dark:rounded-sm transition-colors ease-in-out duration-500" />
            </div>
            <button onClick={() => setShowModal(true)} className="flex flex-row items-center justify-center w-36 h-12 md:w-48 md:h-16 md:text-xl lg:w-52 lg:h-20 lg:text-2xl xl:w-56 xl:h-24 xl:text-3xl text-neutral-200 dark:text-black bg-neutral-900 dark:bg-neutral-200 hover:bg-neutral-500 rounded-xl shadow-md shadow-neutral-600 dark:shadow-black transition-colors ease-in-out duration-500">Changelog</button>
            <Modal hide={() => setShowModal(false)} isShowing={showModal} />
            <BinClock />
          </div>
        </section>
      </div>
    </main>
  );
}

