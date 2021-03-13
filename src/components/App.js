import React, { Component } from 'react';
import NavBar from './navBar/navBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignUp from './Signup/SignUp';
import './App.css';
import LogIn from './Login/LogIn';
import Contribute from './Contribute/Contribute';

class App extends Component {
    render() {
        return (
            <div className="App">   
                <Router>
                    <Switch>           
                        <Route exact path='/' component={NavBar}/>
                        <Route exact path='/login' component={LogIn}/>
                        <Route exact path='/contribute' component={Contribute}/>
                        <Route path='/signup' component={SignUp}/>
                    </Switch>   
                </Router> 
            </div>
        );
    }
}

export default App;