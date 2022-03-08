import './Welcome.css';
import nashita from '../assets/Nashita.png';
import { goToAnchor } from 'react-scrollable-anchor'
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';
import Fade from 'react-reveal/Fade';
import Jump from 'react-reveal/Jump';
import arrowDown from '../assets/arrowDown.png';
import sign from '../assets/sign.jpg';
import Rotate from 'react-reveal/Rotate';
import { useState, useEffect } from 'react';
import Navbarr from './NavBarr';
import { SocialIcon } from 'react-social-icons';
import useMediaQuery from '@mui/material/useMediaQuery';

  // configureAnchors({offset: -100})

function Welcome() {

  const [counter, setCounter] = useState(0)
  const matches = useMediaQuery('(min-width:600px)');



  async function goToProjects() {
    console.log("test")

    
    const img =  document.querySelector('#sign')
    console.log(img)

    // const jsonUpload = document.getElementById('json-upload');
    // const weightsUpload = document.getElementById('weights-upload');

    // const modeWeight = await require('../assets/group1-shard.bin');
    // const modeWeightFile = new File('../assets/group1-shard.bin');

    // const model = await tfjs.loadLayersModel(tfjs.io.browserFiles([jsonUpload.files[0], weightsUpload.files[0]]));
    // const predictions = await model.classify(img);
    // console.log('Predictions: ', predictions);

    goToAnchor('learnmore')
  }
  return (
    <div className='background' >
      <Navbarr/>
              <ScrollableAnchor id={'home'}>
                <div className="bck1">
                  <div className="social_icons">
                        <svg viewBox={matches?"0 0 50 100":"0 0 50 60"} >

                          <path d="M22,100 v-80" stroke="#242424" stroke-width="1" >
                          </path>
                        </svg>
                      <Rotate bottom left delay={2000} >
                        <SocialIcon url="https://sg.linkedin.com/in/nashitag" bgColor="#0000" fgColor="#242424" style={{height:matches?'6vh':'5vh'}}/>
                        <SocialIcon url="https://github.com/nashitag" bgColor="#0000" fgColor="#242424" style={{height:matches?'6vh':'5vh'}}/>
                        <SocialIcon url="nashitag@gmail.com" bgColor="#0000" fgColor="#242424"  network="mailto" style={{height:matches?'6vh':'5vh'}}/>
                      </Rotate>
                    </div>
                  <div className="welcome-text-main">
                    <Fade bottom duration={2000}>
                      <h1 className="heading_caption1">DEVELOPER, SOFTWARE ENGINEER</h1>
                      <h1 className="heading1">Nashita Abd</h1>
                      <h1 className="heading_caption2">Dubai | Singapore</h1>
                    </Fade>
                    {/* <input type="file" id='json-upload' name='json-upload'></input>
                    <input type="file" id='weights-upload' name='weights-upload'></input> */}
                  </div>
                  <div className="welcome_div_bottom">
                    <div style={{width: 50}}>
                    </div>
                    <div onClick={()=>goToProjects()} className="goDown">
                      <Jump delay={1000} duration={2000} forever={true}>
                        <img src={arrowDown} className="arrowDown" id="arrowDown"></img>
                      </Jump>
                      <p href='#learnmore' className="small-caption">Scroll down to learn more</p>
                    </div>
                    <div style={{width: 50}}>
                    </div>
                  </div>
                </div>
              </ScrollableAnchor>

              <ScrollableAnchor id={'learnmore'}>
                <div className="bck1">
                  <div className="div_about_me">
                    <div className="div_about_text">
                      <h2 className="about_text_title">Hey there, I am Nashita.</h2>
                      <p className="about_text_para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit faucibus mollis. Praesent ultrices vehicula hendrerit. Maecenas ut ante ut magna viverra consequat. Sed pretium viverra quam non blandit. Nullam bibendum odio non posuere venenatis. Aliquam a quam non velit pharetra convallis. Duis lorem libero, vehicula fermentum elementum vel, finibus at purus. </p>
                    </div>
                    <div className="div_about_image">
                      <img src={nashita} className="about_image" id="sign"></img>
                    </div>
                  </div>

                  <div className="div_my_work">
                    {/* <h2 className="about_text_title">My Work</h2> */}

                  </div>
                </div>
              </ScrollableAnchor>
    </div>
  );
}

export default Welcome;

