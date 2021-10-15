import React from 'react';
import Container from "react-bootstrap/Container";
import "./animations/css/Footer.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import linkedin from '../assets/images/linkedin.svg';
import instagram from '../assets/images/instagram.svg'
import youtube from '../assets/images/youtube.svg';
//creating a component file you need to import react and create a function for that component
function Header(){

    //mt -> margin top (automatic space between top and footer in this case)
    //p -> padding
    return(
        <Navbar  className="border-bottom" bg="transparent" expand="lg">
             <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
             <Navbar.Collapse id="navbar-toggle">
             <Col className="p-0 d-flex" md={1} sm={12}>
                        <a href="https://www.linkedin.com/in/rutvik-pandya-uw/" target="_blank">
                            <img className="r-svg"src={linkedin}></img>
                        </a>
                        <a href="https://www.instagram.com/_rutvikp_/" target="_blank">
                            <img className="r-svg"src={instagram}></img>
                        </a>
                        <a href="https://www.youtube.com/channel/UCy_GTm-p1nITBNO4uhydR8w" target="_blank">
                            <img className="r-svg"src={youtube}></img>
                        </a>
            </Col>
               <Nav className="ml-auto">
                 <Link className="nav-link" to="/home">Home</Link>
                 <Link className="nav-link" to="/about">About</Link>
                 <Link className="nav-link" to="/art">My Art</Link>
                 <Link className="nav-link" to="/experience">Experience</Link>
                 <Link className="nav-link" to="/contact">Contact Me</Link>
               </Nav>
             </Navbar.Collapse>
          </Navbar>
    );


}

export default Header;