import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      title: "My Portfolio",
      headerLinks: [
        {title: "Home", path: "/" },
        {title: "About", path: "/about" },
        {title: "Contact", path: "/contact" }
      ],
      home: {
        title: "Welcome to my website.",
        subtitle: `const myName = "Bright Osuagwu; 
        I am a Frontend Web Developer with skills 
        that connect like a hook`,
        text: "Check below to see some of my works"
      },
      about: {
        imgUrl: "",
        title: "About Me"
      },
      contact: {
        title: "conatct me"
      }

    }


  }
  render(){

    return (
      <div className="App">
      <h1>This is my project</h1>
      </div>
    );

  }
}

export default App;
