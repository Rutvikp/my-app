import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//creating a component file you need to import react and create a function for that component
function Footer(){

    //mt -> margin top (automatic space between top and footer in this case)
    //p -> padding
    return(
        <footer className="mt-5">
            <Container fluid={true}>
                <Row className="border-top border-grey justify-content-between p-3">
                    <Col className="p-0" md={3} sm={12}>
                        Rutvik Pandya
                    </Col>
                    <Col className="p-0 d-flex justify-content-end" md={3}>
                        This was made by Rutvik.
                    </Col>
                </Row>
            </Container>
        </footer>
    );


}

export default Footer;