import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      title: "My portfolio",
      headerLink: [
        { title: 'Home', path: "/" },
        { title: 'About Me', path: "/about" },
        { title: 'Contact Me', path: "/contact" },
      ],
      home: {
        title: "welcome to my website",
        subtitle: `const myName = "Bright Osuagwu"; I am  a Frontend
         Developer Web Developer with skills that connect
        like a hook`,
        text: "click below to see some of my works."

      },
      about: {
        title: "welcome to my website",
      },
      contact: {
        title: "welcome to my website",
      }


    }
  }

  render() {

    return (
      <div className="App">
        <Router>
          <Container className="p-0" fluid={true}>

            <Navbar className="border-bottom" bg="transparent" expand="lg">
              <Navbar.Brand>My Portfolio</Navbar.Brand>

              <Navbar.Toggle arial-controls="navbar-toggle" />
              <Navbar.Collapse id="navbar-toggle">
                <Nav>
                  <Link className="nav-link" to="/">Home</Link>
                  <Link className="nav-link" to="/about">About Me</Link>
                  <Link className="nav-link" to="/contact">Contact</Link>
                </Nav>


              </Navbar.Collapse>

            </Navbar>

          </Container>
        </Router>
      </div>
    );

  }
}

export default App;
