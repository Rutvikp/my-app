import React, { useState } from "react";
import FadeIn from '../components/animations/FadeIn';
import Hero from "../components/Hero";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Container } from "react-bootstrap";

import hard_work from '../assets/images/hard_work.jpg';
import street from '../assets/images/Clevelandstreet.jpg'
import myself from '../assets/images/mewithmask.jpg';

function HomePage(props){

    return(
        <div name="test">
            <Container className="p-0 " fluid={true}>

            <Header/>
            <FadeIn>
            <Hero title={props.title} subTitle={props.subTitle} text={props.text}/>
            <Carousel items={[
                {
                    id: 0,
                    title: "Work Experience",
                    subTitle: 'Professional life',
                    imgSrc: hard_work,
                    link:'/experience',
                    selected: false

                },
                {
                    id: 1,
                    title: "My Art",
                    subTitle: "Check out my art!",
                    link: '/art',
                    imgSrc: street,
                    selected: false


                },
                {
                    id: 2,
                    title: "About Me",
                    subTitle: "Get to know me!",
                    link: '/about',
                    imgSrc: myself,
                    selected: false


                }


            ]}/>
            </FadeIn>
            <Footer/>
            </Container>
        </div>
    );
}
export default HomePage;
