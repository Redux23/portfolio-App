import React from 'react';
import Card from '../component/Card';
import '../component/Card-style.css';

import html5 from '../assets/images/html5.png';
import javascript from '../assets/images/javascript.png';
import css_img from '../assets/images/css_img.png';
import react from '../assets/images/react.png';
import hashtag from '../assets/images/hashtag.png';


class Carousel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [
                {
                    id: 1,
                    title: "Meme-Generator",
                    subTitle: "Meme Generator App from Meme API, React.js and CSS",
                    imgSrc: react,
                    link: "https://github.com/Redux23/Meme-Generator",
                    isSelected: false
                },
                {
                    id: 2,
                    title: "Employee Details Management",
                    subTitle: "Employee management system using C#, ASP.NET MVC ",
                    imgSrc: hashtag,
                    link: "https://github.com/Redux23/EmployeeAccountManager",
                    isSelected: false
                },
                {
                    id: 3,
                    title: "Todo App",
                    subTitle: "Todo-List App using HTML, CSS & vanilla javascript",
                    imgSrc: javascript,
                    link: "https://github.com/Redux23/To-do-list",
                    isSelected: false
                },
                {
                    id: 4,
                    title: "Quiz-App",
                    subTitle: "A simple Quiz App with objective options.",
                    imgSrc: javascript,
                    link: "https://github.com/Redux23/quiz-project",
                    isSelected: false
                },
                {
                    id: 5,
                    title: "Elegant Blur-UI",
                    subTitle: "Responsive Html and CSS landing page with a blur banner background on hover.",
                    imgSrc: css_img,
                    link: "https://redux23.github.io/Elegant-Blur-UI/",
                    isSelected: false
                },
                {
                    id: 6,
                    title: " HTML & CSS Static Page",
                    subTitle: `Built a static Sign-up and Sign-in page with
                     link buttons Using HTML and CSS`,
                    imgSrc: html5,
                    link: "https://redux23.github.io/form/index",
                    isSelected: false
                }
            ]


        }
        
    }

    handleCardClick(id) {
        let items = [...this.state.items];
        items[id].isSelected = items[id].isSelected ? false : true;

        items.forEach(item => {
            if (item.id !== id) {
                item.isSelected = false;
            }
        });

        this.setState({
            items
        })
    }

    createItems = (items) => {
        return items.map(item => {
            return <Card 
            item={item} 
            onClick={(e => { this.handleCardClick(item.id, e) })} 
            key={item.id}
            className="col-md-8 box"
            
             />
        })
    }

    render() {
        
        return (

            <div  className="container-fluid">
                <div  className="row grid">
                        {this.createItems(this.state.items)}
                </div>
            </div>
        )
    }
}
export default Carousel;