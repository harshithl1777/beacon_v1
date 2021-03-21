import React, { useState } from 'react';
import logo from "./assets/logo.svg";
import { Link } from 'react-router-dom';
import './linesdata.css';
import {Dropdown, DropdownButton} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import dropdownIcon from './assets/dropdown.svg';

const LinesData = (props) => {
    const [line, setLine] = useState({
        people: "",
        speed: "",
        time: ""
    })

    console.log(props);
    var nameProp = props.location.state.name;
    var storeNameProp = props.location.state.storeName;
    var idProp = props.location.state.id;
    var timeProp = props.location.state.time;
    var locationProp = props.location.state.location;
    var addressProp = props.location.state.address;
    var stockProp = props.location.state.stock;
    var dropTitle1 = "Select a speed option...";
    var dropTitle2 = "Select a time span...";


    const handleLine = (input) => {
        console.log(input);
        var people = "";
        if (input == "<5"){
            people = "0 to 5";
        }
        else if (input == "<25"){
            people = "6 to 25"
        }
        else if (input == "<50"){
            people = "26 to 50"
        }
        else if (input == "<75"){
            people = "51 to 75"
        }
        else if (input == ">76"){
            people = "76+"
        }
        handleEverything("people", people);


    }

    const handleEverything = (name, val) => {
        setLine({...line, [name]: val});
    }

    const handleLineTime = (lineTime) => {
        var time = "";
        if (lineTime == "no-line"){
            time = "No Line";
        }
        else if (lineTime == "<5"){
            time = "Less than 5 mins";
        }
        else if (lineTime == "<15"){
            time = "Less than 15 mins";   
        }
        else if (lineTime == "<30"){
            time = "Less than 30 mins";
        }
        else if (lineTime == ">31"){
            time = "More than 30 mins";
        }
        handleEverything("time", time);
    }

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
                    <br></br>
                    <div className="lines-data__btns">
                        <button id="1" className="lines-data__0to5" onClick={() => handleLine("<5")}>0 to 5</button>
                        <button id="2" className="lines-data__6to25" onClick={() => handleLine("<25")}>6 to 25</button>
                        <button id="3" className="lines-data__26to50" onClick={() => handleLine("<50")}>26 to 50</button>
                        <button id="4" className="lines-data__51to75" onClick={() => handleLine("<75")}>51 to 75</button>
                        <button id="5" className="lines-data__76add" onClick={() => handleLine(">76")}>76+</button>
                    </div>
                    <h1 className="lines-data__title-2">How fast is the line moving?</h1>
                    <h1 className="lines-data__title-3">How long did you spend in the line?</h1>
                        <div className="dropdowns">
                        <select id="dropdown-basic" onChange={e => handleEverything("speed", e.target.value)}>
                            <option disabled selected>{line.speed}</option>
                            <option value="slow">Slow</option>
                            <option value="avg">Average</option>
                            <option value="fast">Fast</option>
                        </select>
                        <select id="line-time" onChange={e => handleLineTime(e.target.value)}>
                            <option disabled selected>{line.time}</option>
                            <option value="no-line" >No Line</option>
                            <option value="<5" >Less than 5 mins</option>
                            <option value="<15" >Less than 15 mins</option>
                            <option value="<30" >Less than 30 mins</option>
                            <option value=">31" >More than 31 mins</option>
                        </select>
                        </div>
                        <Link to={{ pathname: '/contribute/3', state:{name: nameProp, storeName: storeNameProp,
                             id: idProp, location: locationProp, address: addressProp, time: timeProp, stock: stockProp, pplInLine: line.people, lineSpeed: line.speed, waitTime: line.time }}}>
                    <button className="add-product__next">Continue to the next step</button>
                    </Link>
                </div>      
                    
        
        </div>
    );
}


export default LinesData;