import { render } from "@testing-library/react";
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useSpring, animated } from "react-spring";
import FadeIn from "./animations/FadeIn";
import PopUpModal from "./PopUpModal";

function CardInfo(props){

    const style = useSpring({opacity: 1, from: {opacity: 0}});
    const [modalVisible, setModalVisible] = useState(false);
    const [fullscreen, setFullscreen] = useState(true);

    if(props.link.includes('youtube')){
        return(
            <>
        <animated.div className="r-card-info mt-5 " style={style}>
            <p className="r-card-title font-weight-bolder">{props.title}</p>
            <p className="r-card-sub-title font-weight-bolder">{props.subTitle}</p>
            <Button variant="dark" onClick={()=> setModalVisible(true)}>View</Button>
        </animated.div>
        <PopUpModal title={props.title} link={props.link} show={modalVisible} imgModal={props.imgModal}  setModalVisible={setModalVisible} ></PopUpModal>
        
        {/*    for link*/}
        {/*    <a href={props.link} target="_blank" rel="noopener noreferrer">View</a>*/}
        
        </>

        );
        
    }
    else if(props.link.includes("_art")){
        return(
        <>
        <animated.div className="r-card-info mt-5 " style={style}>
            <p className="r-card-title font-weight-bolder">{props.title}</p>
            <p className="r-card-sub-title font-weight-bolder">{props.subTitle}</p>
            <a href="" target="_blank"></a>
            <Button variant="dark" onClick={()=> setModalVisible(true)}>View</Button>
        </animated.div>
        <PopUpModal title={props.title} subTitle={props.subTitle}link={props.link} imgModal={props.imgModal} show={modalVisible} setModalVisible={setModalVisible} fullscreen={fullscreen} setFullscreen= {setFullscreen} imgSrc={props.imgSrc}></PopUpModal>
        
        {/*    for link*/}
        {/*    <a href={props.link} target="_blank" rel="noopener noreferrer">View</a>*/}
        
        </>
        );
    }
    else{
        return(
            <animated.div className="r-card-info mt-5 " style={style}>
                <p className="r-card-title font-weight-bolder">{props.title}</p>
                <p className="r-card-sub-title font-weight-bolder">{props.subTitle}</p>
                <a href={props.link} target="_self" rel="noopener noreferrer">View</a>
            {/*    for link*/}
            {/*    <a href={props.link} target="_blank" rel="noopener noreferrer">View</a>*/}
            </animated.div>
        );
    }
}

export default CardInfo;