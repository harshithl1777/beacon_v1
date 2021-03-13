import React from 'react';
import landing__img from './assets/landingimg.svg';
import './landing.css';

const LandingContent = () => {
    return (
        <div className='landing'>
                    <div className='background'></div>

            <div className='landing__left'>
                <h4 className='landing__heading'>MEET BEACON</h4>
                <h2 className='landing__main'>Real-time retail store data<br></br> for consumers in the pandemic </h2>
                <h3 className='landing__sub'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam, quis nostrud exercitation. </h3>

                <form>
                    <input className='landing__email' type="email"placeholder="Enter your email address"  />
                    <button className='landing__submit' type="submit" > Start Searching </button>
                </form>


            </div>
            <div className='landing__right'>
                <img src={landing__img} alt='Logo' className='landing__img' draggable='false'/>
            </div>
        
        </div>
    );
}


export default LandingContent;