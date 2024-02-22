import React, {useEffect} from 'react';
import './navbar.css';
import Dashboard from '../modal/dashboard';

function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  h = checkTime(h);
  m = checkTime(m);
  s = checkTime(s);
  document.querySelector('.navbar--clock').textContent = "Time: " + h + ":" + m + ":" + s;
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

// function actuateMenu() {
//   counter = (counter + 1) % 2;
//   if (counter === 1) {
//       menuButton.innerHTML = "Less ▲";
//       menu.style.display = "flex  ";
//   } else {
//       menuButton.innerHTML = "More ▼";
//       menu.style.display = "none";
//   }
// }

function Navbar() {
  useEffect(() => {startTime()});
  return (
    <nav className="navbar">
      <button className="navbar--title">Nicholas McCamis</button>
      <a className="navbar--button" href='#Projects'> Projects</a>
      <a className="navbar--button" href="#Creations">Creations</a>
      <a className="navbar--button" href='https://www.linkedin.com/in/nicholas-mccamis/'>LinkedIn</a>
      {/* <button className="navbar--button" id='menu'><p>More ▼</p></button> */}
      <Dashboard 
        type={"About"}
      />
      {/* <Dashboard 
        type={"ChangeLog"}
      /> */}
      <button className="navbar--clock">Time: XX:XX:XX</button>
    </nav>
  );
}

export default Navbar;
