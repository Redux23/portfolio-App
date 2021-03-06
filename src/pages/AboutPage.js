import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';
import bright from '../assets/images/bright.jpg';
import BO_CV from '../assets/images/BO_CV.pdf';
import '../App.css';



function AboutPage(props) {


  return (

    <div >
      <div >
        <img className="img" src={bright} alt="my logo" />
      </div>

      <Hero title={props.title} style={{color: 'midnightblue', fontSize: '40px', margin: '-40px'}}/>
      <Content>
        <p>
          Graduate of the All Nations University College, Ghana.Studied Business Administration with
          a major in Human Resource Management. Always had a
          flare for creative art. Acquired a certification in Full-Stack Web
          Development at NESA By Makers Institute with a focus onFront-End technologies. My stacks are;
          HTML | CSS | Bootstrap | javaScript | React.js | Angular.js | Figma | PixLr
              </p>

      </Content>

      <div className="button  text-center">
        <a href={BO_CV} className="btn btn-dark btn-lg mr-3 text-light" download>Download CV</a>
        <a href={BO_CV} className="btn btn-success btn-lg text-light" target="_blank" rel="noopener noreferrer">View CV</a>
      </div>
    </div>
  )
}
export default AboutPage;

