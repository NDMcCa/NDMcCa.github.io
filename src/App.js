
import './App.css';
import ProjectCard from './components/cards//projectCard.js';
import WatchCard from './components/cards//watchCard.js';
import projects from './components/cards//projects.js';
import watches from './components/cards/watches.js';
import Navbar from './components/navbar//navbar.js';
import BinClock from './components/binclock/binClock.js';


function App() {
  const projectCards = projects.map((project) => {
    return <ProjectCard 
      title={project.title}
      img={project.img}
      description={project.description}
      tags={project.tags}
      link={project.link}
      key={project.key}
      />
    });

  const watchCards = watches.map((watch) => {
    return <WatchCard 
      title={watch.title}
      img={watch.img}
      description={watch.description}
      tags={watch.tags}
      link={watch.link}
      key={watch.key}
      />
  });

  return (
    <>
    <div className="App-header">
      <Navbar />
    </div>
    <div className="App-header">
      <div className='container'>
        <h1>Hello, I'm Nicholas McCamis!</h1>
        <p>Welcome to my website. I am a aspiring software developer and a 4th year Computer Science student at the University of Calgary. 
          I have primarily been focusing on honing skills in software development, but I am also begining to explore the world of cybersecurity and cryptography and am looking to expand my knowledge in those area as well.
          I am passionate about software development and I am always looking for new opportunities to learn and grow.</p>
      </div>
      <div className='container'>
        <div className="section-black" id="Projects">
          <h1>Projects</h1>
          <p>Software development requires many skills. Most of my work to date has been with Java; however, I have been branching out into the unknown as well. Recently I have been focusing, of course, on web development. 
            This inlcudes learning HTML, CSS, and JavaScript as well as learning how to use React and JSX. Coming soon are also some small projects that I have been working on using Python.
          </p>
          <p>
            All projects are stored in GitHub repositories for easy viewing in a familar platform and also to demonstrate my ability to use version control as at least one of these projects is still a work in progress.
          </p>
        </div>
      </div>
      <div className='card-container'>
        {projectCards}
      </div>
      <div className='container' id="Creations">
          <h1>Creations</h1>  
          <p>This is a collection of things I have created that may not exactly pertain to software development. 
            I have always been interested in creating things and I have been able to create a few things that I am proud of. 
            This includes a few watch faces for the Wear OS platform and a few other things that I have created in my free time that may show up here at some point.
          </p>
        <div className="section-black" >
          <h1>Android Wear OS Watch Faces</h1>
          <p>I have created a few watch faces for the Wear OS platform. I have always been interested in the idea of creating a watch face and I have been able to create a few that I am proud of. 
            To date, I have only created watch faces using Watch Face Studio, although I am looking to expand my knowledge of Android Studio which would enable me to create more complex watch faces in the future.
          </p>
        </div>
      </div>
      <div className='card-container'>
        {watchCards}
      </div>
      <div className='container'>
      <h1>Contact</h1>
      <p>I am always looking for new opportunities to learn and grow. 
        If you have any questions or would like to get in touch, feel free to reach out to me via email or LinkedIn.
      </p>
        <div className="socials">
          <a className="socials-link" href="https://www.instagram.com/nickmccamis67?igsh=MXBxOHc3cDU2ODduYQ==" ><i className="fa fa-instagram"></i></a>
          <a className="socials-link" href="https://www.linkedin.com/in/nicholas-mccamis/" ><i className="fa fa-linkedin"></i></a>  
          <a className="socials-link" href="https://github.com/NDMcCa" ><i className="fa fa-github"></i></a>
          <a className="socials-link" href="mailto:nicholas.m19@gmail.com" ><i className="fa fa-envelope"></i></a> 
        </div>
      </div>
      <BinClock />
    </div>
    </>
  );
}

export default App;
