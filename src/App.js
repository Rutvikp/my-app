import React from 'react';
import {BrowserRouter as Router, Link } from 'react-router-dom';
import './App.css';
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

//my components
import Footer from "./components/Footer";
import { Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ArtPage from "./pages/ArtPage";
import DronePage from "./pages/DronePage";
import ExperiencePage from "./pages/ExperiencePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ProjectsPage from "./pages/ProjectsPage";
import { HashRouter, Redirect } from 'react-router-dom/esm/react-router-dom';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "Rutvik",
      headerLinks: [
        {title: 'Home', path: '/home'},
        {title: 'About', path: '/about'},
        {title: 'Projects', path: '/projects'},
        {title: 'Experience', path: '/experience'},
        {title: 'Art', path: '/art'},
        {title: 'Contact', path: '/contact'}
      ],
      //home object
      home: {
        title: "All About Me ",
        subTitle: "Explore",
        //a little message to check the links
        text: "Explore my page and learn more about me!"
      },
      about: {
        title: "About Me"
      },
      projects: {
        title: "Projects"
      },
      experience: {
        title: "Experience"
      },
      contact: {
        title: "Contact Me"
      },
      art: {
        title: "My Art"
      },
      photography: {
        title: "Photography"
      },
      drone:{
        title: "Drone Videos",
        subTitle: "Filmed on DJI Mavic Mini 2",
        text: "Edited by me in Premiere Pro"
      },
      digitalArt:{
        title: "Digital Art"
      },

    }


  }



  render() {
    // fluid allows it to fill the screen
    //className is what we use in react

    return (
      //hash router helps redirect to desired home page
      
      <Router>

          {/* whats going on here: using react router to render a specific component based on the path
          The state allows me to pass that data in as props into our pages so that the pages can be function components*/}

          <Route exact path="/">
              <Redirect to="/home" /> 
          </Route>

          <Route  path="/home" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text}/>}></Route>
          <Route  path="/about" exact render={() => <AboutPage title={this.state.about.title} subTitle={this.state.about.subTitle} text={this.state.about.text}/>}></Route>
          <Route path="/contact" exact render={() => <ContactPage title={this.state.contact.title} subTitle={this.state.contact.subTitle} text={this.state.contact.text}/>}></Route>
          <Route path="/projects" exact render={() => <ProjectsPage title={this.state.projects.title} subTitle={this.state.projects.subTitle} text={this.state.projects.text}/>}></Route>
          <Route path="/experience" exact render={() => <ExperiencePage title={this.state.experience.title} subTitle={this.state.experience.subTitle} text={this.state.experience.text}/>}></Route>
          <Route path="/art" exact render={() => <ArtPage title={this.state.art.title} subtitle={this.state.art.subTitle} text={this.state.art.text}/>}></Route>
          <Route  path="/art/drone" exact render={() => <DronePage title={this.state.drone.title} subTitle={this.state.drone.subTitle} text={this.state.drone.text}/>}></Route>

      </Router>
      );
  }
}

export default App;
