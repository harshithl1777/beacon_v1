import { BrowserRouter as Link } from 'react-router-dom';
import React, { Component } from 'react';
import logo from "./assets/beacon-logo.svg";
import lineImg from './assets/seperator.svg';
import './signup.css';

class Signup extends Component {
    render() {
        return (
            <div className='sign-up'>
                <div className="halfBlack"></div>
                <div className="signUpSection">
                    <img className="logo" src={logo} alt="logo"></img>
                    <h1 className="title">Sign Up For Beacon</h1>
                    <form className="form">
                        <input className="signup-form__email" type="email" placeholder="Enter your email address"/>
                        <input className="signup-form__pass" type="password" placeholder="Enter a password"/>
                        <input className="signup-form__confPass" type="password" placeholder="Confirm your password"/>
                        <Link to={{ pathname: '/login'}}>
                            <h1 className="loginDirect">Already have an account? Log in.</h1>
                        </Link>
                        <button className="signup-form__getStarted" type="submit">Get Started with Beacon</button>
                    </form>
                    <img className='line-separator' src={lineImg} alt='Line' draggable='false' />
                </div>
            </div>
        );
    }
}

export default Signup;