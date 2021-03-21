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


    const handleEverything = (name, val) => {
        setLine({...line, [name]: val});
    }

    const renderStyle = (peopleVal) => {
        if (peopleVal === line.people) {
            return { outline: 'none', background: 'rgba(50, 211, 202, 0.08)', border: '1px solid #32D3CA', color: '#32D3CA' }
        }
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
                        <button style={renderStyle('0 to 5')} id="1" className="lines-data__0to5" onClick={() => handleEverything("people", "0 to 5")}>0 to 5</button>
                        <button style={renderStyle("6 to 25")} id="2" className="lines-data__6to25" onClick={() => handleEverything("people", "6 to 25")}>6 to 25</button>
                        <button style={renderStyle("26 to 50")} id="3" className="lines-data__26to50" onClick={() => handleEverything("people", "26 to 50")}>26 to 50</button>
                        <button style={renderStyle("51 to 75")} id="4" className="lines-data__51to75" onClick={() => handleEverything("people", "51 to 75")}>51 to 75</button>
                        <button style={renderStyle("76+")} id="5" className="lines-data__76add" onClick={() => handleEverything("people", "76+")}>76+</button>
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
                        <select id="line-time" onChange={e => handleEverything("time", e.target.value)}>
                            <option disabled selected>{line.time}</option>
                            <option value="No Line" >No Line</option>
                            <option value="Less than 5 mins" >Less than 5 mins</option>
                            <option value="Less than 15 mins" >Less than 15 mins</option>
                            <option value="Less than 30 mins" >Less than 30 mins</option>
                            <option value="More than 31 Mins" >More than 31 mins</option>
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