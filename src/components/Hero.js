import React from "react";
import {Container, Jumbotron} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import '../index.css';
import FadeIn from "./animations/FadeIn";


function Hero(props){
// Need to format to a jumbotron from react
    return(
        <FadeIn>
            <Jumbotron className="bg-transparent jumbotron-fluid p-0">
            <Container>
                <Row className="justify-content-end py-5">
                    <Col md={8} sm={12}>
                        <FadeIn>
                        { props.title && <h1 className="display-1 font-weight-bolder">{props.title}</h1>}
                        { props.subTitle && <h3 className="display-4 font-weight-light">{props.subTitle}</h3>}
                        { props.text && <h3 className="lead font-weight-light">{props.text}</h3>}
                        </FadeIn>
                    </Col>
                </Row>
            </Container>
            </Jumbotron>
        </FadeIn>
    );
}

export default Hero;