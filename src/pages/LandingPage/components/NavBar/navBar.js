import React from 'react';
import logo from './Assets/beacon-logo.svg';
import './navBar.css'

const NavBar = () => {
    return (
        <div className='navbar'>
            <div className='navbar__left'>
                <img src={logo} alt='Logo' className='navbar__logo'/>
                <a href='https://www.twitch.tv/' className='navbar__item'>For Consumers</a>
                <a href='https://www.twitch.tv/' className='navbar__item'>For Retailers</a>
                <a href='https://www.twitch.tv/' className='navbar__item'>About</a>
            </div>
            <div className='navbar__right'>
                <button className='btn__log'>Login</button>
                <button className='btn__sig'>Sign Up</button>
            </div>
        </div>
    );
}

export default NavBar;