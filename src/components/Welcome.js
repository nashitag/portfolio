import bck_welcome from '../assets/bck_welcome.jpeg';
import './Welcome.css';
import TiltTile from './TiltTile.js';
import Sketch from 'react-p5';
import texture2 from '../assets/design1.png';
import ScrollAnimation from 'react-animate-on-scroll';
import { fadeIn } from 'react-animations'
import styled, { keyframes } from 'styled-components';
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';
const fadeInAnimation = keyframes`${fadeIn}`;
const FadeInDiv = styled.div`
  animation: 3s ${fadeInAnimation};
`;

const styles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '10vh',
  }

  configureAnchors({offset: -100})

function Welcome() {
    const options = {
        max: 15,
        perspective: 1000,
        scale: 1.15,
        }


    
        

    

  return (
    <div >
        {/* <Sketch setup={setup} draw={draw} /> */}
        {/* <TiltTile
            options={options}
          >
            <img src={texture2} alt="" style={{height:'100%', width:'100%'}}/>
            
          </TiltTile> */}
            {/* <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
                <FadeInDiv style={{height:'100%', display:'flex', justifyContent:'center', alignItems:'center', alignSelf: 'center',}}>Hi, I'm Nash </FadeInDiv>
            </div> */}
            <ScrollableAnchor id={'home'}>
              <div className='background' >
                <div className="welcome-text-main">
                    <FadeInDiv style={{height:'100%', display:'flex', justifyContent:'center', alignItems:'center', alignSelf: 'center',}}>Hi, I'm Nash </FadeInDiv>
                </div>
              </div>
            </ScrollableAnchor>
            <ScrollableAnchor id={'home2'}>
              <div >
                  <FadeInDiv style={{height:'100%', display:'flex', justifyContent:'center', alignItems:'center', alignSelf: 'center',}}>Second scroll</FadeInDiv>
              </div>
            </ScrollableAnchor>
          {/* <ScrollAnimation animateIn="fadeIn">
            Some Text
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn">
            Some Text
          </ScrollAnimation> */}
          
    </div>
  );
}

export default Welcome;

