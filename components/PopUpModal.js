import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";

import "./animations/css/Card.css";
import FadeIn from '../components/animations/FadeIn';

function PopUpModal(props) {
  
  function handleFullscreen(){
    props.setFullscreen(true);
    props.setModalVisible(false);
  }
  if(props.link.includes('youtube')){
    return (
      <>
      <FadeIn>
        <Modal show={props.show} onHide={() => props.setModalVisible(false)}>
          <Modal.Header closeButton>
            <Modal.Title>{props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <iframe width="470" height="315" src={props.link} 
          title="YouTube video player" frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen={true}></iframe>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="dark" onClick={() => props.setModalVisible(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </FadeIn>
      </>
    );
  }

  else if(props.link.includes('_art')){
    
    return (
      <>
      <FadeIn>
        <Modal show={props.show} fullscreen={true}  onHide={() =>handleFullscreen()}>
          <Modal.Header closeButton>
            <Modal.Title>{props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
         <img width="100%" height="100%" src={props.imgModal} className="img-in-modal hover-lg" />

          </Modal.Body>
          <Modal.Footer>
            <Button variant="dark" onClick={() => props.setModalVisible(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </FadeIn>
      </>
    );
  }
  }
  
  export default PopUpModal;