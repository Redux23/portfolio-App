import React from 'react'
import Form from 'react-bootstrap/Form'
import Hero from '../components/Hero';
import Content from '../components/Content';
import Button from 'react-bootstrap/Button';
import '../App.css';
import Axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NewsFeed from '../components/newsfeed';






class ContactPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            email: "",
            message: "",
            disabled: false,
            emailSent: null,
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })

    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            disabled: true
        });

        Axios.post('http://localhost:8100/api/email', this.state)
            .then(res => {
                if (res.data.success) {
                    this.setState({
                        disabled: false,
                        emailSent: true
                    });

                } else {
                    this.setState({
                        disabled: false,
                        emailSent: false
                    });
                }
            })
            .catch(err => {
                this.setState({
                    disabled: false,
                    emailSent: false
                })
            })

    }

    render() {
        return (
            <div >
                <div>
                    <Hero title={this.props.title} />
                </div>

                <div>

                    <Content>
                        <Row>
                            <Col>

                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group className="form-input">
                                        <Form.Label htmlFor="full-name">Full Name</Form.Label>
                                        <Form.Control
                                            id="full-name"
                                            name="name"
                                            type="text"
                                            value={this.state.name}
                                            placeholder="First and Last name"
                                            onChange={this.handleChange} />
                                    </Form.Group>

                                    <Form.Group className="form-input">
                                        <Form.Label htmlFor="email">Email</Form.Label>
                                        <Form.Control
                                            id="email"
                                            name="email"
                                            type="email"
                                            value={this.state.email}
                                            placeholder="example@email.com"
                                            onChange={this.handleChange} />
                                    </Form.Group>

                                    <Form.Group className="form-input">
                                        <Form.Label htmlFor="message">Message</Form.Label>
                                        <Form.Control
                                            id="message"
                                            name="message"
                                            as="textarea"
                                            value={this.state.message}
                                            rows="3"
                                            placeholder="Write a message..."
                                            onChange={this.handleChange} />
                                    </Form.Group>

                                    <Button className="d-inline-block" variant="primary" type="submit" disabled={this.state.disabled} >
                                        Send
                            </Button>
                                    {this.state.emailSent === true && <p className="d-inline success-msg">Your Message has ben sent!</p>}
                                    {this.state.emailSent === false && <p className="d-inline err-msg">Error! Message did not send.</p>}

                                </Form>
                            </Col>

                            <Col>

                                <NewsFeed />

                            </Col>
                        </Row>
                    </Content>
                </div>


            </div>
        )

    }
}


export default ContactPage;


