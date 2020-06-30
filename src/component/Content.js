import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import  '../component/Card-style.css'


function Content(props){
    return(
        <Container className="content py-2" fluid={true}>
            <Row className="justify-content-center text-center">
                <Col md={8}>
                {props.children}
                </Col>
            </Row>
        </Container>
    )
}
export default Content