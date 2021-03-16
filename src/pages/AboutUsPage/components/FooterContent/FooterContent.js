import React from 'react';
import footerlogo from './Assets/footerlogo.svg';
import './footercontent.css';


const FooterContent = () => {
    return (
        <div className='footer'>
            <div className='footer__left'>
                <a href='https://www.twitch.tv/' className='footer__item'>For Consumers</a>
                <a href='https://www.twitch.tv/' className='footer__item'>For Retailers</a>
                <a href='https://www.twitch.tv/' className='footer__item'>About</a>
            </div>
            <div className='footer__center'>
                <img src={footerlogo} alt='Footer Logo' className='footer__logo'/>
            </div>
            <div className='footer__right'>
              <h2 className='footer__credit'>Built by <span>Harshith, Yash and Vishnu.</span></h2>
            </div>
        </div>
    );
}

export default FooterContent;