import React, { useState, useEffect } from 'react'
import './Welcome.css'
import Navbarr from './NavBarr'
import { Link } from 'react-router-dom'
import './Work.css'
import { Container, Row, Col } from 'react-bootstrap'
import MultipleSelectChips from './MultipleSelectChips'
import gtag from 'ga-gtag'

function Work () {
  const [workJSON, setWorkJSON] = useState([])
  const [skills, setSkills] = useState([])
  const [selectedTags, setSelectedTags] = useState([])

  const [value, setValue] = useState([])
  const [error, setError] = useState('')
  const options = skills

  const [unmutableWorkJSON, setUnmutableWorkJSON] = useState([])

  useEffect(() => {
    getWorkJSON()
    getSkillsLIST()
  }, [])

  const getWorkJSON = () => {
    fetch('work.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    })
      .then(function (response) {
        console.log('FETCHING WORK JSON: ', response)
        return response.json()
      })
      .then(function (myJson) {
        // console.log(myJson);
        setWorkJSON(myJson)
        setUnmutableWorkJSON(myJson)
      })
  }

  const getSkillsLIST = () => {
    fetch('skills.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    })
      .then(function (response) {
        console.log('FETCHING SKILLS JSON: ', response)
        return response.json()
      })
      .then(function (myJson) {
        // const skillset = myJson.map(item => item.skills)
        setSkills(myJson)
      })
  }

  function selectedTagsChange (tags) {
    console.log(tags)
    setSelectedTags(tags)
    handleWorkListChange(tags)
  }

  const [IDsFiltered, setIDsBeingFiltered] = useState([])

  function handleWorkListChange (tags) {
    if (tags.length === 0) {
      console.log('NO TAGS SELECTED')
      getWorkJSON()
      // setBeingFiltered([])
    } else {
      console.log('TAGS SELECTED')
      const filteredWORKData = []
      tags.forEach(element => {
        const work = unmutableWorkJSON.filter(data => data.tags.includes(element))
        console.log('checking', element, work)
        // work is an array
        // check for duplicates in filteredWORKData array
        const result = work.filter(function (project) {
          if (idExists(project.id, filteredWORKData) === false) {
            return project
          } else {
            console.log('ID is already in Array:', project.id)
            return null
          }
        })

        console.log('Pushing following data to filteredWORKData', result)
        filteredWORKData.push(...result)
      })
      console.log('filteredWORKData', filteredWORKData)
      setWorkJSON(filteredWORKData)
    }
  }

  function idExists (id, arr) {
    return arr.some(function (el) {
      return el.id === id
    })
  }

  function registerGTAGevent (name) {
    console.log('registering', name)
    gtag('event', 'view_project', {
      project_name: name
    })
  }

  return (
        <div className='background' >
          <Navbarr/>
          <div className="workContainer">
            <MultipleSelectChips
              label="Label"
              value={value}
              setValue={setValue}
              options={options}
              error={error}
              setError={setError}
              change={selectedTagsChange}
            />
            {/* <p>{selectedTags}</p> */}
            <Container >
                <Row className="workContainerROW" >
                {workJSON.map((project) => (
                    <Col key={project.id} className="workContainerCOL" >
                        <div className="projectContainer" onClick={() => registerGTAGevent(project.name)}>
                            <Link
                                to={{
                                  pathname: `/work/${project.id}`,
                                  state: { id: project.id }
                                }}
                                key={project.id}
                            >
                                {/* HI {project.name} */}
                                <img src={project.tag_img} className="projectImage" ></img>
                                <div className="projectCaption">
                                  <p className="projectCaption-date">{project.date}</p>
                                  <h2 className="projectCaption-title">{project.name}</h2>
                                  <p className="projectCaption-tagline">{project.tag_line}</p>
                                </div>
                            </Link>
                        </div>
                    </Col>
                ))}
                </Row>
            </Container>
          </div>
        </div>
  )
}
export default Work
