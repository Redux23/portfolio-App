import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaFigma, FaGithub, FaPhone, FaMailBulk } from 'react-icons/fa';
import { IconContext } from 'react-icons';



function Footer(props) {
    const styles = {
        fontSize: "20px",
        color: "#000000",
        textDecoration: "none"
    }
    return (
        <footer className="mt-5">
            <Container fluid={true}>
                <Row className="border-top justify-content-between p-3">
                    <IconContext.Provider value={{ size: '2rem' }}>
                        <Col className="p-0 columns" md={3} sm={12}>
                            <div>
                                <a href="#"
                                    style={styles}
                                    className=" p-1 mr-2">
                                    <FaPhone />Phone No: +2347030247846</a>
                                <br />
                                <a href="#"
                                    style={styles}
                                    className=" p-1" value={{ size: '4rem' }} >
                                    <FaMailBulk />:bo.osuagwu@gmail.com</a>
                            </div>

                            <hr />
                            <div className="icons-link p-2">
                                <a style={styles} href="#" className=" p-1" ><FaFacebookF /></a>
                                <a style={styles} href="#" className=" p-1" ><FaInstagram /></a>
                                <a style={styles} href="#" className=" p-1" ><FaLinkedinIn /></a>
                                <a style={styles} href="#" className=" p-1" ><FaFigma /></a>
                                <a style={styles} href="#" className=" p-1" ><FaGithub /></a>
                            </div>

                        </Col>
                    </IconContext.Provider>
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