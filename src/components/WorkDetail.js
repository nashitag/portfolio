import './Welcome.css';
import Navbarr from './NavBarr';
import React,{useState,useEffect}  from "react";
import { useLocation, Link } from "react-router-dom";

function WorkDetail() {
    const { state } = useLocation();

    const [workDetailJSON, setWorkDetailJSON]=useState([]);

    useEffect(()=>{
        getWorkDetailJSON()
      },[])

    const getWorkDetailJSON=()=>{
        fetch('/work.json',{
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        })
        .then(function(response){
            console.log("FETCHING WORK DETAIL JSON: ", response)
            return response.json();
          })
          .then(function(myJson) {
            const filteredData = myJson.filter(data => data.id === state.id) 
            setWorkDetailJSON(filteredData)
            console.log(filteredData);
          });
      }

    return (
        <div className='background' >
          <Navbarr/>
          <div>
              HI HI {state.id}
          </div>
        </div>
    )

}
export default WorkDetail;