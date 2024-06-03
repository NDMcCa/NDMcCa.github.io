import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link as ScrollLink, scroller } from 'react-scroll';

export const Menu = ({ sections, containerId }) => {
  const [activeSection, setActiveSection] = useState('');
  const [tabWidth, setTabWidth] = useState(0);
  const [tabLeft, setTabLeft] = useState(0);
  const containerRef = useRef(null);

  const [theme, setTheme] = useState('light');
  

  // Dark mode functionality
  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
  }, []);

  useEffect(() => {
    theme === 'dark' ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark');
  }, [theme]);

  const handleThemeChange = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }

  const ThemeIcon = () => {
    if (theme === 'light') {
      return <i className="fas fa-moon text-black dark:text-neutral-200 text-3xl sm:text-4xl cursor-pointer transition-colors ease-in-out duration-500" onClick={handleThemeChange} />;
    } else {
      return <i className="fas fa-sun text-black dark:text-neutral-200 text-3xl sm:text-4xl cursor-pointer transition-colors ease-in-out duration-500" onClick={handleThemeChange} />;
    }
  }

  // Scroll functionality
  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (container) {
        const containerTop = container.getBoundingClientRect().top;
        sections.forEach((section) => {
          const element = document.getElementById(section.id);
          if (element) {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop - containerTop <= 0) {
              setActiveSection(section.id);
            }
          }
        });
      }
    };

    const container = containerRef.current;
    container.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, [sections]);

  useEffect(() => {
    const updateTabPosition = () => {
      const activeLink = document.querySelector('.menu-item.active');
      if (activeLink) {
        setTabWidth(activeLink.offsetWidth);
        setTabLeft(activeLink.offsetLeft);
      }
    };
    updateTabPosition();

    window.addEventListener('resize', updateTabPosition);
    return () => {
      window.removeEventListener('resize', updateTabPosition);
    };
  }, [activeSection]);

  const handleSetActive = (section) => {
    setActiveSection(section);
  };

  const handleScrollTo = (sectionId) => {
    scroller.scrollTo(sectionId, {
      duration: 500,
      delay: 0,
      smooth: 'easeInOutQuart',
      containerId: containerId
    });
  }

  return (
    <div id={containerId} ref={containerRef}>
      <nav className="relative flex items-center justify-center w-full gap-1.5 px-2 md:gap-5">
        <div className="flex items-center px-2 py-2 mx-2 outline outline-2 outline-black dark:outline-neutral-200 rounded-full w-fit transition-colors ease-in-out duration-500">
          {sections.map((section) => (
            <ScrollLink
              key={section.id}
              activeClass="active"
              to={section.id}
              containerId={containerId}
              spy={true}
              smooth={true}
              offset={-200} 
              duration={500}
              onSetActive={handleSetActive}
              onClick={() => handleScrollTo(section.id)}
              className="menu-item select-none text-xs sm:text-sm z-10 block cursor-pointer px-2 py-1.5 uppercase text-neutral-200 mix-blend-difference md:px-5 md:py-3 md:text-base lg:text-xl transition-colors ease-in-out duration-500
              sm:text-s">
              {section.label}
            </ScrollLink>
          ))}
        </div>
        <ThemeIcon />
          <motion.div
            className="absolute top-0 bottom-0 my-1 bg-black dark:bg-neutral-200 rounded-full transition-colors ease-in-out duration-500"
            layoutId="tab"
            initial={false}
            animate={{
            width: tabWidth,
            left: tabLeft,
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        />
      </nav>
    </div>
  );
};
