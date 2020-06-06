import React from 'react';
import Card from './Card'



class Carousel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            item: [
                {
                    id: 1,
                    title: "Meme App Reacjs",
                    subTitle: "Meme generetor web app",
                    imgScr: "",
                    link: "",
                    isSelected: false
                },
                {
                    id: 2,
                    title: "Quiz Project",
                    subTitle: "Quiz App using vanilla javaScript",
                    imgScr: "",
                    link: "",
                    isSelected: false
                },
                {
                    id: 3,
                    title: "Todo App",
                    subTitle: "Todo App using vanilla javascript",
                    imgScr: "",
                    link: "",
                    isSelected: false
                }
            ]


        }
    }
    render() {
        return (
            
           <div>
               <Card/>
           </div>    
        )
    }
}
export default Carousel;