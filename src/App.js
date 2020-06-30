import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


import './App.css';


import Footer from './component/Footer';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';




class App extends React.Component {
  constructor() {
    super()
    this.state = {
      title: "My portfolio",
      headerLink: [
        { title: 'Home', path: "/" },
        { title: 'About Me', path: "/about" },
        { title: 'Contact', path: "./component/Footer" },
      ],
      home: {
        title: "Welcome to my website.",
        subtitle: `const myName = "Bright";`,
        text: "Check below to see some of my works."
      },
      about: {
        title: `About Me`,

      },
      contact: {
        title: "Contact Me",
      
      },



    }
  }

  render() {

    return (
      <div className="App">
        <header>

        <Router>
          <Container className="p-0" fluid={true}>
            <Navbar className="border-bottom" bg="transparent" expand="lg">
              <a href="/" className="navbar-brand h1">My Portfolio</a>
              <Navbar.Toggle arial-controls="navbar-toggle" />
              <Navbar.Collapse id="navbar-toggle">
                <Nav className="ml-auto">
                  <Link className="nav-link" to="/">Home</Link>
                  <Link className="nav-link" to="/about">About Me</Link>
                  <Link className="nav-link" to="/contact">Contact</Link>


                </Nav>
              </Navbar.Collapse>
            </Navbar>

            <Route path="/" exact render={() => <HomePage
              title={this.state.home.title}
              subtitle={this.state.home.subtitle}
              text={this.state.home.text}
            />} />

            <Route path="/about" render={() => <AboutPage
              title={this.state.about.title} />
            } />

            <Route path="/contact" render={() => <ContactPage
              title={this.state.contact.title} />
            } />




          </Container>
        </Router>
        </header>

            <Footer />
      </div>
    );

  }
}

export default App;
