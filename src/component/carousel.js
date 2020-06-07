import React from 'react';
import Card from '../component/Card'



class Carousel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            item: [
                {
                    id: 1,
                    title: "Meme App Reacjs",
                    subTitle: "Meme generetor web app",
                    imgSrc: "./assets/images/react.png",
                    link: "",
                    isSelected: false
                },
                {
                    id: 2,
                    title: "Quiz Project",
                    subTitle: "Quiz App using vanilla javaScript",
                    imgSrc: "./assets/images/react.png",
                    link: "",
                    isSelected: false
                },
                {
                    id: 3,
                    title: "Todo App",
                    subTitle: "Todo App using vanilla javascript",
                    imgSrc: "./assets/images/react.png",
                    link: "",
                    isSelected: false
                },
                {
                    id: 4,
                    title: "Todo App",
                    subTitle: "Todo App using vanilla javascript",
                    imgSrc: "./assets/images/react.png",
                    link: "",
                    isSelected: false
                },
                {
                    id: 5,
                    title: "Todo App",
                    subTitle: "Todo App using vanilla javascript",
                    imgSrc: "./assets/images/react.png",
                    link: "",
                    isSelected: false
                },
                {
                    id: 6,
                    title: "Todo App",
                    subTitle: "Todo App using vanilla javascript",
                    imgSrc: "./assets/images/react.png",
                    link: "",
                    isSelected: false
                }
            ]


        }
    }
    render() {
        return (
            
           <div className="container-fluid d-flex justify-content-center">
               <div className="row">
                   <div className="col-md-4">
                       <Card  />
                   </div>
                   <div className="col-md-4">
                       <Card/>
                   </div>
                   <div className="col-md-4">
                       <Carousel/>
                   </div>
               </div>
           </div>    
        )
    }
}
export default Carousel;