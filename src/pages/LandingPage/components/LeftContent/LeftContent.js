import React from 'react';
import './leftcontent.css';
import landing__img from './Assets/landingimg.svg'


const LeftContent = () => {
    return (
        <div className='leftcontent'>
            
            <div className='leftcontent__left'>
                <h2 className='leftcontent__main'>Or get more frequent updates with crowdsourced data</h2>
                <h3 className='leftcontent__sub'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                <button className='leftcontent__btn'> Start Searching </button>
            </div>

            <div className='leftcontent__right'>
            <img src={landing__img} alt='Logo' className='landing__img' draggable='false'/>            
            </div>
            
        </div>
    );
}


export default LeftContent;