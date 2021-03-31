import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Geocoder from 'react-mapbox-gl-geocoder';
import StatusAlert from 'react-status-alert';
import logo from "./assets/logo.svg";
import './contribute.css';
import moment from 'moment';

const mapAccess = {
    mapboxApiAccessToken: process.env.REACT_APP_MAPBOX_TOKEN
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
        this.state = { id: null, name: null, address: null, location: null, time: null, checkBoxClicked: false, filledOut: null };
        this.startBtn = React.createRef();
    }

    componentDidUpdate() {
        console.log(this.state.location);
    }

    state = {
        viewport: {}
    }

    onSelected = (viewport, item) => {
        var today = moment().format('MMM D, h:mm a');
        const toReplace = item.text+', ';
        if (this.state.checkBoxClicked) {
            this.setState({id: item.id,
                time: today,
                name: item.text,
                address: item.place_name.replace(toReplace, ''),
                location: item.center, filledOut: true });
        } else {
            this.setState({id: item.id,
                time: today,
                name: item.text,
                address: item.place_name.replace(toReplace, ''),
                location: item.center });
        }

    }

    renderBottomZ = () => {
        return (this.state.geocoderFocus) ? { zIndex: -1 } : { zIndex: 0 };
    }

    renderCheckbox = () => {
        return (this.state.checkBoxClicked) ? { background: "url('./assets/checkbox.svg')", backgroundImage: "url('./assets/checkbox.svg')", border: 'none' } : { border: '1px solid #C3CAD3' }
    }


    checkboxClicked = () => {
        if (this.state.name) {
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
                <h1 className="title__text">We'll walk you through a few easy steps that will only take you roughly 30 seconds to complete!       
                    First, choose the grocery store you attended.</h1>

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
                    <Link to={{ pathname: '/contribute/2', state:{name: this.state.name, location: this.state.location, address: this.state.address, storeName: this.state.storeName , id: this.state.id, time: this.state.time}}}>
                        <button ref={this.startBtn} className="form__start-cont" type="submit" disabled={!this.state.filledOut}>Start the contribution form</button>
                    </Link>
                </div>
        </div>
    );
    }
}


export default Contribute;