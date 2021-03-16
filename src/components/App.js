import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Signup from '../pages/Signup/Signup';
import Login from '../pages/Login/Login';
import Contribute from '../pages/Contribute/Contribute';

import './app.css';
import LandingPage from '../pages/LandingPage/LandingPage';
import AboutPage from '../pages/AboutUsPage/AboutUsPage';

class App extends Component {
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