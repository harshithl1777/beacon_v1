import React from 'react';
import './contactcontent.css';


const ContactContent = () => {
    return (
        <div className='contactcontent'>
            <div className='contactcontent__text'>
                <h4 className='contactcontent__heading'>GET IN TOUCH</h4>
                <h2 className='contactcontent__main'>We’re always on the lookout for new things</h2>
                <h3 className='contactcontent__sub'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                <button className='contactcontent__btn'>Contact Us</button>
            </div>
        </div>
    );
}


export default ContactContent;