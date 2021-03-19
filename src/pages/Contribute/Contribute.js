import React from 'react';
import logo from "./assets/logo.svg";
import './contribute.css';

const Contribute = () => {
    return (
        <div className='con-section'>
            <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/css?family=Inter" rel="stylesheet"></link>
            <div className="top-line"></div>
                <img className="logo" src={logo} alt="logo"></img>
                <h1 className="title">Thanks for contributing! Let’s get you started.</h1>
                <h1 className="title__text">Lorem ipsum dolor sit amet,
                 consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua ut
                   enim ad minim veniam. Lorem ipsum dolor sit amet, co.</h1>

                
                <div className="con-form">
                    <h1 className="con-form__text">What store did you shop at?</h1>
                    <input className="con-form__query" type="text" placeholder="Start typing the store’s name and address"></input>
                    <br></br>
                    <button className="con-form__check-box"/>
                    <h1 className="check-box__text">By filling this form, I allow Beacon to provide this data to other shoppers.</h1>
                    <button className="form__start" type="submit">Start the contribution form</button>
                </div>      
                    
        
        </div>
    );
}


export default Contribute;