import React from 'react';
import logo from './Assets/beacon-logo.svg';
import './aboutnavBar.css'

const AboutNavBar = () => {
    return (
        <div className='aboutnavbar'>
            <div className='aboutnavbar__left'>
                <img src={logo} alt='Logo' className='aboutnavbar__logo'/>
                <a href='https://www.twitch.tv/' className='aboutnavbar__item'>For Consumers</a>
                <a href='https://www.twitch.tv/' className='aboutnavbar__item'>For Retailers</a>
                <a href='https://www.twitch.tv/' className='aboutnavbar__item'>About</a>
            </div>
            <div className='aboutnavbar__right'>
                <button className='aboutbtn__log'>Login</button>
                <button className='aboutbtn__sig'>Sign Up</button>
            </div>
        </div>
    );
}

export default AboutNavBar;