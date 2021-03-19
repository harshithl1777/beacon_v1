import React from 'react';
import FooterContent from '../LandingPage/components/FooterContent/FooterContent';
import AboutContent from './components/AboutContent/AboutContent';
import ContactContent from './components/ContactContent/ContactContent';
import AboutNavBar from './components/NavBar/aboutnavBar'
import ValueContent from './components/ValueContent/ValueContent';
import WhoContent from './components/WhoContent/WhoContent';


const AboutPage = () => {
    return (

        <div>
            <AboutNavBar/>
            <AboutContent header="ABOUT US" main={["We believe that accurate data is key,", <br/>, "especially during a pandemic"]} sub="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam, quis nostrud exercitation. "/>
            <ValueContent header="OUR VALUES" main={["Behind our passion for software, lie our fortified values"]} sub="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
            <WhoContent header="WHO WE ARE" main={["Built and maintained by 3 high-school students"]} sub="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
            <ContactContent/>
            <FooterContent/>
        </div>
              
    );
}


export default AboutPage;