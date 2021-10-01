import React from "react";
import Hero from "../components/Hero";
import Content from "../components/Content";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Container } from "react-bootstrap";

import  lighthouse_art from '../assets/images/lighthouse_digital_art.jpg';
import  samurai_art from '../assets/images/samurai_digital_art.jpg';
import  storefront_art from '../assets/images/storefront_digital_art.jpg';



function DigitalArtPage(props){

   
    return(
        <div>
            
        <Container className="p-0 " fluid={true}>
            <Header/>
            <Hero title={props.title} subTitle={props.subTitle} text={props.text}/>
            <Content>
                <Carousel items={[
                    {
                        id:0,
                        title: 'Lighthouse',
                        imgSrc: lighthouse_art,
                        imgModal: lighthouse_art,
                        link: '_art',
                        selected: false
                    },
                    {
                        id: 1,
                        title: "Samurai",
                        imgSrc: samurai_art,
                        imgModal: samurai_art,
                        link: '_art',
                        selected: false

                    },
                    {
                        id: 2,
                        title: "Store Front",
                        subTitle: 'Work In Progress',
                        imgSrc: storefront_art,
                        imgModal: storefront_art,
                        link:'_art',
                        selected: false

                    }
                ]}/>
               
            </Content>
            <Footer/>
            </Container>
        </div>
    );
}
export default DigitalArtPage;