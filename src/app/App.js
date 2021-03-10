import React, { Component } from 'react';
import NavBar from './NavBar/navBar';
import Landing from './LandingContent/LandingContent'
import CenterContent from './CenterContent/CenterContent'
import RightContent from './RightContent/RightContent'
import './App.css';
import LeftContent from './LeftContent/LeftContent';
import LastContent from './LastContent/LastContent';
import FooterContent from './FooterContent/FooterContent';

class App extends Component {
    render() {
        return (
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
            </div>
        );
    }
}

export default App;