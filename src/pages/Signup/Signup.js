import React, { Component } from 'react';
import firebase from "firebase/app";
import "firebase/auth";

import logo from "./assets/beacon-logo.svg";
import line from './assets/seperator.svg';
import googleIcon from './assets/google.svg';
import fbIcon from './assets/facebook.svg';
import './signup.css';

class Signup extends Component {

    

    render() {
        return (
            <div>
                <div className='sign-up'>
                        <img className="sign-up__logo" src={logo} alt="logo"></img>
                        <h1 className="sign-up__title">Sign up for Beacon</h1>
                        <h3 className='sign-up__desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</h3>
                        <div className="sign-up__form">
                            <input className="sign-up__input" placeholder="Enter your email address"/>
                            <div className='sign-up__password-wrapper'>
                                <input className="sign-up__input--small" placeholder="Enter a password"/>
                                <input className="sign-up__input--small" placeholder="Confirm your password"/>
                            </div>
                            <button className="sign-up__btn btn--sea">Get Started with Beacon</button>
                        </div>
                        <img className='sign-up__seperator' src={line} alt='Line' draggable='false' />
                        <div className='sign-up__third-party'>
                            <button className='sign-up__google'>
                                <div className='sign-up__google-content'>
                                    <img src={googleIcon} alt='google' className='sign-up__google-icon' />
                                    Start with Google
                                </div>
                            </button>
                            <button className='sign-up__fb'>
                                <div className='sign-up__fb-content'>
                                    <img src={fbIcon} alt='facebook' className='sign-up__fb-icon' />
                                    Start with Facebook
                                </div>
                            </button>
                        </div>
                        
                </div>
            </div>
        );
    }
}

export default Signup;