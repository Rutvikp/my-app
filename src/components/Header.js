import React from 'react';
import Container from "react-bootstrap/Container";
import "./animations/css/Footer.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
//creating a component file you need to import react and create a function for that component
function Header(){

    //mt -> margin top (automatic space between top and footer in this case)
    //p -> padding
    return(
        <Navbar  className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand> Rutvik Pandya</Navbar.Brand>
             <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
             <Navbar.Collapse id="navbar-toggle">
               <Nav className="ml-auto">
                 <Link className="nav-link" to="/home">Home</Link>
                 <Link className="nav-link" to="/about">About</Link>
                 <Link className="nav-link" to="/projects">Projects</Link>
                 <Link className="nav-link" to="/experience">Experience</Link>
                 <Link className="nav-link" to="/art">My Art</Link>
                 <Link className="nav-link" to="/contact">Contact Me</Link>
               </Nav>
             </Navbar.Collapse>
          </Navbar>
    );


}

export default Header;