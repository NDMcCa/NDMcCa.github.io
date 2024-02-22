import "./modal.css";
import logo from './images/logo.svg';

const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
    return (
      <div className={showHideClassName}>
        <section className="modal--content">
          {/* {children} */}
            <h1>Welcome!</h1>
            <p>Thanks for visiting this site! This page is very much a work in progress, or (very) early access as some might say. I am still working on the content and the design of the page that will see it become more dynamic. 
                I am also working on various content aspects of the site that will be added over time. 
                Feel free to follow along on the develpment of this site and where it goes.
            </p>
            <h1>ChangeLog:</h1>
            <h3>Version 1.0.0:</h3>        
            <p>This marks the first version of the site built in the React Framework that has been deployed to GitHub pages. 
                Though the site is still not mobile friendly, it now has significantly better support for different resolutions. The general layout is similar to the sunset standard CSS/HTML/JS version of the site. 
                The navbar for now no longer has a drop menu as the functionality of that is being reconsidered for now. Watch face descriptions are temporarily removed as they are being reworked.
                There is a digital clock that is now properly formatted placed in the top right as well as a fun little binary clock somewhere on the page.
            </p>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                This website is built using React
            </p>
            <button type="button" onClick={handleClose}>
            Close
          </button>
        </section>
      </div>
    );
  };

  export default Modal;