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
import { SocialIcon } from 'react-social-icons';

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
                  <div className="social_icons">
                      <svg viewBox="0 0 50 100" >
                        <path d="M22,100 v-80" stroke="#242424" stroke-width="1" />
                      </svg>
                      <SocialIcon url="https://sg.linkedin.com/in/nashitag" bgColor="#0000" fgColor="#242424" style={{height:'6vh', widht:'6vh'}}/>
                      <SocialIcon url="https://github.com/nashitag" bgColor="#0000" fgColor="#242424" style={{height:'6vh', widht:'6vh'}}/>
                      <SocialIcon url="nashitag@gmail.com" bgColor="#0000" fgColor="#242424"  network="mailto" style={{height:'6vh', widht:'6vh'}}/>
                    </div>
                  <div className="welcome-text-main">
                    <Fade bottom>
                      <h1 className="heading_caption1">DEVELOPER, SOFTWARE ENGINEER</h1>
                      <h1 className="heading1">Nashita Abd</h1>
                      <h1 className="heading_caption2">Dubai | Singapore</h1>
                    </Fade>
                  </div>
                  <div className="welcome_div_bottom">
                    <div style={{width: 50}}>
                    </div>
                    <div onClick={()=>goToProjects()} className="goDown">
                      <Jump duration={2000} forever={true}>
                        <img src={arrowDown} className="arrowDown"></img>
                      </Jump>
                      <p href='#projects' className="small-caption">Scroll down to learn more</p>
                    </div>
                    <div style={{width: 50}}>
                    </div>
                  </div>
                </div>
              </ScrollableAnchor>
              <ScrollableAnchor id={'projects'}>
                <div className="bck2">
                  <div className="welcome-text-main"> 
                      <h1>HI HI</h1>
                  </div>
                </div>
              </ScrollableAnchor>
    </div>
  );
}

export default Welcome;

