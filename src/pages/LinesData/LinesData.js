import React from 'react';
import logo from "./assets/logo.svg";
import './stock-data.css';

const LinesData = () => {
    return (
        <div className='lines-section'>
            <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/css?family=Inter" rel="stylesheet"></link>
            <div className="lines-top-line"></div>
                <img className="logo" src={logo} alt="logo"></img>
                <h1 className="lines-title">Lines Data</h1>
                <h1 className="lines-title__text">Lorem ipsum dolor sit amet,
                 consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua ut enim
                   ad minim veniam. Lorem ipsum dolor sit amet, co.</h1>

                <div className="lines-data">
                    <h1 className="lines-data__title">How many people were in line outside the store?</h1> 
                    <h1 className="lines-data__title-2">How fast is the line moving?</h1>
                    <h1 className="lines-data__title-3">How long did you spend in the line?</h1>
                    <br></br>
                    <div className="lines-data__btns">
                        <button className="lines-data__0to5">0 to 5</button>
                        <button className="lines-data__6to25">6 to 25</button>
                        <button className="lines-data__26to50">26 to 50</button>
                        <button className="lines-data__51to75">51 to 75</button>
                        <button className="lines-data__76+">76+</button>
                    </div>
                    <button className="add-product__next">Continue to the next step</button>
                </div>      
                    
        
        </div>
    );
}


export default LinesData;