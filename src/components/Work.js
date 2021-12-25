import React,{useState,useEffect} from 'react';
import './Welcome.css';
import Navbarr from './NavBarr';
import { useLocation, Link } from "react-router-dom";
import './Work.css';
import {Container, Row, Col} from 'react-bootstrap';


function Work() {
    const [workJSON,setWorkJSON]=useState([]);

    useEffect(()=>{
        getWorkJSON()
      },[])

    // useEffect(()=>{
    //   workJSON.map((project) => {
    //     console.log("project", project.id)
    //     })
    // },[workJSON])

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

    return (
        <div className='background' >
          <Navbarr/>
          <div className="workContainer">
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


  
