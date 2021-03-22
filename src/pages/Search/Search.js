import React, { Component } from 'react';
import StatusAlert, { StatusAlertService } from 'react-status-alert';
import axios from 'axios';
import SearchResult from './components/SearchResult/SearchResult';
import locationIcon from './assets/location.svg';
import dropdownIcon from './assets/dropdown.svg';
import checkIcon from './assets/check.svg';
import './search.css';

class Search extends Component {
    constructor() {
        super();
        this.state = { address: '', locationBtnText: 'Find your location', btnDisabled: false, numOfProductSelected: '1 to 5 products', distanceSelected: 'Less than 1 km away', data: null };
        window.addEventListener('keydown', el => {
            if (el.isComposing || el.keyCode === 13) {
                this.searchClicked();
            }
        });
        this.search = React.createRef();
    }

    componentDidUpdate() {
        if (this.state.data) {
            window.scrollTo({ top: this.search.current.offsetTop-20, left: 0, behavior: 'smooth' });
        }
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
        if (this.state.locationBtnText === 'Location Found') {
            axios.post(`${process.env.REACT_APP_URL}/api/stores/query`, {
                token: process.env.REACT_APP_API_STORE_DATA_TOKEN,
                origins: [43.597156, -79.703706],
                distance: parseInt(this.state.distanceSelected)
            })
            .then(({ data }) => {
                this.setState({ data: data.data });
            })
            .catch(err => {
                console.log(err);
                StatusAlertService.removeAllAlerts();
                StatusAlertService.showError('Unable to search. Try again later');
            });
        } else {
            StatusAlertService.removeAllAlerts();
            StatusAlertService.showError("Missing fields detected. Fill out all fields.");
        }
    }

    renderResults = () => {
        return this.state.data.map((store, index) => {
            return <SearchResult key={index} data={store} />
        });
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
                <div  ref={this.search} className='search-page__search-widget'>
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
                            <option value='10 to 15 products'>10 to 15 products</option>
                            <option value='At least 16 products'>At least 16 products</option>
                        </select>
                    </div>
                    <div className='search-page__distance-wrapper'>
                        <h3 className='search-page__distance-label'>Distance</h3>
                        <img alt='dropdown arrow' src={dropdownIcon} className='search-page__dropdown-icon' />
                        <select value={this.state.distanceSelected} onChange={(e) => this.setState({ distanceSelected: e.target.value })}  className='search-page__distance-dropdown'>
                            <option value='1'>Less than 1 km away</option>
                            <option value='5'>1 to 5 km away</option>
                            <option value='15'>6 to 15 km away</option>
                            <option value='30'>16 to 30 km away</option>
                            <option value='75'>31 to 75 km away</option>
                            <option value='150'>76 to 150 km away</option>
                            <option value='300000000'>Any distance away</option>
                        </select>
                    </div>
                    <button onClick={() => this.searchClicked()} className='search-page__search-btn'>Search Data</button>
                </div>
                <div className='search-page__results-table'>
                    {(this.state.data !== null) ? this.renderResults() : null}
                </div>
            </div>
        );
    }
}

export default Search;