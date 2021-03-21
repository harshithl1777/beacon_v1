import React from 'react';
import logo from "./assets/logo.svg";
import contributed from "./assets/contributed.svg";
import './thanks.css';

const Thanks = (props) => {
    console.log(props);
    return (
        <div className='thanks-section'>
            <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/css?family=Inter" rel="stylesheet"></link>
            <div className="thanks-top-line"></div>  
            <img className="logo" src={logo} alt="logo"></img>
                <h1 className="thanks-title">Thanks for contributing, Vishnudev!</h1>
                <h1 className="thanks-title__text">Lorem ipsum dolor sit amet,
                 consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua ut enim ad minim veniam.
                   Lorem ipsum dolor sit amet, co.</h1>
            <img className="contributed" alt="contributed" src={contributed}></img>
            <button className="gtg">I'm good to go</button>
                    
        
        </div>
    );
}


export default Thanks;