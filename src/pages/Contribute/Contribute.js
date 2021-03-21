import React, {Component, useState} from 'react';
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
    country: 'ca',
    region: 'on',
    types: 'poi',
    fuzzyMath: true,
    limit: 4, 
}



class Contribute extends Component {
    constructor() {
        super();
        this.state = { geocoderValue: '' };
    }

    state = {
        viewport: {}
    }

    onSelected = (viewport, item) => {
        console.log(viewport, item);
        this.setState({
            id: item.id,
            storeName: item.place_name,
            name: "VishnuDikNu Poil" 
        });
    }

    renderBottomZ = () => {
        return (this.state.geocoderFocus) ? { zIndex: -1 } : { zIndex: 0 };
    }
 
    render() {
        const {viewport} = this.state;
        
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
                    {...mapAccess} onSelected={(viewport, item) => this.onSelected(viewport, item)} updateInputOnSelect={true} viewport={this.state.geocoderValue} hideOnSelect={true}
                    queryParams={queryParams}
                    />
                    <br></br>
                    <div className='con-form__check-box-wrapper'>
                        <button className="con-form__check-box"/>
                        <h1 className="check-box__text">By filling this form, I allow Beacon to provide this data to other shoppers.</h1>
                    </div>
                    <Link to={{ pathname: '/contribute/2', state:{name: this.state.name, storeName: this.state.storeName , id: this.state.id}}}>
                        <button className="form__start-cont" type="submit">Start the contribution form</button>
                    </Link>
                </div>      
                    
        
        </div>
    );
    }
}


export default Contribute;