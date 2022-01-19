import './Welcome.css';
import './Work.css';
import Navbarr from './NavBarr';
import React,{useState,useEffect}  from "react";
import { useLocation, Link } from "react-router-dom";
import {Container, Row, Col} from 'react-bootstrap';
import { XMasonry, XBlock } from "react-xmasonry";

function WorkDetail() {
    const { state } = useLocation();

    const [workDetailJSON, setWorkDetailJSON]=useState([]);
    const [details, setDetails]=useState([]);
    const [skills, setSkills]=useState([]);
    

    useEffect(()=>{
        getWorkDetailJSON()
        
      },[])

    
    const getSkills=(tags)=>{
      fetch('/skills.json',{
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      })
      .then(function(response){
          console.log("FETCHING SKILLS DETAIL RESPONSE: ", response)
          return response.json();
        })
        .then(function(myJson) {
          const filteredData = []
          tags.forEach(element => {
            filteredData.push((myJson.filter(data => data.id===element))[0]) 
          })
          setSkills(filteredData)
          console.log("FETCHING SKILLS JSON: ", filteredData);
          
        });
    }

    const getWorkDetailJSON=()=>{
        fetch('/work.json',{
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        })
        .then(function(response){
            console.log("FETCHING WORK DETAIL RESPONSE: ", response)
            return response.json();
          })
          .then(function(myJson) {
            const filteredData = myJson.filter(data => data.id === state.id) 
            setWorkDetailJSON(filteredData[0])
            setDetails(filteredData[0].details)
            getSkills(filteredData[0].tags)
            console.log("FETCHING WORK DETAIL JSON: ", filteredData);
          
          });
      }

    function RenderDiv(props) {
        const [divDetails, setDivDetails] = useState(props.divDetails);

        return (
            <div className="div_body" >
              {divDetails.div_type=="text" ? 
                <>
                  <p className="div_title_text">{divDetails.div_title}</p>
                  <p className="div_text">{divDetails.div_items}</p>
                </>
                  : null }
              {divDetails.div_type=="image/jpg" ? 
                <>
                  <img src={divDetails.div_items} className="div_image" ></img>
                  <p className="div_title_img">{divDetails.div_title}</p>

                </>
                  : null }    
            </div>
        );
      }

    return (
        <div className='backgroundWorkDetail'>
          <Navbarr/>
          <div className="workContainer">
              <div>
                <p className="date">{workDetailJSON.date}</p>
                <p className="heading">{workDetailJSON.name}</p>
                <p className="caption1">{workDetailJSON.tag_line}</p>
                <p className="summary">{workDetailJSON.summary}</p>
              </div>
              <div className="skillsContainer">
                {skills.map((skill) => (
                  <div className="skill_body">
                    <p className="skill_text">{skill.skills}</p>
                  </div>
                ))}
              </div>
              <XMasonry maxColumns={2} responsive={true} updateOnFontLoad={true} targetBlockWidth={600}>
                {details.map((detail) => (
                      <XBlock >
                        <RenderDiv divDetails={detail}/>
                      </XBlock>
                  ) )}
              </XMasonry>
          </div>
        </div>
    )

}
export default WorkDetail;