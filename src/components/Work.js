import React,{useState,useEffect} from 'react';
import './Welcome.css';
import Navbarr from './NavBarr';
import { useLocation, Link } from "react-router-dom";
import './Work.css';
import {Container, Row, Col} from 'react-bootstrap';
import MultipleSelectChips from './MultipleSelectChips';


function Work() {
    const [workJSON,setWorkJSON]=useState([]);
    const [skills, setSkills]=useState([]);
    const [selectedTags, setSelectedTags] = useState([]);

    const [value, setValue] = useState([])
	  const [error, setError] = useState("")
	  const options = skills

    

    useEffect(()=>{
        getWorkJSON()
        getSkillsLIST()
      },[])

    const getWorkJSON=()=>{
        fetch('work.json',{
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        })
        .then(function(response){
            console.log("FETCHING WORK JSON: ", response)
            return response.json();
          })
          .then(function(myJson) {
            // console.log(myJson);
            setWorkJSON(myJson)
          });
      }
    const getSkillsLIST=()=>{
      fetch('skills.json',{
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
          }
      })
      .then(function(response){
          console.log("FETCHING SKILLS JSON: ", response)
          return response.json();
        })
        .then(function(myJson) {
          // const skillset = myJson.map(item => item.skills)
          setSkills(myJson)
        });
    }

    function selectedTagsChange(tags){
      // console.log(tags)
      setSelectedTags(tags)
    }

    return (
        <div className='background' >
          <Navbarr/>
          
          <div className="workContainer">
            {/* <div className="skillsContainer">
                  {skills.map((skill) => (
                    <div className="skill_body" onClick={() => filterChange(skill.id)}>
                      <p className="skill_text">{skill.label}</p>
                    </div>
                  ))}
            </div> */}
            <MultipleSelectChips
              label="Label"
              value={value}
              setValue={setValue}
              options={options}
              error={error}
              setError={setError}
              change={selectedTagsChange}
            />
            <p>{selectedTags}</p>
            <Container >
                <Row className="workContainerROW" >
                {workJSON.map((project) => (
                    <Col className="workContainerCOL" >
                        <div className="projectContainer">
                            <Link
                                to={{
                                    pathname: `/work/${project.id}`,
                                    state: { id: project.id }
                                }}
                                key={project.id}
                            >
                                {/* HI {project.name} */}
                                <img src={project.tag_img} className="projectImage" ></img>
                                <p className="projectCaption">{project.name}</p>
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
export default Work;

class Helpers {
  static contains(orig, filter) {
    let res = filter.map(item => {
      return orig.includes(item);
    });
    return !res.includes(false);
  }
  
  static hasDuplicates(array) {
    return (new Set(array)).size !== array.length;
  }
}
  
