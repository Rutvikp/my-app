import React from "react";
import "./animations/css/Card.css";
import CardInfo from '../components/CardInfo.js'
import FadeIn from '../components/animations/FadeIn';
import VideoHover from "../components/VideoHover";


function Card(props){
   

    if(props.item.imgSrc.includes('.mp4')){
        return(
            <div className="d-inline-block r-card" onClick={(e) => props.click(props.item)} >
                <FadeIn>
                <VideoHover id="lapse-video"  item ={{
                        title: props.item.title,
                        subTitle: props.item.subTitle,
                        imgSrc: props.item.imgSrc,
                        thumbnail: props.item.thumbnail,
                        link:props.item.link,
                }}/>
                {/*if selected will show the details underneath*/}
                {props.item.selected && <CardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link} />}
                </FadeIn>
            </div>
        );
    

    }
    else if(props.item.imgSrc.includes('_art')){
        return(
        <div className="d-inline-block r-card" onClick={(e) => props.click(props.item)}>
            <FadeIn>
            
            <img className="border-radius-small hover r-card-video"  src={props.item.imgSrc} alt={props.item.imgSrc}/>
            {/*if selected will show the details underneath*/}
            {props.item.selected && <CardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link} imgSrc={props.item.imgSrc} imgModal={props.item.imgModal}/>}
            </FadeIn>
        </div>
        );
    }
    else{
    return(
        <div className="d-inline-block r-card" onClick={(e) => props.click(props.item)}>
            <FadeIn>
            
            <img className="border-radius-small hover r-card-image"  src={props.item.imgSrc} alt={props.item.imgSrc}/>
            {/*if selected will show the details underneath*/}
            {props.item.selected && <CardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link} />}
            </FadeIn>
        </div>
    );
    }
}

export default Card;