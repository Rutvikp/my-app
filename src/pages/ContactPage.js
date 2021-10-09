import React from "react";
import Hero from "../components/Hero";
import Content from "../components/Content";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Container, Form } from "react-bootstrap";
import ContactForm from "../components/ContactForm";

function ContactPage(props){

   
    return(
        <div>
            
            <Container className="p-0 " fluid={true}>
                <Header/>
                <Hero title={props.title}/>
                <Content>
                    <ContactForm></ContactForm>
                </Content>
                <Footer/>
            </Container>
        </div>
    );
}
export default ContactPage;
