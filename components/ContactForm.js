import React, { useState } from "react";
import emailjs from "emailjs-com";
import {Button, Container, Form, FormControl, FormGroup, FormLabel, Jumbotron, Modal} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import '../index.css';
import FadeIn from "./animations/FadeIn";

function ContactForm(props){
    function sendEmail(e){
        e.preventDefault();
        emailjs.sendForm('service_gzhb5uj', 'template_7vhlsjd', e.target, 'user_fDU55kSpP1o6o3Rv7ddp4')
          .then((result) => {
              console.log(result.text);
              return(
                  <Modal>
                      <Modal.Header closeButton>
                        <Modal.Title>Send Request</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                          Successfully sent!
                      </Modal.Body>
                  </Modal>
              );
          }, (error) => {
              console.log(error.text);
              return(
                <Modal>
                    <Modal.Header closeButton>
                      <Modal.Title>Send Request</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Error: {error.text};
                    </Modal.Body>
                </Modal>
              );
          });
          e.target.reset();
    }


   
        return(
            <FadeIn>
                <Form class="contact-form" onSubmit={sendEmail}>
                    <FormGroup className="mt-5" controlId="headerInfo">
                        <FormLabel>Email Address</FormLabel>
                        <FormControl type="email" id="email" name="email" placeholder="Your email here." required/>
                        <FormLabel>Subject</FormLabel>
                        <FormControl type="subject" id="subject" name="subject" placeholder="Subject" required/>
                    </FormGroup>

                    <FormGroup className="mt-5" controlId="messageBody">
                        <FormLabel>Message </FormLabel>
                        <FormControl as="textarea" id="message" name="message" placeholder="Message" rows={3} required/>
                    </FormGroup>

                    <Button variant="dark" type="submit" value="Send">
                        Submit
                    </Button>

                </Form>
            </FadeIn>
        );
    }
    
    export default ContactForm;