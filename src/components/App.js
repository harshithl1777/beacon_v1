import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import Landing from '../pages/LandingPage/LandingPage';
import SignUp from '../pages/Signup/Signup';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <Switch>    
                        <NavBar/>
                        <Landing/>
                        <Route path='/signup' render={props => <SignUp {...props}/>}/>
                    </Switch>    
                </Router>    
            </div>
        );
    }
}

export default App;