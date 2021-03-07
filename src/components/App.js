import React, { Component } from 'react';
import NavBar from './NavBar/navBar';
import Landing from './LandingContent/LandingContent'
import './App.css';

class App extends Component {
    render() {
        return (
            <div>           
                <NavBar/>
                <Landing/>
            </div>
        );
    }
}

export default App;