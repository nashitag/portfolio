import './Welcome.css'
import './Work.css'
import backarrow from '../assets/back-arrow.png'
import Navbarr from './NavBarr'
import React, { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { XMasonry, XBlock } from 'react-xmasonry'
import useMediaQuery from '@mui/material/useMediaQuery'
import PropTypes from 'prop-types'

function WorkDetail () {
  const { state } = useLocation()

  const [workDetailJSON, setWorkDetailJSON] = useState([])
  const [details, setDetails] = useState([])
  const [skills, setSkills] = useState([])

  const matches = useMediaQuery('(min-width:600px)')

  useEffect(() => {
    getWorkDetailJSON()
  }, [])

  const getSkills = (tags) => {
    fetch('/skills.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    })
      .then(function (response) {
        console.log('FETCHING SKILLS DETAIL RESPONSE: ', response)
        return response.json()
      })
      .then(function (myJson) {
        const filteredData = []
        tags.forEach(element => {
          filteredData.push((myJson.filter(data => data.value === element))[0])
        })
        setSkills(filteredData)
        console.log('FETCHING SKILLS JSON: ', filteredData)
      })
  }

  const getWorkDetailJSON = () => {
    fetch('/work.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    })
      .then(function (response) {
        console.log('FETCHING WORK DETAIL RESPONSE: ', response)
        return response.json()
      })
      .then(function (myJson) {
        const filteredData = myJson.filter(data => data.id === state.id)
        setWorkDetailJSON(filteredData[0])
        setDetails(filteredData[0].details)
        getSkills(filteredData[0].tags)
        console.log('FETCHING WORK DETAIL JSON: ', filteredData)
      })
  }

  function RenderDiv (props) {
    const [divDetails, setDivDetails] = useState(props.divDetails)

    return (
            <div className="div_body" key={props.key} >
              {divDetails.div_type === 'text'
                ? <>
                  <p className="div_title_text">{divDetails.div_title}</p>
                  <p className="div_text">{divDetails.div_items}</p>
                </>
                : null }
              {divDetails.div_type === 'image/jpg'
                ? <>
                  <img src={divDetails.div_items} className="div_image" ></img>
                  <p className="div_title_img">{divDetails.div_title}</p>

                </>
                : null }
              {divDetails.div_type === 'hyperlink'
                ? <>
                  <a href={divDetails.div_link} target="_blank" rel="noreferrer noopener">
                    <img src={divDetails.div_symbol} className="div_link_symbol" ></img>
                  </a>
                  <p className="div_title_img">{divDetails.div_title}</p>

                </>
                : null }
              {divDetails.div_type === 'iframe/video'
                ? <>
                  <iframe loading="lazy" src={divDetails.div_items} width="100%" height="400" allow="autoplay"></iframe>
                </>
                : null }
            </div>
    )
  }

  return (
        <div className='backgroundWorkDetail'>
          <Navbarr/>

          <div className="workContainerDetail">
            <div style={{ display: 'flex', flexDirection: matches ? 'row' : 'column', justifyContent: 'space-between' }}>
              <Link to={'/work'} style={{ alignSelf: 'flex-start' }}>
                <img src={backarrow} className="backarrow" ></img>
              </Link>
                <div>
                  <p className="date">{workDetailJSON.date}</p>
                  <p className="heading">{workDetailJSON.name}</p>
                  <p className="caption1">{workDetailJSON.tag_line}</p>
                  <p className="summary">{workDetailJSON.summary}</p>
                </div>
                <div style={{ width: '50px' }}></div>
              </div>
              <div className="skillsContainer">
                {skills.map((skill) => (
                  <div className="skill_body" key={skill.id}>
                    <p className="skill_text">{skill.label}</p>
                  </div>
                ))}
              </div>
              <XMasonry maxColumns={2} responsive={true} updateOnFontLoad={true} targetBlockWidth={600}>
                {details.map((detail, index) => (
                      <XBlock key={index}>
                        <RenderDiv key={detail.id} divDetails={detail}/>
                      </XBlock>
                ))}
              </XMasonry>
          </div>
        </div>
  )
}
export default WorkDetail

WorkDetail.propTypes = {
  divDetails: PropTypes.object,
  key: PropTypes.string
}
