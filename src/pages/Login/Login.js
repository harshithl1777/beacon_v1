import React, { Component } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import StatusAlert, { StatusAlertService } from 'react-status-alert'
import 'react-status-alert/dist/status-alert.css'

import logo from "./assets/beacon-logo.svg";
import line from './assets/seperator.svg';
import googleIcon from './assets/google.svg';
import fbIcon from './assets/facebook.svg';
import './login.css';

class Login extends Component {
    constructor() {
        super();
        this.state = { email: '', password: '' };
        this.email = React.createRef();
        this.password = React.createRef();
        window.addEventListener('keydown', el => {
            if (el.isComposing || el.keyCode === 13) {
                this.continueClicked();
            }
        });
    }

    continueClicked = () => {
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(({ user }) => {
            window.location.href = 'http://localhost:3000/signup';
        })
        .catch(() => {
            StatusAlertService.removeAllAlerts();
            StatusAlertService.showError('Invalid email or password.');
        });
    }

    render() {
        return (
            <div>
                <StatusAlert />
                <div className='log-in'>
                        <img className="log-in__logo" src={logo} alt="logo"></img>
                        <h1 className="log-in__title">Log in to Beacon</h1>
                        <h3 className='log-in__desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</h3>
                        <div className="log-in__form">
                            <input ref={this.email} value={this.state.email} 
                                onChange={(e) => this.setState({ email: e.target.value })} 
                                className='log-in__input' placeholder="Enter your email address"
                            />
                            <input ref={this.password} value={this.state.password} 
                                onChange={(e) => this.setState({ password: e.target.value })}
                                className='log-in__input--lower' placeholder="Enter a password"
                            />
                            <h3 className='log-in__forgot-password'>Forgot your password?</h3>
                            <button className="log-in__btn btn--sea" onClick={() => this.continueClicked()}>Continue to Beacon</button>
                        </div>
                        <img className='log-in__seperator' src={line} alt='Line' draggable='false' />
                        <div className='log-in__third-party'>
                            <button className='log-in__google'>
                                <div className='log-in__google-content'>
                                    <img src={googleIcon} alt='google' className='log-in__google-icon' />
                                    Sign in to Google
                                </div>
                            </button>
                            <button className='log-in__fb'>
                                <div className='log-in__fb-content'>
                                    <img src={fbIcon} alt='facebook' className='log-in__fb-icon' />
                                    Sign in to Facebook
                                </div>
                            </button>
                        </div>
                        
                </div>
            </div>
        );
    }
}

export default Login;