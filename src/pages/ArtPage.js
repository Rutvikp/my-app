import React from "react";
import Hero from "../components/Hero";
import Carousel from "../components/Carousel";
import "./css/ArtPage.css";
import VideoOverlay from "../components/VideoHover";
import Content from "../components/Content";
import Footer from "../components/Footer";
import Header from "../components/Header";


import creative from '../assets/images/creative.jpg'
import samurai_lapse from '../assets/videos/SamuraiLapse.mp4';
import drone_video from '../assets/videos/MontTremblantFinalNoBars_Trim.mp4';
import store_lapse from '../assets/videos/Storelapse.mp4';
import picture_quebec from '../assets/images/picture_quebec.jpeg';
import samurai_image from '../assets/images/SamuraiImage.jpg'
import { Container } from "react-bootstrap";


function ArtPage(props){

    
    return(
        <div>
            
        <Container className="p-0 " fluid={true}>
            <Header/>
            <Hero title={props.title} style={{color: "white"}}/>
            <Content>
            <Carousel items={[
                 {
                    id:0,
                    title: 'Photography',
                    subTitle: 'Some of my clicks!📸',
                    imgSrc: creative,
                    link: '/Projects',
                    selected: false
                },
                {
                    id: 1,
                    title: "Drone Videos",
                    subTitle: "Check out my drone videos!🚁",
                    link: '/art/drone',
                    imgSrc: drone_video,
                    selected: false


                },
                {
                    id: 2,
                    title: "Digital Art",
                    subTitle: 'Some of my art work from procreate!🖊',
                    imgSrc: store_lapse,
                    link:'/Experience',
                    selected: false

                }

                
            ]}/>
    
         
            </Content>
            <Footer/>
            </Container>
        </div>
    );
}
export default ArtPage;
