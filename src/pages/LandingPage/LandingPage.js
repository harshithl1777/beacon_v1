import React from 'react';
import NavBar from './components/NavBar/navBar';
import LandingContent from './components/LandingContent/LandingContent';
import CenterContent from './components/CenterContent/CenterContent';
import RightContent from './components/RightContent/RightContent';
import LeftContent from './components/LeftContent/LeftContent';
import LastContent from './components/LastContent/LastContent';
import FooterContent from './components/FooterContent/FooterContent';
import HighlightContent from './components/HighlightContent/HighlightContent'



const LandingPage = () => {
    return (

        <div>
            <NavBar/>
            <LandingContent/>
            <FooterContent/>
        </div>
        
    );
}


export default LandingPage;