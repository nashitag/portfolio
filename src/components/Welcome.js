import './Welcome.css';
import nashita from '../assets/Nashita.png';
import { goToAnchor } from 'react-scrollable-anchor'
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';
import Fade from 'react-reveal/Fade';
import Jump from 'react-reveal/Jump';
import arrowDown from '../assets/arrowDown.png';
import Rotate from 'react-reveal/Rotate';
import { useState } from 'react';
import Navbarr from './NavBarr';
import { SocialIcon } from 'react-social-icons';

  // configureAnchors({offset: -100})

function Welcome() {

  const [counter, setCounter] = useState(0)

  function goToProjects() {
    console.log("test")
    goToAnchor('learnmore')
  }
  return (
    <div className='background' >
      <Navbarr/>
              <ScrollableAnchor id={'home'}>
                <div className="bck1">
                  <div className="social_icons">
                        <svg viewBox="0 0 50 100" >

                          <path d="M22,100 v-80" stroke="#242424" stroke-width="1" >
                          </path>
                        </svg>
                      <Rotate bottom left delay={2000} >
                        <SocialIcon url="https://sg.linkedin.com/in/nashitag" bgColor="#0000" fgColor="#242424" style={{height:'6vh', widht:'6vh'}}/>
                        <SocialIcon url="https://github.com/nashitag" bgColor="#0000" fgColor="#242424" style={{height:'6vh', widht:'6vh'}}/>
                        <SocialIcon url="nashitag@gmail.com" bgColor="#0000" fgColor="#242424"  network="mailto" style={{height:'6vh', widht:'6vh'}}/>
                      </Rotate>
                    </div>
                  <div className="welcome-text-main">
                    <Fade bottom duration={2000}>
                      <h1 className="heading_caption1">DEVELOPER, SOFTWARE ENGINEER</h1>
                      <h1 className="heading1">Nashita Abd</h1>
                      <h1 className="heading_caption2">Dubai | Singapore</h1>
                    </Fade>
                  </div>
                  <div className="welcome_div_bottom">
                    <div style={{width: 50}}>
                    </div>
                    <div onClick={()=>goToProjects()} className="goDown">
                      <Jump delay={1000} duration={2000} forever={true}>
                        <img src={arrowDown} className="arrowDown"></img>
                      </Jump>
                      <p href='#learnmore' className="small-caption">Scroll down to learn more</p>
                    </div>
                    <div style={{width: 50}}>
                    </div>
                  </div>
                </div>
              </ScrollableAnchor>

              <ScrollableAnchor id={'learnmore'}>
                <div className="bck2">
                  <div className="div_about_me">
                    <div className="div_about_text">
                      <h2 className="about_text_title">Hey there, I am Nashita.</h2>
                      <p className="about_text_para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit faucibus mollis. Praesent ultrices vehicula hendrerit. Maecenas ut ante ut magna viverra consequat. Sed pretium viverra quam non blandit. Nullam bibendum odio non posuere venenatis. Aliquam a quam non velit pharetra convallis. Duis lorem libero, vehicula fermentum elementum vel, finibus at purus. </p>
                    </div>
                    <div className="div_about_image">
                      <img src={nashita} className="about_image"></img>
                    </div>
                  </div>

                  <div className="div_my_work">
                    <h2 className="about_text_title">My Work</h2>

                    </div>
                </div>
              </ScrollableAnchor>
    </div>
  );
}

export default Welcome;

