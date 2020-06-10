import React from 'react'
import Form from 'react-bootstrap/Form'
import Hero from '../component/Hero';
import Content from '../component/Content';
import Button from 'react-bootstrap/Button';




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

    handleChange(e){
     const {name, value, type, checked} = e.target;
     this.setState({
        [name]: value
     })

    }

    handleSubmit(e){
     e.preventDefault();

    }

    render() {
        return (
            <div >
                <Hero title={this.props.title} />
                <Content>
                    <Form onSubmit={this.handelSubmit}>
                        <Form.Group >
                            <Form.Label htmlFor="full-name">Full Name</Form.Label>
                            <Form.Control
                             id="full-name" 
                             name="name" 
                             type="text" 
                             value={this.state.name}
                             placeholder="First and Last name"
                             onChange={this.handleChange}/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor="email">Email</Form.Label>
                            <Form.Control 
                            id="email" 
                            name="email" 
                            type="email" 
                            value={this.state.email}
                            placeholder="example@email.com"
                            onChange={this.handleChange}/>
                        </Form.Group>
                        
                        <Form.Group>
                            <Form.Label htmlFor="message">Message</Form.Label>
                            <Form.Control 
                            id="message" 
                            name="message" 
                            as="textarea" 
                            value={this.state.message} 
                            rows="3" 
                            placeholder="Write a message..."
                            onChange={this.handleChange}/>
                        </Form.Group>

                        <Button className="d-inline-block" variant="primary" type="submit" disabled={this.state.disabled} >
                            Send
                            </Button>
                            {this.state.emailSent === true && <p className="d-inline succuess-msg">Your Message has ben sent!</p>}
                            {this.state.emailSent === false && <p className="d-inline err-msg">Error! Message did not send.</p>}

                    </Form>
                </Content>
            </div>
        )

    }
}


export default ContactPage;


