import bck_welcome from '../assets/bck_welcome.jpeg';
import './Welcome.css';
import TiltTile from './TiltTile.js';
import Sketch from 'react-p5';
import texture2 from '../assets/design1.png';
import { goToAnchor } from 'react-scrollable-anchor'
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';
import Fade from 'react-reveal/Fade';
import Jump from 'react-reveal/Jump';
import arrowDown from '../assets/arrowDown.png';
import Pulse from 'react-reveal/Pulse';
import { useState } from 'react';
import Navbarr from './NavBarr';

  // configureAnchors({offset: -100})

function Welcome() {

  const [counter, setCounter] = useState(0)

  function goToProjects() {
    console.log("test")
    goToAnchor('projects')
  }
  return (
    <div className='background' >
      <Navbarr/>
              <ScrollableAnchor id={'home'}>
                <div className="bck1">
                  <div className="welcome-text-main">
                    <Fade bottom><h2 className="heading">Hey there, I'm Nash</h2></Fade>
                  </div>
                  <div onClick={()=>goToProjects()}>
                    <Jump duration={2000} forever={true}>
                      <img src={arrowDown} className="arrowDown"></img>
                    </Jump>
                    <p href='#projects' className="small-caption">Scroll down to see my projects</p>
                  </div>
                </div>
              </ScrollableAnchor>
              <ScrollableAnchor id={'projects'}>
                <div className="bck1">
                  <div className="welcome-text-main"> 
                      <h1>HI HI</h1>
                  </div>
                </div>
              </ScrollableAnchor>
    </div>
  );
}

export default Welcome;

