import React from "react";
import { Container, Jumbotron } from "react-bootstrap";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../index.css";
import FadeIn from "./animations/FadeIn.js";

function Hero({ title, subTitle, text }) {
  // Need to format to a jumbotron from react
  return (
    <FadeIn>
      <Jumbotron className="bg-transparent">
        <Container>
          <Row>
            <Col>
              {title && <h1>{title}</h1>}
              {subTitle && <h5>{subTitle}</h5>}
              {text && <h6>{text}</h6>}
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </FadeIn>
  );
}

export default Hero;
