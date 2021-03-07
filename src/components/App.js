import React, { Component } from 'react';
import NavBar from './navBar/navBar';
import Landing from './Landing/Landing'
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