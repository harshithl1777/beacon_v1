import React, { Component } from 'react';
import StatusAlert, { StatusAlertService } from 'react-status-alert';
import firebase from "firebase/app";
import "firebase/auth";

import contributeIcon from './assets/contributeIcon.svg';
import creditsIcon from './assets/creditsIcon.svg';
import feedback from './assets/feedback.svg';
import logo from './assets/logo.svg';
import profile from './assets/profile.svg';
import './interiornav.css';

class InteriorNav extends Component {
    constructor() {
        super();
        this.state = { currentPage: 0, userID: null };
        firebase.auth().onAuthStateChanged((user) => {
            if (user && !this.state.userID) {
                console.log('Logged in');
                this.setState({ userID: user.uid });
            } else {
                window.location.href = 'https://trybeacon.herokuapp.com/auth/login';
            }
        });
    }

    renderNavStyles = (pageNum) => {
        return (pageNum === this.state.currentPage) ? { background: 'rgba(50, 211, 202, 0.1)', borderBottom: '3px solid #32D3CA' } : { border: 'none' };
    }

    logout = () => {
        firebase.auth().signOut().then(() => {
            StatusAlertService.removeAllAlerts();
            StatusAlertService.showSuccess('Success');
            window.location.href=`${process.env.REACT_APP_URL}`;
          }).catch((error) => {
            StatusAlertService.removeAllAlerts();
            StatusAlertService.showError('Unable to log you out. Try again later');
          });          
    }

    render() {
        return (
            <div>
                <StatusAlert />
                <div className='interior-nav'>
                    <div className='interior-nav__right-items'>
                        <img src={logo} onClick={() => window.location.href = 'https://trybeacon.herokuapp.com'} alt='logo' className='interior-nav__logo' draggable='false'/>
                        <button onClick={() => this.setState({ currentPage: 0 })} style={this.renderNavStyles(0)} className='interior-nav__nav-btn'>
                            Data
                        </button>
                    </div>
                    <div className='interior-nav__left-items'>
                        <button className='interior-nav__contribute-btn' onClick={() => window.location.href=`${process.env.REACT_APP_URL}/contribute/1`}>
                            <div className='interior-nav__contribute-content'>
                                <img src={contributeIcon} alt='contribute' className='interior-nav__contribute-icon' />
                                Contribute
                            </div>
                        </button>
                        <img onClick={() => window.location.href='mailto:trybeacon@gmail.com'} src={feedback} alt='feedback' className='interior-nav__feedback' />
                        <img onClick={() => this.logout()} src={profile} alt='profile' className='interior-nav__profile-pic' />
                    </div>
                </div>
            </div>
        );
    }
}

export default InteriorNav;