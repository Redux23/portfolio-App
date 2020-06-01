import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Footer() {
    return (
        <footer className="mt-5">

            <Container fluid={true}>
                <Row className="border-top justify-content-between p-3">
                    <Col className="p-0 columns" md={3} sm={12}>
                     <h2>This is where the social media links will be put.</h2>
                    </Col>

                    <Col className="p-0 columns" md={3}>
                     <p>Contact me:</p>
                     <input 
                     type="email" 
                     placeholder="example@email.com"
                     />
                     <br />
                     <textarea 
                     type="text" 
                     placeholder="Write message here..."
                     />
                    </Col>
                </Row>
            </Container>

        </footer>
    )
}

export default Footer;