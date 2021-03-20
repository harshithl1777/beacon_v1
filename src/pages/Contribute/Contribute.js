import React, {Component} from 'react';
// import React, {useEffect, useReducer, useState} from 'react';
import logo from "./assets/logo.svg";
import './contribute.css';
import { Link } from 'react-router-dom';
import Geocoder from 'react-mapbox-gl-geocoder';


const mapAccess = {
    mapboxApiAccessToken: "pk.eyJ1IjoibGF0Y2hhbiIsImEiOiJja21pMXZla3EwZDNmMnh0NHJ3NXR5eWl3In0.2S9WUi9cSc70L5E3cl5pFw"
}
 
const mapStyle = {
    width: '100%',
    height: 600
}
 
const queryParams = {
    country: 'us'
}



class Contribute extends Component {
    // const dummyData = {
    //     name: "Vishnudev",
    //     storeName: "Walmart 1500 Mavis St"
    // }
    
    // const fetchFromBackend =(props) => {
    //     const [state, dispatch] = useReducer(reducer, {data:[]});
    //     dispatch({
    //         type: 'DATA_UPLOADED',
    //         dummyData: dummyData
    //     })
    // }
       
    state = {
        viewport: {}
    }
 
    onSelected = (viewport, item) => {
        this.setState({viewport});
        console.log('Selected: ', item)
    }
 
    render() {
        const {viewport} = this.state
        
    return (
        <div className='con-section'>
            <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/css?family=Inter" rel="stylesheet"></link>
            
            <div className="top-line"></div>
                <img className="logo" src={logo} alt="logo"></img>
                <h1 className="title">Thanks for contributing! Let’s get you started.</h1>
                <h1 className="title__text">Lorem ipsum dolor sit amet,
                 consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua ut
                   enim ad minim veniam. Lorem ipsum dolor sit amet, co.</h1>

                
                <div className="con-form">
                    <h1 className="con-form__text">What store did you shop at?</h1>
                    <Geocoder
                    {...mapAccess} onSelected={this.onSelected} viewport={viewport} hideOnSelect={true}
                    queryParams={queryParams}
                    />
                    {/* <input className="con-form__query" type="text" placeholder="Start typing the store’s name and address"></input> */}
                    <br></br>
                    <button className="con-form__check-box"/>
                    <h1 className="check-box__text">By filling this form, I allow Beacon to provide this data to other shoppers.</h1>
                    {/* <Link to={{ pathname: '/app/stockdata', state:{name: data.name, storeName: data.storeName }}}> */}
                        <button className="form__start" type="submit">Start the contribution form</button>
                    {/* </Link> */}
                </div>      
                    
        
        </div>
    );
    }
}


export default Contribute;