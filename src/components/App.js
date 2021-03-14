import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './NavBar/navBar';
import Signup from '../pages/Signup/Signup';
import Login from '../pages/Login/Login';
import Contribute from '../pages/Contribute/Contribute';

import './app.css';

class App extends Component {
    render() {
        return (
            <div className="App">   
                <Router>
                    <Switch>           
                        <Route exact path='/' component={NavBar}/>
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