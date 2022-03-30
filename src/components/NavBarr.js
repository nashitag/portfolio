import { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Welcome.css';
import useMediaQuery from '@mui/material/useMediaQuery';

function Navbarr() {

    const matches = useMediaQuery('(min-width:600px)');

    return (
        <Navbar variant="light" bg="transparent" expand="md" sticky="top">
        <Container >
            
            <Navbar.Brand style={{marginLeft:matches?0:'8vw'}} href="/" className="font-weight-light">Nashita Abd</Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto" >
                    <Nav.Link href="/work"  style={{backgroundColor:matches?'transparent':'#f4f4f4'}}>Work</Nav.Link>
                    {/* <Nav.Link href="/education" style={{backgroundColor:matches?'transparent':'#f4f4f4'}}>Education & Certifications</Nav.Link> */}
                    {/* <Nav.Link href="/experience">Experiec</Nav.Link> */}
                    <Nav.Link href="/awards" style={{backgroundColor:matches?'transparent':'#f4f4f4'}}>Awards & Achievements</Nav.Link>
                    <Nav.Link href="resume-2022-v2.pdf" download style={{backgroundColor:matches?'transparent':'#f4f4f4'}}>Resume</Nav.Link>
                    {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown> */}
                </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
}

export default Navbarr;