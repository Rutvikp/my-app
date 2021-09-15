import React from "react";
import Hero from "../components/Hero";
import Content from "../components/Content";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Container } from "react-bootstrap";

function ProjectsPage(props){

    return(
        <div>
            <Container className="p-0 " fluid={true}>
                <Header/>
                <Hero title={props.title}/>
                <Content>
                    Hello
                </Content>
                <Footer/>
            </Container>
        </div>
    );
}
export default ProjectsPage;
