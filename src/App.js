import React from 'react';
import {BrowserRouter as Router, Link } from 'react-router-dom';
import './App.css';
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

//my components
import Footer from "./components/Footer";
import Route from "react-router-dom/es/Route";
import HomePage from "./pages/HomePage";
import ExperiencePage from "./pages/ExperiencePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ProjectsPage from "./pages/ProjectsPage";


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "Rutvik",
      headerLinks: [
        {title: 'Home', path: '/'},
        {title: 'About', path: '/'},
        {title: 'Projects', path: '/'},
        {title: 'Experience', path: '/'},
        {title: 'Contact', path: '/'}
      ],
      //home object
      home: {
        title: "Discover ",
        subTitle: "Keep Learning",
        //a little message to check the links
        text: "Explore my page and learn more about me!"
      },
      about: {
        title: "About"
      },
      projects: {
        title: "Projects"
      },
      experience: {
        title: "Experience"
      },
      contact: {
        title: "Contact"
      }


    }


  }



  render() {
    // fluid allows it to fill the screen
    //className is what we use in react
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand> Rutvik Pandya</Navbar.Brand>
             <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
             <Navbar.Collapse id="navbar-toggle">
               <Nav className="ml-auto">
                 <Link className="nav-link" to="/">Home</Link>
                 <Link className="nav-link" to="/about">About</Link>
                 <Link className="nav-link" to="/projects">Projects</Link>
                 <Link className="nav-link" to="/experience">Experience</Link>
                 <Link className="nav-link" to="/contact">Contact Me</Link>
               </Nav>
             </Navbar.Collapse>
          </Navbar>

          {/* whats going on here: using react router to render a specific component based on the path
          The state allows me to pass that data in as props into our pages so that the pages can be function components*/}

          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text}/>}/>
          <Route path="/about" exact render={() => <AboutPage title={this.state.about.title} subtitle={this.state.about.subTitle} text={this.state.about.text}/>}></Route>
          <Route path="/contact" exact render={() => <ContactPage title={this.state.contact.title} subtitle={this.state.contact.subTitle} text={this.state.contact.text}/>}/>
          <Route path="/projects" exact render={() => <ProjectsPage title={this.state.projects.title} subtitle={this.state.projects.subTitle} text={this.state.projects.text}/>}/>
          <Route path="/experience" exact render={() => <ExperiencePage title={this.state.experience.title} subtitle={this.state.experience.subTitle} text={this.state.experience.text}/>}/>

          <Footer/>
        </Container>
      </Router>
      );
  }
}

export default App;
