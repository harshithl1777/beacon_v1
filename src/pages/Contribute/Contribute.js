import React, {Component} from 'react';
import { Link, Redirect } from 'react-router-dom';
import Geocoder from 'react-mapbox-gl-geocoder';
import StatusAlert, { StatusAlertService } from 'react-status-alert';
import logo from "./assets/logo.svg";
import './contribute.css';



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
        this.state = { id: null, storeName: null, address: null, location: null, time: null, checkBoxClicked: false, filledOut: null };
        this.startBtn = React.createRef();
    }

    state = {
        viewport: {}
    }

    onSelected = (viewport, item) => {
        if (this.state.checkBoxClicked) {
            this.setState({id: item.id,
                storeName: item.text,
                address: item.address,
                location: [item.latitude, item.longitude], filledOut: true });
        } else {
            this.setState({id: item.id,
                storeName: item.text,
                address: item.address,
                location: [item.latitude, item.longitude] });
        }

    }

    renderBottomZ = () => {
        return (this.state.geocoderFocus) ? { zIndex: -1 } : { zIndex: 0 };
    }

    renderCheckbox = () => {
        return (this.state.checkBoxClicked) ? { background: "url('./assets/checkbox.svg')", backgroundImage: "url('./assets/checkbox.svg')", border: 'none' } : { border: '1px solid #C3CAD3' }
    }


    checkboxClicked = () => {
        if (this.state.storeName) {
            this.setState({checkBoxClicked: !this.state.checkBoxClicked, filledOut: true });
        } else {
            this.setState({checkBoxClicked: !this.state.checkBoxClicked });
        }
    }
 
    render() {
        
    return (
        <div className='con-section'>
            <StatusAlert />
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
                        {...mapAccess} onSelected={(viewport, item) => this.onSelected(viewport, item)} updateInputOnSelect={true} hideOnSelect={true}
                        queryParams={queryParams}
                    />
                    <br></br>
                    <div className='con-form__check-box-wrapper'>
                        <input onChange={() => this.checkboxClicked()} type='checkbox' className="con-form__check-box"/>
                        <h1 className="check-box__text">By filling this form, I allow Beacon to provide this data to other shoppers.</h1>
                    </div>
                    <Link to={{ pathname: '/contribute/2', state:{location: this.state.location, address: this.state.address, storeName: this.state.storeName , id: this.state.id}}}>
                        <button ref={this.startBtn} onClick={() => this.startForm()} className="form__start-cont" type="submit" disabled={!this.state.filledOut}>Start the contribution form</button>
                    </Link>
                </div>
        </div>
    );
    }
}


export default Contribute;