"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu } from './components/menu.js';

import osk from "../images/osk.jpg";
import tw from "../../public/tailwind-css-svgrepo-com.svg";
import next from "../../public/next.svg";

import ProjectCard from './components/projectCard.js';
import projects from './components/data/projects.js';

// import WatchCard from './components/watchCard.js';
// import watches from './components/data/watches.js';

import char from "./components/images/chargerwatch.png";
import st from "./components/images/stwatch.png";
import hdd from "./components/images/hddwatch.png";



export default function Home() {


  const projectCards = projects.map((project) => {
    return <ProjectCard 
      title={project.title}
      // tags={project.tags}
      icons={project.icons}
      link={project.link}
      key={project.key}
      />
  });

  const sections = [
    { id: 'Home', label: 'Home' },
    { id: 'Dev Work', label: 'Dev Work' },
    { id: 'Creations', label: 'Creations' },
    { id: 'About', label: 'About' }
  ];

  // const watchCards = watches.map((watch) => {
  //   return <WatchCard 
  //     title={watch.title}
  //     img={watch.img}
  //     description={watch.description}
  //     tags={watch.tags}
  //     link={watch.link}
  //     key={watch.key}
  //     />
  // });

  return (
    <main id="page" className="overflow-y-scroll max-lg:snap-y max-lg:snap-mandatory transition-colors ease-in-out duration-500 bg-neutral-100 dark:bg-neutral-950 h-screen w-screen" >
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" 
      integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" 
      crossorigin="anonymous" referrerpolicy="no-referrer" />
      <div className="fixed top-0 flex items-center justify-center w-full bg-neutral-300  dark:bg-neutral-900 h-fit py-3 transition-colors ease-in-out duration-500">
        <Menu sections={sections} containerId="page" />
      </div>
      <div className="sm:px-6 md:px-8 lg:px-36 xl:px-56 2xl:px-64">
        <section className="snap-center max-lg:snap-always flex flex-col items-center justify-start w-full h-screen transition-colors ease-in-out duration-500
        bg-neutral-100 pt-20 md:pt-28 dark:bg-neutral-950">
          <div id='Home' className="flex flex-row items-left justify-center w-full h-fit space-x-4 px-4 pt-6 pb-4 transition-colors ease-in-out duration-500
          bg-neutral-100 dark:bg-neutral-950">
            <Image src={osk} alt="osk" className="rounded-full h-28 w-28 sm:h-36 sm:w-36 md:h-48 md:w-48" />
            <div className="flex flex-col">
              <h1 className="text-3xl md:text-5xl text-black dark:text-neutral-200 m-auto text-center transition-colors ease-in-out duration-500">Hi, I'm Nick!</h1>
              <div className="flex flex-row items-center justify-center w-full h-fit space-x-4 md:space-x-6 px-4 py-4">
                <a href="https://github.com/NDMcCa">
                  <i className="fab fa-github text-black dark:text-neutral-200 text-3xl sm:text-4xl md:text-5xl cursor-pointer transition-colors ease-in-out duration-500" />
                </a>
                <a href="https://www.instagram.com/nickmccamis67?igsh=MXBxOHc3cDU2ODduYQ==">
                  <i className="fab fa-instagram text-black dark:text-neutral-200 text-3xl sm:text-4xl md:text-5xl cursor-pointer transition-colors ease-in-out duration-500" />
                </a>
                <a href="https://www.linkedin.com/in/nicholas-mccamis/">
                  <i className="fab fa-linkedin text-black dark:text-neutral-200 text-3xl sm:text-4xl md:text-5xl cursor-pointer transition-colors ease-in-out duration-500" />
                </a>
                <a href="mailto:nicholas.m19@gmail.com">
                  <i className="fas fa-envelope text-black dark:text-neutral-200 text-3xl sm:text-4xl md:text-5xl cursor-pointer transition-colors ease-in-out duration-500" />
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-left justify-start w-full h-fit bg-neutral-100 dark:bg-neutral-950 space-x-4 space-y-4 lg:space-y-10 px-4 py-6 transition-colors ease-in-out duration-500">
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-black dark:text-neutral-200 m-auto text-center transition-colors ease-in-out duration-500">Developer and Designer</h1>
            <p className="sm:text-xl md:text-2xl text-black dark:text-neutral-200 transition-colors ease-in-out duration-500">Welcome to my website. I am a aspiring software developer and a 4th year Computer Science student at the University of Calgary.
              I have a passion for honing my software development skills and learning new techniques, paradigms, languages, and frameworks.
            </p>
            <p className="sm:text-xl md:text-2xl text-black dark:text-neutral-200 transition-colors ease-in-out duration-500">I love to hike, camp, and travel the world around me. I'm an avid fan of aviation, aerospace, and anything with wings. 
              I have always been fascinated by the idea of flight and have enjoyed developing systems simulation and audio immersion addons for flight simulators 
              on my own time as well as contributing to the development a larger project. 
            </p>
          </div>
        </section>
        <section id='Dev Work' className="max-lg:snap-start max-lg:snap-always flex flex-col items-center w-full h-screen pt-24 md:pt-28 xl:pt-0 bg-neutral-100  dark:bg-neutral-950 transition-colors ease-in-out duration-500">
          <div  className="flex flex-col items-center w-full h-fit bg-neutral-100  dark:bg-neutral-950 space-y-4 px-4 transition-colors ease-in-out duration-500">
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-black dark:text-neutral-200 m-auto text-center transition-colors ease-in-out duration-500">Development Work</h1>
            <p className="sm:text-xl md:text-2xl text-black dark:text-neutral-200 transition-colors ease-in-out duration-500">Below is a collection of some of my projects of varying size and scope. This collection spans from front end React/JSX development to fully Object-Oriented back end Java code. 
              All projects are available for viewing in repositories. Click on the links to see more.
            </p>
            {projectCards}
          </div>
        </section>
        <section id='Creations' className="max-lg:snap-start max-lg:snap-always flex flex-col items-center w-full h-screen pt-24 md:pt-28 xl:pt-0 bg-neutral-100 dark:bg-neutral-950 transition-colors ease-in-out duration-500">
          <div className="flex flex-col items-center w-full h-fit bg-neutral-100  dark:bg-neutral-950 space-y-4 lg:space-y-10 px-4 transition-colors ease-in-out duration-500">
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-black dark:text-neutral-200 m-auto text-center">Creations</h1>
            <p className="sm:text-xl md:text-2xl text-black dark:text-neutral-200">I have created a few watch faces for the Wear OS platform. I have always been interested in the idea of creating a watch face and I have been able to create a few that I am proud of.</p>
            <p className="sm:text-xl md:text-2xl text-black dark:text-neutral-200">To date, I have only created watch faces using Watch Face Studio, although I am looking to expand my knowledge of Android Studio which would enable me to create more complex watch faces in the future.</p>
            <div className="snap-x snap-mandatory flex flex-row items-center justify-start w-64 md:w-96 lg:w-full lg:justify-center h-fit bg-neutral-100 dark:bg-neutral-950 py-4 overflow-x-auto transition-colors ease-in-out duration-500 gap-9">
              <Image src={char} alt="Charger Watch" className="h-64 w-64 lg:h-80 lg:w-80 rounded-3xl snap-center snap-always shadow-md shadow-neutral-600 dark:shadow-black" />
              <Image src={st} alt="Star Trek Watch" className="h-64 w-64 lg:h-80 lg:w-80 rounded-3xl snap-center snap-always shadow-md shadow-neutral-600 dark:shadow-black" />
              <Image src={hdd} alt="Hard Disk Watch" className="h-64 w-64 lg:h-80 lg:w-80 rounded-3xl snap-center snap-always shadow-md shadow-neutral-600 dark:shadow-black" />
            </div>
          </div>
        </section>
        <section id='About' className="max-lg:snap-start max-lg:snap-always flex flex-col items-center w-full h-screen pt-24 md:pt-28 xl:pt-0 bg-neutral-100 dark:bg-neutral-950 transition-colors ease-in-out duration-500">
          <div className="flex flex-col items-center w-full h-fit bg-neutral-100  dark:bg-neutral-950 space-y-4 lg:space-y-10 px-4 transition-colors ease-in-out duration-500">
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-black dark:text-neutral-200 m-auto text-center">About</h1>
            <p className="sm:text-xl md:text-2xl text-black dark:text-neutral-200 transition-colors ease-in-out duration-500">This site was build in React/Next.js and uses the Tailwind CSS and Framer Motion libraries and the Font Awesome library for icons.</p>
            <p className="sm:text-xl md:text-2xl text-black dark:text-neutral-200 transition-colors ease-in-out duration-500">It is very much still a work in progress at this time. Expect to see new functionality added in the future such as more detail, more pages, more features on the existing page, and code optimization.</p>
            <div className="flex flex-row items-center justify-center w-full h-fit space-x-4 px-4 py-4">
              <i className="fab fa-js text-black dark:text-neutral-200 text-3xl sm:text-4xl md:text-7xl cursor-pointer transition-colors ease-in-out duration-500" />
              <i className="fab fa-react text-black dark:text-neutral-200 text-3xl sm:text-4xl md:text-7xl cursor-pointer transition-colors ease-in-out duration-500" />
              <Image src={next} alt="next" className="h-16 w-16 sm:h-20 sm:w-20 md:h-28 md:w-28" />
              <Image src={tw} alt="tailwind" className="h-12 w-12 sm:h-18 sm:w-18 md:h-24 md:w-24" />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
