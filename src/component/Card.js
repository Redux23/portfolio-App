import React from 'react';
// import react from '../assets/images/react.png';


function Card(props) {
    return (

        <div className="card text-center">
            <div className="overflow">
                <img src={props.imgSrc} alt="react-logo" /*className="card-img-top"*//>
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">{props.title}</h4>
    <p className="card-text text-secondary">{props.subTitle}</p>
                <a href="#" className="btn btn-dark btn-lg">Go Anywhere</a>
            </div>
        </div>
    )
}
export default Card;