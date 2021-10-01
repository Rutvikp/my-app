import React from "react";
import Hero from "../components/Hero";
import Content from "../components/Content";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Container } from "react-bootstrap";

import kariya_video from '../assets/videos/KariyaPark_Trim.mp4';
import tremblant_video from '../assets/videos/MontTremblantFinalNoBars_Trim.mp4';
import bali_picture from '../assets/images/bali_art.jpg';


function DronePage(props){

   
    return(
        <div>
            
        <Container className="p-0 " fluid={true}>
            <Header/>
            <Hero title={props.title} subTitle={props.subTitle} text={props.text}/>
            <Content>
                <Carousel items={[
                    {
                        id:0,
                        title: 'Ontario, Canada',
                        subTitle: 'My First Drone Video!',
                        imgSrc: kariya_video,
                        link: 'https://www.youtube.com/embed/gsNeFNn2wpU',
                        selected: false
                    },
                    {
                        id: 1,
                        title: "Québec, Canada",
                        subTitle: "My Second Drone Video!",
                        link: 'https://www.youtube.com/embed/6JLM8AKBMuQ',
                        imgSrc: tremblant_video,
                        selected: false

                    },
                    {
                        id: 2,
                        title: "Bali, Indonesia",
                        subTitle: 'Coming Fall 2022',
                        imgSrc: bali_picture,
                        link:'/art/drone',
                        selected: false

                    }

                ]}/>
               
            </Content>
            <Footer/>
            </Container>
        </div>
    );
}
export default DronePage;