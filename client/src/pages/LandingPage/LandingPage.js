import React from 'react';
import NavBar from './components/NavBar/navBar';
import LandingContent from './components/LandingContent/LandingContent';
import FooterContent from './components/FooterContent/FooterContent';

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