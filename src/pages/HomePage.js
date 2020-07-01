import React from 'react';
import Hero from '../components/Hero';
import Carousel from '../components/Carousel';

function HomePage(props) {
   
    
    return (
        <div>
            <div>
            <Hero
                title={props.title}
                subtitle={props.subtitle}
                text={props.text}
            />

            </div>

            <div>
             <Carousel />

            </div>
            

        </div>

    )
}

export default HomePage;