import { BrowserRouter as Link } from 'react-router-dom';
import React from 'react';
import logo from "./assets/logo.svg";
import './contribute.css';

const Contribute = () => {
    return (
        <div className='conSection'>
            <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/css?family=Inter" rel="stylesheet"></link>
                <img className="logo" src={logo} alt="logo"></img>
                <h1 className="title">Thanks for contributing! Let’s get you started.</h1>
                <h1 className="title__text">Lorem ipsum dolor sit amet,
                 consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua ut
                   enim ad minim veniam. Lorem ipsum dolor sit amet, co.</h1>

                
                <form className="form">
                    <h1 className="form__text">What store did you shop at?</h1>
                    <input className="form__query" type="text" placeholder="Start typing the store’s name and address"/>
                    <button className="form__checkBox" type="button"/>
                    <h1 className="checkBox__text">By filling this form, I allow Beacon to provide this data to other shoppers.</h1>
                    <button className="form__continue" type="submit">Continue</button>
                </form>


                <div className="line1"></div><h1 className="or">OR</h1><div className="line2"></div>        
                    
        
        </div>
    );
}


export default Contribute;