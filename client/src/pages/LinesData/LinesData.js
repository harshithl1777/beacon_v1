import React, { useState } from 'react';
import logo from "./assets/logo.svg";
import { Link } from 'react-router-dom';
import './linesdata.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const LinesData = (props) => {
    const [line, setLine] = useState({
        people: null,
        speed: null,
        time: null,
        filled: false
    });
    console.log(line);

    var storeNameProp = props.location.state.name;
    var idProp = props.location.state.id;
    var timeProp = props.location.state.time;
    var locationProp = props.location.state.location;
    var addressProp = props.location.state.address;
    var stockProp = props.location.state.stock;


    const handleEverything = (name, val) => {
        if ((line.people && line.speed) || (line.speed && line.time) || (line.people && line.time)) {
            setLine({...line, [name]: val, filled: true});
        } else {
            setLine({...line, [name]: val});
        }
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
                        <button style={renderStyle("51 to 75")} id="4" className="lines-data__51to75" onClick={() => handleEverything("people", "51 to 74")}>51 to 74</button>
                        <button style={renderStyle("76+")} id="5" className="lines-data__76add" onClick={() => handleEverything("people", "75+")}>75+</button>
                    </div>
                    <div className='lines-data__titles'>
                        
                    </div>
                        <div className="dropdowns">
                        <div className='dropdown-1'>
                            <h1 className="lines-data__title-2">How fast is the line moving?</h1>
                            <select id="dropdown-basic" onChange={e => handleEverything("speed", e.target.value)}>
                                <option disabled selected>{line.speed}</option>
                                <option value="Moving slow">Slow</option>
                                <option value="Somewhat moving">Average</option>
                                <option value="Moving fast">Fast</option>
                            </select>
                        </div>
                        <div className='dropdown-2'>
                            <h1 className="lines-data__title-3">How long did you spend in the line?</h1>
                            <input id="line-time" type='number' value={line.time} onChange={e => handleEverything("time", e.target.value)} />
                        </div>
                    </div>
                        <Link to={{ pathname: '/contribute/3', state:{name: storeNameProp,
                             id: idProp, location: locationProp, address: addressProp, time: timeProp, stock: stockProp, pplInLine: line.people, lineSpeed: line.speed, waitTime: line.time }}}>
                            <button className="nextPage" disabled={!line.filled}>Continue to the next step</button>
                        </Link>
                </div>      
                    
        
        </div>
    );
}


export default LinesData;