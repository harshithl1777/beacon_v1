import React, { Component } from 'react';
import StatusAlert, { StatusAlertService } from 'react-status-alert';
import axios from 'axios';
import locationIcon from './assets/location.svg';
import dropdownIcon from './assets/dropdown.svg';
import checkIcon from './assets/check.svg';
import './search.css';

class Search extends Component {
    constructor() {
        super();
        this.state = { address: '', locationBtnText: 'Find your location', btnDisabled: false, numOfProductSelected: '1 to 5 products', distanceSelected: 'Less than 1 km away' };
        window.addEventListener('keydown', el => {
            if (el.isComposing || el.keyCode === 13) {
                this.searchClicked();
            }
        });
    }

    getLocation = (e) => {
        if (navigator.geolocation) {
            this.setState({ locationBtnText: 'Finding Location..', btnDisabled: true });
            e.target.disabled = true;
            navigator.geolocation.getCurrentPosition((position) => {
                this.location = { lat: position.coords.latitude, long: position.coords.longitude };
                this.setState({ locationBtnText: 'Location Found', btnDisabled: true });
            });
          } else {
            this.setState({ locationBtnText: 'Find your Location', btnDisabled: false });
            StatusAlertService.removeAllAlerts();
            StatusAlertService.showError('Unable to get current location.');
          }
    }

    searchClicked = () => {
        alert('search clicked');
    }

    render() {
        return (
            <div className='search-page'>
                <StatusAlert />
                <div className='search-page__header'>
                    <h1 className='search-page__title'>
                        Find <span className='text--sea'>all the data </span> 
                        you need to make decisions on <span className='text--sea'>where to shop</span> 
                    </h1>
                    <h3 className='search-page__body'>To start, just start typing your address or hit the location button to give us a starting search point. Then, select any products you’re looking for and hit search!</h3>
                </div>
                <div className='search-page__search-widget'>
                    <div className='search-page__location-wrapper'>
                        <h3 className='search-page__label'>Location</h3>
                        <button onClick={(e) => this.getLocation(e)} disabled={this.state.btnDisabled} className='search-page__location-btn'>
                            <div className='search-page__location-content'>
                                <img alt='location' src={(this.state.locationBtnText === 'Location Found') ? checkIcon : locationIcon} className='search-page__find-location-btn' />
                                <h3 className='search-page__location-btn-text'>{this.state.locationBtnText}</h3>
                            </div>
                        </button>
                    </div>
                    <div className='search-page__amount-wrapper'>
                        <h3 className='search-page__amount-label'>Amount of Data</h3>
                        <img alt='dropdown arrow'src={dropdownIcon} className='search-page__dropdown-icon-amount' />
                        <select className='search-page__data-amount-dropdown' onChange={(e) => this.setState({ numOfProductsSelected: e.target.value })}>
                            <option value='1 to 5 products'>1 to 5 products</option>
                            <option value='6 to 10 products'>6 to 10 products</option>
                            <option value='10 to 15 products'>10 t0 15 products</option>
                            <option value='At least 16 products'>At least 16 products</option>
                        </select>
                    </div>
                    <div className='search-page__distance-wrapper'>
                        <h3 className='search-page__distance-label'>Distance</h3>
                        <img alt='dropdown arrow' src={dropdownIcon} className='search-page__dropdown-icon' />
                        <select value={this.state.distanceSelected} onChange={(e) => this.setState({ distanceSelected: e.target.value })}  className='search-page__distance-dropdown'>
                            <option value='Less than 1 km away'>Less than 1 km away</option>
                            <option value='1 to 5 km away'>1 to 5 km away</option>
                            <option value='6 to 25 km away'>6 to 25 km away</option>
                            <option value='Any distance away'>Any distance away</option>
                        </select>
                    </div>
                    <button onClick={() => this.searchClicked()} className='search-page__search-btn'>Search Data</button>
                </div>
            </div>
        );
    }
}

export default Search;