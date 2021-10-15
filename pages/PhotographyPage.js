import React from "react";
import Hero from "../components/Hero";
import Content from "../components/Content";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Container } from "react-bootstrap";

import kariya_video from '../assets/videos/KariyaPark_Trim.mp4';
import  view1_crop_art from '../assets/images/view1_crop_art.jpg';
import  view1_art from '../assets/images/view1_art.jpg';
import bali_picture from '../assets/images/bali_art.jpg';
import rue_art from '../assets/images/rue_art.jpg'
import rue_crop_art from '../assets/images/rue_crop_art.jpg'
import car_street_art from '../assets/images/car_street_art.jpg'
import car_street_crop_art from '../assets/images/car_street_crop_art.jpg'
import arcade_art from '../assets/images/arcade_art.jpeg'
import arcade_crop_art from '../assets/images/arcade_crop_art.jpeg'
import disney_art from '../assets/images/disney_art.jpg'
import disney_crop_art from '../assets/images/disney_crop_art.jpg'
import cherry_art from '../assets/images/cherry_art.jpg'
import cherry_crop_art from '../assets/images/cherry_crop_art.jpg'


function PhotographyPage(props){

   
    return(
        <div>
            
        <Container className="p-0 " fluid={true}>
            <Header/>
            <Hero title={props.title} subTitle={props.subTitle} text={props.text}/>
            <Content>
                <Carousel items={[
                    {
                        id:0,
                        title: 'Rue du Petit Champlain',
                        subTitle: 'Québec City, Québec',
                        imgSrc: rue_crop_art,
                        imgModal: rue_art,
                        link: '_art',
                        selected: false
                    },
                    {
                        id: 1,
                        title: "Jardin Botanique",
                        subTitle: "Montreal, Canada",
                        imgSrc: view1_crop_art,
                        imgModal: view1_art,
                        link: '_art',
                        selected: false

                    },
                    {
                        id: 2,
                        title: "Fairmont Le Château Frontenac",
                        subTitle: 'Québec City, Québec',
                        imgSrc: car_street_crop_art,
                        imgModal: car_street_art,
                        link:'_art',
                        selected: false

                    },
                    {
                        id: 3,
                        title: "The Arcade",
                        subTitle: 'Cleveland, Ohio',
                        imgSrc: arcade_crop_art,
                        imgModal: arcade_art,
                        link:'_art',
                        selected: false

                    },
                    {
                        id: 4,
                        title: "Walt Disney World® Resort",
                        subTitle: 'Orlando, Florida',
                        imgSrc: disney_crop_art,
                        imgModal: disney_art,
                        link:'_art',
                        selected: false

                    },
                    {
                        id: 5,
                        title: "Cherry Blossom",
                        subTitle: 'Toronto, Ontario',
                        imgSrc: cherry_crop_art,
                        imgModal: cherry_art,
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
export default PhotographyPage;