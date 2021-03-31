import React, { Component } from 'react';
import firebase from "firebase/app";
import axios from 'axios';
import StatusAlert, { StatusAlertService } from 'react-status-alert';
import "firebase/auth";

import logo from "./assets/beacon-logo.svg";
import line from './assets/seperator.svg';
import googleIcon from './assets/google.svg';
import fbIcon from './assets/facebook.svg';
import './signup.css';

class Signup extends Component {
    constructor() {
        super();
        this.state = { email: '', password: '', confPassword: '' };
        window.addEventListener('keydown', el => {
            if (el.isComposing || el.keyCode === 13) {
                this.getStartedClicked();
            }
        });
        this.googleProvider = new firebase.auth.GoogleAuthProvider().addScope('https://www.googleapis.com/auth/userinfo.email');
        this.fbProvider = new firebase.auth.FacebookAuthProvider().addScope('email');
    }
    
    getStartedClicked = () => {
        if (this.state.password === this.state.confPassword) {
            firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(({ user }) => {
                console.log(user.uid);
                axios.post('/api/users/new', {
                    token: process.env.REACT_APP_API_USERS_TOKEN,
                    email: this.state.email,
                    pw: this.state.password,
                })
                .then(({ data }) => {
                    window.location.href='/app/search';
                })
                .catch(({ result }) => {
                    console.log(result);
                    StatusAlertService.removeAllAlerts();
                    StatusAlertService.showError('Unable to process request. Try again later.');
                })
            })
            .catch(({ code }) => {
                StatusAlertService.removeAllAlerts();
                switch(code) {
                    case 'auth/email-already-in-use':
                        StatusAlertService.showError('This account already exists. Log in.');
                        break
                    case 'auth/invalid-email':
                        StatusAlertService.showError('Invalid email. Try again.');
                        break
                    case 'auth/weak-password':
                        StatusAlertService.showError("Your password is too weak.");
                        break
                    default:
                        StatusAlertService.showError('Unable to process initial request. Try again later.');
                        break
                }
            });
        } else {
            StatusAlertService.removeAllAlerts();
            StatusAlertService.showError('Passwords do not match. Try again.');
        }
    }

    providerLogin = (provider) => {
        firebase.auth()
        .signInWithPopup(provider === 'google' ? this.googleProvider : this.fbProvider)
        .then(({ additionalUserInfo }) => {
            if (!additionalUserInfo.isNewUser) {
                const user = firebase.auth().currentUser;
                user.delete().then(() => {
                    StatusAlertService.removeAllAlerts();
                    StatusAlertService.showError("Existing account found. Log in instead.");
                }).catch(() => {
                    StatusAlertService.removeAllAlerts();
                    StatusAlertService.showError("Unable to process request. Try later.");
                });
            } else {
                StatusAlertService.removeAllAlerts();
                StatusAlertService.showSuccess("Success");
                window.location.href='/app/search';
            }
         }).catch((error) => {
            console.log(error);
        });
    }

    render() {
        return (
            <div>
                <StatusAlert />
                <div className='sign-up'>
                        <img className="sign-up__logo" src={logo} alt="logo"></img>
                        <h1 className="sign-up__title">Sign up for Beacon</h1>
                        <h3 className='sign-up__desc'>Create an account and start searching for stock/lines input at your local grocery stores!</h3>
                        <div className="sign-up__form">
                            <input className="sign-up__input" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} placeholder="Enter your email address"/>
                            <div className='sign-up__password-wrapper'>
                                <input 
                                    className="sign-up__input--small" value={this.state.password} 
                                    onChange={(e) => this.setState({ password: e.target.value })} 
                                    placeholder="Enter a password" type='password'
                                />
                                <input 
                                    className="sign-up__input--small" value={this.state.confPassword} 
                                    onChange={(e) => this.setState({ confPassword: e.target.value })} 
                                    placeholder="Confirm your password" type='password'
                                />
                            </div>
                            <button onClick={() => this.getStartedClicked()} className="sign-up__btn btn--sea">Get Started with Beacon</button>
                        </div>
                </div>
            </div>
        );
    }
}

export default Signup;