import React from 'react';
import logo from './Assets/beacon-logo.svg';
import './navBar.css'

const NavBar = () => {
    return (
        <div className='navbar'>
            <div className='navbar__left'>
                <img src={logo} alt='Logo' className='navbar__logo'/>
                <a href={`${process.env.REACT_APP_URL}/auth/signup`} className='navbar__item'>Start Searching</a>
                <a href={`https://github.com/harshithl1777/beacon`} className='navbar__item'>Open Source</a>
            </div>
            <div className='navbar__right'>
                <button onClick={() => window.location.href=`${process.env.REACT_APP_URL}/auth/login`}  className='btn__log'>Login</button>
                <button onClick={() => window.location.href=`${process.env.REACT_APP_URL}/auth/signup`} className='btn__sig'>Sign Up</button>
            </div>
        </div>
    );
}

export default NavBar;