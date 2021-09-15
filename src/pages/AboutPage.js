import React from "react";
import Hero from "../components/Hero";
import Content from "../components/Content";
import FadeIn from "../components/animations/FadeIn";
import myself from '../assets/images/jardinbotanique.jpeg';
import "./css/AboutPage.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Container } from "react-bootstrap";

function AboutPage(props){

    return(
        
        <div>
            
        <Container className="p-0 " fluid={true}>
            <Header/>
            <Hero title={props.title}/>
            <Content>
                <FadeIn>
                <img className="profile-size hover"  src={myself}></img>
                <h6> Hi! </h6>
                <br></br>
                <h5>I am a soon to be graduate from the Universtity of Waterloo! I love trying out new things and have thus increased my hobbies to a ridiculous amount! 
                Some of my many hobbies include photography, digital art, creating/editing drone videos and riding around my longboard. </h5>
                <br></br>
                <h4>I have had a wide variety of experiences from my past internships. In the past, 
                    I have worked as an automation engineer at Loopio, Inc. where I gained a better appreciation 
                    for the required robustness of applications. Most recently, I have worked as a Software Developer at Ansys, Inc. 
                    where I had the opportunity to work on the Account and Store side.</h4>
                
                </FadeIn>
            </Content>
            <Footer/>
        </Container>
        </div>
    );
}
export default AboutPage;
