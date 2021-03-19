import React from 'react';
import './aboutcontent.css';


const AboutContent = ({header, main, sub}) => {
    return (
        <div className='aboutcontent'>
            <div className='aboutcontent__text'>
                <h4 className='aboutcontent__heading'>{header}</h4>
                <h2 className='aboutcontent__main'>{main}</h2>
                <h3 className='aboutcontent__sub'>{sub}</h3>
                <div className='aboutcontent__buttons'>
                    <button className='aboutmore__btn'> Learn More</button>
                    <button className='aboutcontact__btn'> Contact Us</button>
                </div>
            </div>
        </div>
    );
}


export default AboutContent;