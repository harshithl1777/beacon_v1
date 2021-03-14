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
            <CenterContent header= "BEACON FOR CONSUMERS" main={["Built with ", <span>all the features </span>, "you need as a", <span> consumer </span>]} sub="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
            <RightContent main={["Get stock and lines data sourced", <br/>, "directly from store managers"]} sub="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
            <LeftContent main={["Never miss a change in stock,", <br/>, "lines or review data"]} sub="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
            <RightContent main={["The only platform with", <br/>, "consistent data acquisition"]} sub="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
            <CenterContent header= "HOW IT WORKS" main={[<span>Designed </span>, "and ", <span>developed </span>, "with " ,<span>consumers </span>, "in mind"]} sub="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
            <HighlightContent/>
            <LastContent/>
            <FooterContent/>
        </div>
        
    );
}


export default LandingPage;