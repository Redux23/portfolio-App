import React from 'react';
import '../component/Card-style.css';



function Card(props) {
     return (

        <div  className="card text-center">
            <div className="overflow">
                <img src={props.item.imgSrc} alt="logos" className="card-img-top" />
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">{props.item.title}</h4>
                <p className="card-text text-secondary">{props.item.subTitle}</p>
                <a href={props.item.link} className="btn btn-dark btn-lg" target="_blank">Click Me</a>
            </div>
        </div>
    )
}
export default Card;