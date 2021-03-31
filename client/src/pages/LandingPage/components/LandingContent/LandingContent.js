import React from 'react';
import './landing.css';

const LandingContent = () => {
    return (
        <div className='landing'>

            <div className='landing__left'>
                <h4 className='landing__heading'>MEET BEACON</h4>
                <h2 className='landing__main'>Real-time retail store data<br></br> for consumers in the pandemic </h2>
                <h3 className='landing__sub'>Discover optimized and up-to-date information regarding stock levels, wait times, and line-ups at your local grocery stores.</h3>
                <div className='landing__btns'>
                    <button onClick={() => window.location.href=`${process.env.REACT_APP_URL}/auth/login`} className='landing__submit' type="submit" > Start Searching </button>
                    <button onClick={() => window.location.href=`https://github.com/harshithl1777/beacon`} className='landing__submit--white' type="submit" > See Github </button>
                </div>
            </div>
        
        </div>
    );
}


export default LandingContent;