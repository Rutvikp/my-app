import React, {useState} from "react";
import {Container, Jumbotron} from "react-bootstrap";
import Fade from "react-bootstrap/Fade";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import '../index.css';
import CSSTransition from "react-transition-group/CSSTransition";


function Hero(props){
    const[inProp] = useState(true);
// Need to format to a jumbotron from react
    return(
        <CSSTransition in={inProp} timeout={200} classNames="my-node">
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
        </CSSTransition>
    );

}

export default Hero;