import React from "react";
import Hero from "../components/Hero";
import Content from "../components/Content";
import Header from "../components/Header";
import { Container } from "react-bootstrap";

function ExperiencePage(props){

    return(
        <div>
            
        <Container className="p-0 " fluid={true}>
            <Header/>
            <Hero title={props.title}/>
            <Content>
                Hello

            </Content>
            </Container>
        </div>
    );
}
export default ExperiencePage;
