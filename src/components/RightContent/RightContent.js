import React from 'react';
import './rightcontent.css';
import landing__img from './Assets/landingimg.svg'


const RightContent = () => {
    return (
        <div className='rightcontent'>
            <div className='rightcontent__left'>
            <img src={landing__img} alt='Logo' className='landing__img' draggable='false'/>            
            </div>
            <div className='rightcontent__right'>
                <h2 className='rightcontent__main'>Get stock data sourced<br/> directly from store managers</h2>
                <h3 className='rightcontent__sub'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                <button className='rightcontent__btn'> Start Searching </button>
            </div>
            
        </div>
    );
}


export default RightContent;