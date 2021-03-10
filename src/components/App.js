import React, { Component } from 'react';
<<<<<<< Updated upstream
import NavBar from './NavBar/navBar';
import Landing from './LandingContent/LandingContent'
import CenterContent from './CenterContent/CenterContent'
import RightContent from './RightContent/RightContent'
=======
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import Landing from './LandingContent/LandingContent';
import SignUp from './Signup';

>>>>>>> Stashed changes
import './App.css';
import LeftContent from './LeftContent/LeftContent';
import LastContent from './LastContent/LastContent';
import FooterContent from './FooterContent/FooterContent';

class App extends Component {
    render() {
        return (
<<<<<<< Updated upstream
            <div>           
                <NavBar/>
                <Landing/>
                <CenterContent/>
                <RightContent/>
                <LeftContent/>
                <RightContent/>
                <CenterContent/>
                <RightContent/>
                <LeftContent/>
                <LastContent/>
                <FooterContent/>
=======
            <div className="App">
                <Router>
                    <Switch>    
                        <NavBar/>
                        <Landing/>
                        <Route path='/signup' render={props => <SignUp {...props}/>}/>
                    </Switch>    
                </Router>    
>>>>>>> Stashed changes
            </div>
        );
    }
}

export default App;