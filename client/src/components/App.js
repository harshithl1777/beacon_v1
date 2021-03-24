import React, { Component } from 'react';
import { BrowserRouter as Switch, Route, BrowserRouter } from 'react-router-dom';
import firebase from "firebase/app";
import "firebase/auth";

import InteriorNav from './InteriorNav/InteriorNav';
import Search from '../pages/Search/Search';
import Signup from '../pages/Signup/Signup';
import Login from '../pages/Login/Login';
import Contribute from '../pages/Contribute/Contribute';
import StockData from '../pages/StockData/StockData';
import LinesData from '../pages/LinesData/LinesData';
import Thanks from '../pages/Thanks/Thanks';
import OutOfCredits from '../pages/OutOfCredits/OutOfCredits';
import Radar from '../pages/Radar/Radar';
import NoResults from '../components/NoResults/NoResults';

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
        const currentURL = window.location.href.replace('https://trybeacon.herokuapp.com', '');
        if (currentURL !== '/auth/login' && currentURL !== '/auth/signup' && currentURL !== '/' && currentURL !== '') {
            firebase.auth().onAuthStateChanged((user) => {
                if (user && !this.state.userID) {
                    console.log('Logged in');
                } else {
                    window.location.href = '/auth/login';
                }
            });
        }
    }
    render() {
        return (
            <div className="App">   
                <BrowserRouter>
                    <Switch>           
                        <Route exact path='/' component={LandingPage}/>
                        <Route exact path='/aboutus' component={AboutPage}/>
                        <Route path="/auth">
                            <Route exact path='/auth/login' component={Login}/>
                            <Route exact path='/auth/signup' component={Signup}/>
                        </Route>
                        <Route path='/contribute'>
                            <Route exact path='/contribute/1' render={(props) => <Contribute {...props} />} />
                            <Route exact path="/contribute/2" render={(props) => <StockData {...props} />}/>
                            <Route exact path="/contribute/2.1" render={(props) => <LinesData {...props} />}/>
                            <Route exact path="/contribute/3" render={(props) => <Thanks {...props} />}/>
                            <Route exact path="/contribute/4" render={(props) => <OutOfCredits {...props} />}/>
                        </Route>
                        <Route path="/app">
                            <InteriorNav />
                            <Route exact path='/app/search' render={(props) => <Search {...props} />} />
                            <Route exact path='/app/contributions' render={(props) => <Radar {...props} />} />
                            <Route exact path='/app/noresultsTEST' component={NoResults} />
                        </Route>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;