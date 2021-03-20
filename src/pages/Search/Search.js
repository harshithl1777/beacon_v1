import React, { Component } from 'react';
import StatusAlert, { StatusAlertService } from 'react-status-alert';
import axios from 'axios';
import locationIcon from './assets/location.svg';
import dropdownIcon from './assets/dropdown.svg';
import './search.css';

class Search extends Component {
    constructor() {
        super();
        this.state = { address: '' };
        window.addEventListener('keydown', el => {
            if (el.isComposing || el.keyCode === 13) {
                this.searchClicked();
            }
        });
    }

    getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                console.log(process.env.REACT_APP_MAPBOX_TOKEN);
                axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${position.coords.longitude},${position.coords.latitude}.json`, {
                    params: {
                        types: 'address',
                        access_token: process.env.REACT_APP_MAPBOX_TOKEN,
                    }
                })
                .then(({ data }) => {
                    console.log(data);
                })
                .catch((error) => {
                    console.log(error);
                })
            });
          } else {
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
                        <button onClick={() => this.getLocation()} className='search-page__location-btn'>
                            <div className='search-page__location-content'>
                                <img alt='location' src={locationIcon} className='search-page__find-location-btn' />
                                <h3 className='search-page__location-btn-text'>Get Location</h3>
                            </div>
                        </button>
                    </div>
                    <div className='search-page__amount-wrapper'>
                        <h3 className='search-page__amount-label'>Amount of Data</h3>
                        <img alt='dropdown arrow'src={dropdownIcon} className='search-page__dropdown-icon-amount' />
                        <select className='search-page__data-amount-dropdown'>
                            <option value='1 to 5 products'>1 to 5 products</option>
                            <option value='6 to 10 products'>6 to 15 products</option>
                            <option value='11 to 15 products'>4 to 10 km away</option>
                            <option value='16 to 20 products'>10 to 25 km away</option>
                            <option value='20+ products'>More than 20 products</option>
                        </select>
                    </div>
                    <div className='search-page__distance-wrapper'>
                        <h3 className='search-page__distance-label'>Distance</h3>
                        <img alt='dropdown arrow' src={dropdownIcon} className='search-page__dropdown-icon' />
                        <select className='search-page__distance-dropdown'>
                            <option value='Less than 1 km'>Less than 1 km away</option>
                            <option value='1 to 3 km away from location'>1 to 3 km away</option>
                            <option value='4 to 10 km away'>4 to 10 km away</option>
                            <option value='10 to 25 km'>10 to 25 km away</option>
                            <option value='Any distance'>Any distance away</option>
                        </select>
                    </div>
                    <button onClick={() => this.searchClicked()} className='search-page__search-btn'>Search Data</button>
                </div>
            </div>
        );
    }
}

export default Search;