import React from 'react';
import wallet from "./assets/wallet.svg";
import './outofcredits.css';
import exit from './assets/exit.svg';

const OutOfCredits = () => {
    return (
        <div className='ooc-section'>
            <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/css?family=Inter" rel="stylesheet"></link>
            <div className="ooc__alert">
                <img alt='exit'className="exit" src={exit}></img>
                <h1 className="ooc__head">Uhoh. Looks like you’re out of credits.</h1>
                <h1 className="ooc__text">Beacon operates on a credit system 
                and each time you search for data, you use your credits. 
                This is done to promote contributing to our database and keep 
                Beacon going.</h1>
                <img alt='wallet'className="wallet" src={wallet}></img>
                <h1 className="ooc__text-2">Next time you decide to go shopping,
                 just make sure to contribute to Beacon right after and you’ll
                  get some more to keep searching. Contributing takes less than
                   2 minutes and provides accurate data for the Beacon community.</h1>
                <button className="ooc__cont">Continue</button>
                <button className="ooc__sg">Sounds good</button>
            </div>  
                    
        
        </div>
    );
}


export default OutOfCredits;