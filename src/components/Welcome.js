import React, { useRef, useState } from 'react'
import './Welcome.css'
import nashita from '../assets/Nashita.webp'
import ScrollableAnchor, { goToAnchor } from 'react-scrollable-anchor'
import Fade from 'react-reveal/Fade'
import Jump from 'react-reveal/Jump'
import Pulse from 'react-reveal/Pulse'
import arrowDown from '../assets/arrowDown.png'
import Rotate from 'react-reveal/Rotate'
import Navbarr from './NavBarr'
import { SocialIcon } from 'react-social-icons'
import useMediaQuery from '@mui/material/useMediaQuery'
import emailjs from '@emailjs/browser'
import { useAlert } from 'react-alert'

function Welcome () {
  const [counter, setCounter] = useState(0)
  const matches = useMediaQuery('(min-width:600px)')

  async function goToProjects () {
    console.log('test')

    const img = document.querySelector('#sign')
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
                        <svg viewBox={matches ? '0 0 50 100' : '0 0 50 60'} >

                          <path d="M22,100 v-80" stroke="#242424" strokeWidth="1" >
                          </path>
                        </svg>
                      <Rotate bottom left delay={2000} >
                        <SocialIcon url="https://sg.linkedin.com/in/nashitag" bgColor="#0000" fgColor="#242424" style={{ height: matches ? '6vh' : '5vh' }}/>
                        <SocialIcon url="https://github.com/nashitag" bgColor="#0000" fgColor="#242424" style={{ height: matches ? '6vh' : '5vh' }}/>
                        <SocialIcon url="nashitag@gmail.com" bgColor="#0000" fgColor="#242424" network="mailto" style={{ height: matches ? '6vh' : '5vh' }}/>
                      </Rotate>
                    </div>
                  <div className="welcome-text-main">
                    <Fade bottom duration={2000}>
                      <h1 className="heading_caption1">DEVELOPER, DESIGNER, EXPLORER</h1>
                      <h1 className="heading1">Nashita Abd</h1>
                      <h1 className="heading_caption2">Dubai | Singapore</h1>
                    </Fade>
                    {/* <input type="file" id='json-upload' name='json-upload'></input>
                    <input type="file" id='weights-upload' name='weights-upload'></input> */}
                  </div>
                  <div className="welcome_div_bottom">
                    <div style={{ width: 50 }}>
                    </div>
                    <div onClick={() => goToProjects()} className="goDown">
                      <Jump delay={1000} duration={2000} forever={true}>
                        <img src={arrowDown} className="arrowDown" id="arrowDown"></img>
                      </Jump>
                      <p href='#learnmore' className="small-caption">Scroll down to learn more</p>
                    </div>
                    <div style={{ width: 50 }}>
                    </div>
                  </div>
                </div>
              </ScrollableAnchor>

              <ScrollableAnchor id={'learnmore'}>
                <div className="bckBottom">
                  <div className="div_about_me">
                    <div className="div_about_text">
                      <h2 className="about_text_title">Hey there, I am Nashita,</h2>
                      <p className="about_text_para" style={{ marginBottom: '0' }}>&nbsp; &nbsp; &nbsp; a product developer based in Singapore. I particularly love designing web and mobile solutions. I enjoy building creative and dynamic digital experiences. I am presently working at Visa Inc.

                            I have specialized in Data Analytics and Machine Learning, and I am currently focused on integrating the same to develop effective solutions for day-to-day challenges in the software/real world.
                          <br/> <br/>
                            I am proficient in Java, Python & JavaScript. Check out my work related to Data Science, Machine Learning, Product Design, and Development</p>
                            <Pulse forever={true}><div className='about_me_link_to_work'><a href="/work">My Work</a></div></Pulse>

                          <p className="about_text_para">  I am committed to working hard towards my passion for designing digital experiences that will leave a dent in the world.</p>

                    </div>
                    <div className="div_about_image">
                      <img src={nashita} className="about_image" id="sign"></img>
                    </div>
                  </div>

                  <div className="contact_me">
                    {/* <h2 className="about_text_title">My Work</h2> */}
                    <ContactUs/>
                  </div>
                </div>
              </ScrollableAnchor>
    </div>
  )
}

export default Welcome

export const ContactUs = () => {
  const form = useRef()

  const alert = useAlert()

  const sendEmail = (e) => {
    e.preventDefault()

    console.log(e, e.target.user_name.value, e.target.user_email.value, e.target.message.value)

    emailjs.send('service_t5dx8wb', 'template_xvcdgmt', {
      from_name: e.target.user_name.value,
      to_name: 'Nashita',
      message: e.target.message.value,
      reply_to: e.target.user_email.value
    }, 'Jnks9zPx1-sjhAwj_')
      .then((result) => {
        console.log(result.text)
        alert.show('Your details have been submitted.', { type: 'success' })
        document.getElementById('create-form').reset()
      }, (error) => {
        console.log(error.text)
        alert.show(error.text, { type: 'error' })
      })
  }

  return (
    <form id="create-form" ref={form} onSubmit={sendEmail} className='contact_me_form'>

      <label className="contact_me_text">Feel free to drop me a note here!</label>
      <textarea required name="message" placeholder='Your Message' className='form_input'/>

      {/* <label className="contact_me_text">Leave your contact details</label> */}
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: '10px', marginTop: '10px' }}>
        <input required type="text" name="user_name" placeholder='Name' style={{ width: '49.5%' }}/>
        <input type="email" name="user_email" placeholder='Email' style={{ width: '49.5%' }} />
      </div>

      <input type="submit" value="Send" className='form_submit_button'/>
    </form>
  )
}
