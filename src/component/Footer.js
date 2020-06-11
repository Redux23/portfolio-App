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
                                <a href="tel:+2347030247846"
                                    style={styles}
                                    className=" p-1 mr-2">
                                    <FaPhone />Call Now</a>
                                <br />
                                <a href="#"
                                    style={styles}
                                    className=" p-1" value={{ size: '4rem' }} >
                                    <FaMailBulk />:bo.osuagwu@gmail.com</a>
                            </div>

                            <hr />
                         

                        </Col>
                    </IconContext.Provider>
                    <Col className="p-0 columns" md={3}>
                       <div className="icons-link p-2">
                                <a style={styles} href="https://www.facebook.com/korrage" className=" p-1" target="_blank"><FaFacebookF /></a>
                                <a style={styles} href="https://www.instagram.com/reduxtalk23/" className=" p-1"target="_blank" ><FaInstagram /></a>
                                <a style={styles} href="https://www.linkedin.com/in/bright-osuagwu-7b9bb2129/" className=" p-1" target="_blank"><FaLinkedinIn /></a>
                                <a style={styles} href="https://www.figma.com/file/jl7BBE93GbujgQMNaqt6Os/My-portfolio?node-id=0%3A1" className=" p-1" target="_blank"><FaFigma /></a>
                                <a style={styles} href="https://github.com/Redux23" className=" p-1" target="_blank"><FaGithub /></a>
                            </div>
                    </Col>
                </Row>
            </Container>

        </footer>
    )
}

export default Footer;