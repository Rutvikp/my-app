import React, {useState} from "react";
import {Container, Jumbotron} from "react-bootstrap";
import Fade from "react-bootstrap/Fade";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import '../index.css';
import FadeIn from "./animations/FadeIn";


function Hero(props){
    const[inProp] = useState(true);
// Need to format to a jumbotron from react
    return(
        <FadeIn>
            <Jumbotron classNames="bg-transparent">
            <Container>
                <Row>
                    <Col>
                        { props.title && <h1>{props.title}</h1>}
                        { props.subTitle && <h5>{props.subTitle}</h5>}
                        { props.text && <h6>{props.text}</h6>}
                    </Col>
                </Row>
            </Container>
            </Jumbotron>
        </FadeIn>
    );
}

export default Hero;