import React,{useState,useEffect} from 'react';
// import './Welcome.css';
import Navbarr from './NavBarr';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useLocation, Link } from "react-router-dom";
import './Awards.css';
import {Modal, Button} from 'react-bootstrap';
import MultipleSelectChips from './MultipleSelectChips';
import gtag from 'ga-gtag';

function Awards() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    function elementClicked(e){
        console.log(e.target)
        setShow(!show);
    }
    return (
        <div className='background' >
          <Navbarr/> 
          <div className="awards">
          <VerticalTimeline lineColor="grey" >
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    // contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', border: '2px solid rgb(33, 150, 243)', borderRadius: '15% 15% 15% 15% / 12% 10% 10% 10%' }}
                    // contentArrowStyle={{ borderRight: '6px solid  rgb(33, 150, 243)' }}
                    date="2020"
                    iconClassName="iconStyleDark"
                    // icon={<WorkIcon />}
                >
                    <h4 className="vertical-timeline-element-subtitle">CEOx1Day (CEO for a Day)</h4>
                    <h6 className="vertical-timeline-element-text">
                     <a href="https://www.odgersberndtson.com/en-sg/ceox1day/news-and-media/13-university-students-selected-for-ceox1day-2019-2020">1 of 13 finalists as Singapore’s most promising future leaders for year 2020.</a> CEOx1Day (CEO for a Day) matches students with top CEOs in Singapore, providing them with the opportunity to walk in the shoes of a CEO for a full day. 
                    </h6>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    // contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', border: '2px solid rgb(33, 150, 243)', borderRadius: '15% 15% 15% 15% / 12% 10% 10% 10%' }}
                    // contentArrowStyle={{ borderRight: '6px solid  rgb(33, 150, 243)' }}
                    date="2019-2020"
                    iconClassName="iconStyleDark"
                    // icon={<WorkIcon />}
                >
                    <h4 className="vertical-timeline-element-subtitle">Singapore University of Technology and Design Honors List</h4>
                    <h6 className="vertical-timeline-element-text">
                     for <a href="https://istd.sutd.edu.sg/education/undergraduate/honours-list/">2019 (Junior)</a> and <a href="https://istd.sutd.edu.sg/education/undergraduate/honours-list/">2020 (Senior)</a> Year
                    </h6>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    // contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', border: '2px solid rgb(33, 150, 243)', borderRadius: '15% 15% 15% 15% / 12% 10% 10% 10%' }}
                    // contentArrowStyle={{ borderRight: '6px solid  rgb(33, 150, 243)' }}
                    date="2017"
                    iconClassName="iconStyleDark"
                    // icon={<WorkIcon />}
                >
                    <h4 className="vertical-timeline-element-subtitle">Al Alfiya Award for Best Pupil</h4>
                    <h6 className="vertical-timeline-element-text">
                    at The Millennium School Dubai, UAE
                    </h6>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    // contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', border: '2px solid rgb(33, 150, 243)', borderRadius: '15% 15% 15% 15% / 12% 10% 10% 10%' }}
                    // contentArrowStyle={{ borderRight: '6px solid  rgb(33, 150, 243)' }}
                    date="2017"
                    iconClassName="iconStyleDark"
                    // icon={<WorkIcon />}
                >
                    <h4 className="vertical-timeline-element-subtitle">H.H. Sheikha Fatima Bint Mubarak Award for Excellence</h4>
                    <h6 className="vertical-timeline-element-text">
                    under the patronage of H.E. Sheikh Nahyan bin Mubarak Al Nahyan (Cabinet Member and Minister of Culture and Knowledge Development)
                    </h6>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    // contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', border: '2px solid rgb(33, 150, 243)', borderRadius: '15% 15% 15% 15% / 12% 10% 10% 10%' }}
                    // contentArrowStyle={{ borderRight: '6px solid  rgb(33, 150, 243)' }}
                    date="2015"
                    iconClassName="iconStyleDark"
                    // icon={<WorkIcon />}
                    // onTimelineElementClick={elementClicked}
                >
                    <h4 className="vertical-timeline-element-subtitle">TEDx Speaker at TEDxOOBSchools, Dubai</h4>
                    <h6 className="vertical-timeline-element-text">
                        DISCERNING FANTASY FROM REALITY: <a href="https://goo.gl/hKmjRY">Click here to watch the video</a>
                    </h6>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2014"
                    iconClassName="iconStyleDark"
                    // icon={<WorkIcon />}
                >
                    {/* <h3 className="vertical-timeline-element-title">Art Director</h3> */}
                    <h4 className="vertical-timeline-element-subtitle">Hamdan Bin Rashid Al Maktoum Award for Distinguished Academic Performance</h4>
                    <h6 className="vertical-timeline-element-text">
                    under the patronage of H.E. Hamdan Bin Rashid Al Maktoum (Deputy Ruler of Dubai - UAE Minister of Finance)
                    </h6>
                </VerticalTimelineElement>
            </VerticalTimeline>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                
                
                </Modal.Footer>
            </Modal>
          </div>
        </div>
    );
}
export default Awards;