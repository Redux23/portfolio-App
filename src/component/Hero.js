import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Hero(props) {

    return (
        <Jumbotron className="bg-transparent jumbotron-fluid p-0">
            <Container fluid={true} >
                <Row className="justify-content-center p-5">
                    <Col md={8} sm={12} className="text-center">
                        {props.title && <h1 className="display-1 font-weight-bolder">{props.title}</h1>}
                        {props.subtitle && <h3 className="display-4">{props.subtitle}</h3>}
                        {props.text && <h4 className="font-weight-light">{props.text}</h4>}
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    )
}
export default Hero