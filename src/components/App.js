import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import firebase from "firebase/app";
import "firebase/auth";

import Signup from '../pages/Signup/Signup';
import Login from '../pages/Login/Login';
import Contribute from '../pages/Contribute/Contribute';
import LandingPage from '../pages/LandingPage/LandingPage';
import AboutPage from '../pages/AboutUsPage/AboutUsPage';
import './app.css';

class App extends Component {
    constructor() {
        super();
        const firebaseConfig = {
            apiKey: "AIzaSyCE0AwQRBHpu5eZbfsj9PYD78J0CBMk9bc",
            authDomain: "beacon-web-auth.firebaseapp.com",
            projectId: "beacon-web-auth",
            storageBucket: "beacon-web-auth.appspot.com",
            messagingSenderId: "145458149399",
            appId: "1:145458149399:web:f8902875dbf6a0707d4452",
          };
        firebase.initializeApp(firebaseConfig);
    }

    render() {
        return (
            <div className="App">   
                <Router>
                    <Switch>           
                        <Route exact path='/' component={LandingPage}/>
                        <Route exact path='/aboutus' component={AboutPage}/>
                        <Route exact path='/login' component={Login}/>
                        <Route exact path='/contribute' component={Contribute}/>
                        <Route path='/signup' component={Signup}/>
                    </Switch>
                </Router>  
            </div>
        );
    }
}

export default App;