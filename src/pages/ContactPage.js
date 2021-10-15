import React from "react";
import Hero from "../components/Hero";
import Content from "../components/Content";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Container, Form } from "react-bootstrap";
import ContactForm from "../components/ContactForm";
import FadeIn from "../components/animations/FadeIn";

function ContactPage(props){

   
    return(
        <div>
            
            <Container className="p-0 " fluid={true}>
                <Header/>
                <Hero title={props.title}/>
                <Content>
                    <FadeIn>
                        <h5 className="font-weight-lighter"> If you wish to contact me, you can reach me right from here! I am also open to drone filming work!</h5>
                    </FadeIn>
                    <ContactForm></ContactForm>
                </Content>
                <Footer/>
            </Container>
        </div>
    );
}
export default ContactPage;
