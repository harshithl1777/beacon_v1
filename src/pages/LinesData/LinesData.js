import React from 'react';
import logo from "./assets/logo.svg";
import './linesdata.css';
import dropdownIcon from './assets/dropdown.svg';

const LinesData = () => {
    var dropTitle1 = "Select a speed option...";
    var dropTitle2 = "Select a time span...";

    const handleSpeed = (speedVal) => {
        if (speedVal == "slow"){
            dropTitle1 = "slow";
        }
        else if (speedVal == "avg"){
            dropTitle1 = "avg";
        }
        else if (speedVal == "fast"){
            dropTitle1 = "fast";
        }
        else{
            return null;
        }
    }

    const handleLineTime = (lineTime) => {
        if (lineTime == "no-line"){
            dropTitle2 = "No Line";
        }
        else if (lineTime == "<5"){
            dropTitle2 = "Less than 5 mins";
        }
        else if (lineTime == "<15"){
            dropTitle2 = "Less than 15 mins";
        }
        else if (lineTime == "<30"){
            dropTitle2 = "Less than 30 mins";
        }
        else if (lineTime == ">31"){
            dropTitle2 = "More than 30 mins";
        }
        else{
            return null;
        }
    }


    return (
        <div className='lines-section'>
            <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/css?family=Inter" rel="stylesheet"></link>
            <script src='https://api.mapbox.com/mapbox-gl-js/v2.1.1/mapbox-gl.js'></script>
            <link href='https://api.mapbox.com/mapbox-gl-js/v2.1.1/mapbox-gl.css' rel='stylesheet' />
            <div className="lines-top-line"></div>
                <img className="logo" src={logo} alt="logo"></img>
                <h1 className="lines-title">Lines Data</h1>
                <h1 className="lines-title__text">Lorem ipsum dolor sit amet,
                 consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua ut enim
                   ad minim veniam. Lorem ipsum dolor sit amet, co.</h1>

                <div className="lines-data">
                    <h1 className="lines-data__title">How many people were in line outside the store?</h1> 
                    <br></br>
                    <div className="lines-data__btns">
                        <button className="lines-data__0to5">0 to 5</button>
                        <button className="lines-data__6to25">6 to 25</button>
                        <button className="lines-data__26to50">26 to 50</button>
                        <button className="lines-data__51to75">51 to 75</button>
                        <button className="lines-data__76add">76+</button>
                    </div>
                    <h1 className="lines-data__title-2">How fast is the line moving?</h1>
                    <h1 className="lines-data__title-3">How long did you spend in the line?</h1>
                        <div className="dropdowns">
                        <select id="dropdown-basic">
                            <option disabled selected>{dropTitle1}</option>
                            <option onClick={() => handleSpeed("slow")}>Slow</option>
                            <option onClick={() => handleSpeed("avg")}>Average</option>
                            <option onClick={() => handleSpeed("fast")}>Fast</option>
                        </select>
                        <select id="line-time">
                            <option disabled selected>{dropTitle2}</option>
                            <option onClick={() => handleLineTime("no-line")}>No Line</option>
                            <option onClick={() => handleLineTime("<5")}>Less than 5 mins</option>
                            <option onClick={() => handleLineTime("<15")}>Less than 15 mins</option>
                            <option onClick={() => handleLineTime("<30")}>Less than 30 mins</option>
                            <option onClick={() => handleLineTime(">31")}>More than 31 mins</option>
                        </select>
                        </div>
                    <button className="add-product__next">Continue to the next step</button>
                </div>      
                    
        
        </div>
    );
}


export default LinesData;