"use client";

import Image from "next/image";
import React, { useState } from "react";

import { Menu } from './components/menu/menu.js';
import Modal from "./components/other/ChangelogModal.js";
import ProjectCard from './components/cards/projectCard.js';
import projects from './components/data/projects.json';
import watches from './components/data/watches.json';
import WatchCard from './components/cards/watchCard.js';
import ContactCard from './components/cards/ContactCard.js';
import ClockCard from './components/cards/clockCard.js';

import python from "../../public/python-5-logo-svg-vector.svg";
import java from "../../public/java-14-logo-svg-vector.svg";
import js from "../../public/javascript.svg";
import ts from "../../public/typescript.svg";
import cpp from "../../public/cplusplus.svg";
import c from "../../public/C_Programming_Language.svg";
import csharp from "../../public/icons8-c-sharp-logo.svg";
import react from "../../public/react.svg";
import tw from "../../public/tailwind-css-svgrepo-com.svg";
import next from "../../public/next.svg";
import svelte from "../../public/svelte.svg";
import mysql from "../../public/mysql.svg";
import docker from "../../public/docker.svg";
import golang from "../../public/golang.svg";
import tensorflow from "../../public/tensorflow-svgrepo-com.svg";
import networkx from "../../public/NetworkX.svg";
export default function Home() {

  const [showModal, setShowModal] = useState(false);
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const iconMap = {
    "python": python,
    "java": java,
    "javascript": js,
    "typescript": ts,
    "cplusplus": cpp,
    "c": c,
    "csharp": csharp,
    "react": react,
    "tailwind": tw,
    "next": next,
    "svelte": svelte,
    "mysql": mysql,
    "docker": docker,
    "golang": golang,
    "tensorflow": tensorflow,
    "networkx": networkx
  };

  const projectCards = projects.map((project, index) => {
    const icons = project.icons.split(' ').map(iconName => iconMap[iconName.toLowerCase()]);
    const langs = project.langs.split(' ').map(lang => lang);
    const percentages = project.percentages.split(' ').map(percentage => parseInt(percentage));
    const colors = project.colors.split(' ');
    return <ProjectCard 
      title={project.title}
      tags={project.tags}
      description={project.description}
      icons={icons}
      languages={langs}
      percentages={percentages}
      colors={colors}
      link={project.link}
      key={index}
    />
  });

  const watchCards = watches.map((watch, index) => {
    return <WatchCard 
      key={index}
      img={watch.img}
      title={watch.title}
      description={watch.description}
    />
  });

  const sections = [
    { id: 'Home', label: 'Home' },
    { id: 'Dev Work', label: 'Dev Work' },
    { id: 'Creations', label: 'Creations' },
    { id: 'About', label: 'About' }
  ];

  // I have used a lot of comments in the following render of the main page because honestly Tailwind CSS makes it hard to read the JSX
  return (
    <main id="page" className="overflow-y-scroll max-lg:snap-y max-lg:snap-mandatory bg-neutral-200 dark:bg-themed-dark transition-colors ease-in-out duration-500 h-screen w-screen" >
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" 
      integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" 
      crossOrigin="anonymous" referrerPolicy="no-referrer" />
      <div className="fixed top-0 flex items-center justify-center w-full bg-neutral-950 dark:bg-neutral-800 h-fit py-3 transition-colors ease-in-out duration-500 z-50">
        <Menu sections={sections} containerId="page" />
      </div>
      <div className="flex flex-col items-center justify-center h-fit w-screen pt-20">


        {/* Home Section */}
        <section id="Home" className="flex flex-col px-10 xl:px-20 items-center justify-center min-h-screen h-fit max-w-screen-xl bg-neutral-200 dark:bg-themed-dark transition-colors ease-in-out duration-500">

          {/* Divide part of this into rows */}
          <div className="flex flex-row items-center justify-center h-fit w-full bg-none pt-4 px-2 gap-x-6 md:gap-x-0 md:px-10 xl:px-0">

            {/* Contact card */}
            <ContactCard />
            {/* <SmallContactCard /> */}

          </div>


          {/* Info */}
          <div className="w-full">

            {/* About */}        
            <p className="pt-10 text-xs sm:text-sm md:text-m lg:text-lg xl:text-xl 2xl:text-2xl text-themed-navy dark:text-themed-light transition-colors ease-in-out duration-500">
              I am a software developer, designer, tech enthusiast, and graduate of BSc Computer Science at the University of Calgary, class of 2025. I have a passion for creating and learning new things. I am always looking for new opportunities to grow and expand my skillset.
            </p>

            {/* Dev Tech */}
            <h2 className="pt-10 pb-2 text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-themed-navy dark:text-themed-light transition-colors ease-in-out duration-500">
              Developer Technologies
            </h2>
            <p className="text-xs sm:text-sm md:text-m lg:text-lg xl:text-xl 2xl:text-2xl text-themed-navy dark:text-themed-light transition-colors ease-in-out duration-500">
              I have experience with a variety of both high and low level languages and technologies. The following are all languages, frameworks, and technologies that I have used and am most comfortable with.
            </p> 

            {/* Icons */}
            <div className="flex flex-col items-center justify-center gap-y-10 py-8">
              <div className="flex flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12">
                <div className="relative flex flex-col items-center">
                  <Image src={python} alt="Python 3" className="h-8 w-8 sm:h-16 sm:w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 filter transition-transform duration-300 hover:scale-110" onMouseEnter={() => setHoveredIcon('Python 3')} onMouseLeave={() => setHoveredIcon(null)} />
                  {hoveredIcon === 'Python 3' && <span className="absolute top-full mt-2 text-sm text-themed-navy dark:text-themed-light font-ubuntu">{hoveredIcon}</span>}
                </div>
                <div className="relative flex flex-col items-center">
                  <Image src={java} alt="Java" className="h-8 w-8 sm:h-16 sm:w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 filter transition-transform duration-300 hover:scale-110" onMouseEnter={() => setHoveredIcon('Java')} onMouseLeave={() => setHoveredIcon(null)} />
                  {hoveredIcon === 'Java' && <span className="absolute top-full mt-2 text-sm text-themed-navy dark:text-themed-light font-ubuntu">{hoveredIcon}</span>}
                </div>
                <div className="relative flex flex-col items-center">
                  <Image src={js} alt="JavaScript" className="h-8 w-8 sm:h-16 sm:w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 filter transition-transform duration-300 hover:scale-110" onMouseEnter={() => setHoveredIcon('JavaScript')} onMouseLeave={() => setHoveredIcon(null)} />
                  {hoveredIcon === 'JavaScript' && <span className="absolute top-full mt-2 text-sm text-themed-navy dark:text-themed-light font-ubuntu">{hoveredIcon}</span>}
                </div>
                <div className="relative flex flex-col items-center">
                  <Image src={ts} alt="TypeScript" className="h-8 w-8 sm:h-16 sm:w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 filter transition-transform duration-300 hover:scale-110" onMouseEnter={() => setHoveredIcon('TypeScript')} onMouseLeave={() => setHoveredIcon(null)} />
                  {hoveredIcon === 'TypeScript' && <span className="absolute top-full mt-2 text-sm text-themed-navy dark:text-themed-light font-ubuntu">{hoveredIcon}</span>}
                </div>
                <div className="relative flex flex-col items-center">
                  <Image src={cpp} alt="C++" className="h-8 w-8 sm:h-16 sm:w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 filter transition-transform duration-300 hover:scale-110" onMouseEnter={() => setHoveredIcon('C++')} onMouseLeave={() => setHoveredIcon(null)} />
                  {hoveredIcon === 'C++' && <span className="absolute top-full mt-2 text-sm text-themed-navy dark:text-themed-light font-ubuntu">{hoveredIcon}</span>}
                </div>
                <div className="relative flex flex-col items-center">
                  <Image src={csharp} alt="C#" className="h-8 w-8 sm:h-16 sm:w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 filter transition-transform duration-300 hover:scale-110" onMouseEnter={() => setHoveredIcon('C#')} onMouseLeave={() => setHoveredIcon(null)} />
                  {hoveredIcon === 'C#' && <span className="absolute top-full mt-2 text-sm text-themed-navy dark:text-themed-light font-ubuntu">{hoveredIcon}</span>}
                </div>
              </div>
              <div className="flex flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12">
                <div className="relative flex flex-col items-center">
                  <Image src={react} alt="React" className="h-8 w-8 sm:h-16 sm:w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 filter transition-transform duration-300 hover:scale-110" onMouseEnter={() => setHoveredIcon('React')} onMouseLeave={() => setHoveredIcon(null)} />
                  {hoveredIcon === 'React' && <span className="absolute top-full mt-2 text-sm text-themed-navy dark:text-themed-light font-ubuntu">{hoveredIcon}</span>}
                </div>
                <div className="relative flex flex-col items-center">
                  <Image src={next} alt="Next.js" className="h-8 w-8 sm:h-16 sm:w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 filter transition-transform duration-300 hover:scale-110" onMouseEnter={() => setHoveredIcon('Next.js')} onMouseLeave={() => setHoveredIcon(null)} />
                  {hoveredIcon === 'Next.js' && <span className="absolute top-full mt-2 text-sm text-themed-navy dark:text-themed-light font-ubuntu">{hoveredIcon}</span>}
                </div>
                <div className="relative flex flex-col items-center">
                  <Image src={svelte} alt="Svelte" className="h-8 w-8 sm:h-16 sm:w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 filter transition-transform duration-300 hover:scale-110" onMouseEnter={() => setHoveredIcon('Svelte')} onMouseLeave={() => setHoveredIcon(null)} />
                  {hoveredIcon === 'Svelte' && <span className="absolute top-full mt-2 text-sm text-themed-navy dark:text-themed-light font-ubuntu">{hoveredIcon}</span>}
                </div>
                <div className="relative flex flex-col items-center">
                  <Image src={tw} alt="Tailwind CSS" className="h-8 w-8 sm:h-16 sm:w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 filter transition-transform duration-300 hover:scale-110" onMouseEnter={() => setHoveredIcon('Tailwind CSS')} onMouseLeave={() => setHoveredIcon(null)} />
                  {hoveredIcon === 'Tailwind CSS' && <span className="absolute top-full mt-2 text-sm text-themed-navy dark:text-themed-light font-ubuntu">{hoveredIcon}</span>}
                </div>
                <div className="relative flex flex-col items-center">
                  <Image src={docker} alt="Docker" className="h-8 w-8 sm:h-16 sm:w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 filter transition-transform duration-300 hover:scale-110" onMouseEnter={() => setHoveredIcon('Docker')} onMouseLeave={() => setHoveredIcon(null)} />
                  {hoveredIcon === 'Docker' && <span className="absolute top-full mt-2 text-sm text-themed-navy dark:text-themed-light font-ubuntu">{hoveredIcon}</span>}
                </div>
                <div className="relative flex flex-col items-center">
                  <Image src={mysql} alt="MySQL" className="h-8 w-8 sm:h-16 sm:w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 filter transition-transform duration-300 hover:scale-110" onMouseEnter={() => setHoveredIcon('MySQL')} onMouseLeave={() => setHoveredIcon(null)} />
                  {hoveredIcon === 'MySQL' && <span className="absolute top-full mt-2 text-sm text-themed-navy dark:text-themed-light font-ubuntu">{hoveredIcon}</span>}
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Dev Work Section */}
        <section id="Dev Work" className="px-10 pb-2 md:px-20 gap-y-5 flex flex-col items-start justify-center min-h-screen max-w-screen-xl bg-neutral-200 dark:bg-themed-dark transition-colors ease-in-out duration-500">
          <h2 className="pt-10 md:pb-2 text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-themed-navy dark:text-themed-light transition-colors ease-in-out duration-500">
              Developer Work
          </h2>
          <p className="pb-10 text-xs sm:text-xl md:text-xl xl:text-3xl 2xl:text-2xl text-themed-navy dark:text-themed-light transition-colors ease-in-out duration-500">Below is a collection of some of my projects from micro projects to large projects developed on a team of 20 developers. This collection spans from front end React/JSX development to fully Object-Oriented back end Java code. 
            All projects are available for viewing in repositories. Click on the items below to see more.
          </p>
          {projectCards}
        </section>


        {/* Creations Section */}
        <section id='Creations' className="px-10 md:px-20 flex flex-col items-start max-w-screen-xl bg-neutral-200 dark:bg-themed-dark transition-colors ease-in-out duration-500 py-8 mb-32">
          <h2 className="pt-10 pb-2 text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-themed-navy dark:text-themed-light transition-colors ease-in-out duration-500">Creations</h2>
          <h3 className="pt-6 pb-2 text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-themed-navy dark:text-themed-light transition-colors ease-in-out duration-500">WearOS Watch Faces</h3>
          <p className="text-xs sm:text-xl md:text-xl xl:text-3xl 2xl:text-2xl text-themed-navy dark:text-themed-light mb-4">I have created a few watch faces for the Wear OS platform. I have always been interested in the idea of creating a watch face and I have been able to create a few that I am proud of.</p>
          <p className="text-xs sm:text-xl md:text-xl xl:text-3xl 2xl:text-2xl text-themed-navy dark:text-themed-light mb-4">To date, I have only created watch faces using Watch Face Studio, although I am looking to expand my knowledge of Android Studio which would enable me to create more complex watch faces in the future.</p>
          <div className="pt-8 gap-y-5 flex flex-col items-center justify-center max-w-screen-xl bg-neutral-200 dark:bg-themed-dark transition-colors ease-in-out duration-500">
            {watchCards}
          </div>
          <h3 className="pt-10 pb-2 text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-themed-navy dark:text-themed-light transition-colors ease-in-out duration-500">Binary Clock</h3>
          <p className="text-xs sm:text-xl md:text-xl xl:text-3xl 2xl:text-2xl text-themed-navy dark:text-themed-light mb-4">
            Below is a binary clock component I made a while ago purely for fun and to play around with JavaScript's abilities with the DOM. I always have though binary clocks are interesting and as a lover
            of low-level programming, a binary themed way of telling time makes me geek out. Click anywhere on the card to learn more about binary clocks. 
          </p>
          <ClockCard />
        </section>


        {/* About Site Section */}
        <section id='About' className="px-10 md:px-20 gap-y-4 flex flex-col items-start max-w-screen-xl bg-neutral-200 dark:bg-themed-dark transition-colors ease-in-out duration-500 py-8">
          <h2 className="pt-10 pb-2 text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-themed-navy dark:text-themed-light transition-colors ease-in-out duration-500">About this Site</h2>
          <h3 className="pb-2 text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-themed-navy dark:text-themed-light transition-colors ease-in-out duration-500">The Tech</h3>
          <p className="text-sm sm:text-xl md:text-2xl text-themed-navy dark:text-themed-light transition-colors ease-in-out duration-500">
            This site was build in React/Next.js and uses the Tailwind CSS to provide a responsive UI. The site is hosted on GitHub Pages and deployed through a GitHub Actions CI/CD Pipeline; it is subject to the limitations of that platform.
            </p>
          <p className="text-sm sm:text-xl md:text-2xl text-themed-navy dark:text-themed-light transition-colors ease-in-out duration-500">
            It uses the Framer Motion library for the "sliding pill" effect on the menu bar at the top of the screen, and some of the other animations used.
          </p>
          <h3 className="pt-10 pb-2 text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-themed-navy dark:text-themed-light transition-colors ease-in-out duration-500">The Idea</h3>
          <p className="text-sm sm:text-xl md:text-2xl text-themed-navy dark:text-themed-light transition-colors ease-in-out duration-500">
            It is subject to change in content and format at any time as updates to information and content may arise and I come up with different ideas. 
            Expect to see new functionality added in the future such as more detail, more pages, more features on the existing page, and code optimization.
            This site is designed to demonstrate my understanding of web development and responsive UI design principles and to showcase my projects and creations.
          </p>
          <p className="text-sm sm:text-xl md:text-2xl text-themed-navy dark:text-themed-light transition-colors ease-in-out duration-500">
            The site is intended to be simple, clean, with a little bit of fun flair in the design in some places. No template was used for this site, it was built from scratch.
          </p>
          <div className="flex flex-row items-center justify-center w-full h-fit space-x-4 px-4 py-4">
            <Image src={js}z alt="JavaScript" className="h-8 w-10 sm:h-9 sm:w-14 md:h-16 md:w-20 dark:rounded-sm transition-colors ease-in-out duration-500 px-1 invert dark:invert-0" />
            <Image src={react} alt="tailwind" className="h-8 w-8 sm:h-9 sm:w-9 md:h-16 md:w-16 dark:rounded-sm transition-colors ease-in-out duration-500 invert dark:invert-0" />
            <Image src={next} alt="next" className="h-8 w-8 sm:h-9 sm:w-9 md:h-16 md:w-16 dark:rounded-sm transition-colors ease-in-out duration-500 px-1 invert dark:invert-0" />
            <Image src={tw} alt="tailwind" className="h-8 w-8 sm:h-9 sm:w-9 md:h-16 md:w-16 dark:rounded-sm transition-colors ease-in-out duration-500 invert dark:invert-0"/>
          </div>
          <div className="flex flex-row items-center justify-center w-full h-fit space-x-4 px-4 py-4">
            <button onClick={() => setShowModal(true)} className="flex flex-row items-center justify-center w-36 h-12 md:w-48 md:h-16 md:text-xl lg:w-52 lg:h-20 lg:text-2xl xl:w-56 xl:h-24 xl:text-3xl text-neutral-200 dark:text-themed-navy bg-themed-teal dark:bg-themed-neutral hover:bg-slate-500 rounded-xl shadow-md shadow-neutral-600 dark:shadow-black transition-colors ease-in-out duration-500">Changelog</button>
          </div>
          <Modal hide={() => setShowModal(false)} isShowing={showModal} />
        </section>


        {/* End of Page */}
      </div>
    </main>
  );
}

