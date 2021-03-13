import { BrowserRouter as Link } from 'react-router-dom';
import React, { Component } from 'react';
import logo from "./assets/beacon-logo.svg";
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
                        <input className="form__email" type="email" placeholder="Enter your email address..."/>
                        <input className="form__pass" type="password" placeholder="Enter a password"/>
                        <input className="form__confPass" type="password" placeholder="Confirm your password"/>
                        <Link to={{ pathname: '/login'}}>
                            <h1 className="loginDirect">Already have an account? Log in.</h1>
                        </Link>
                        <button className="form__getStarted" type="submit">Get Started with Beacon</button>
                    </form>
                    <div className="line1"></div>
                        <h1 className="or">OR</h1>
                    <div className="line2"></div>
                </div>
            </div>
        );
    }
}

export default Signup;