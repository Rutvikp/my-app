import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";

import FadeIn from '../components/animations/FadeIn';

function PopUpModal(props) {
  const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  useEffect(() => {
    setShow(props.show);
  }, [props.show])
  
    return (
      <>
      <FadeIn>
        <Modal show={show} onHide={() => setShow(false)}>
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
            <Button variant="dark" onClick={() => setShow(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </FadeIn>
      </>
    );
  }
  
  export default PopUpModal;