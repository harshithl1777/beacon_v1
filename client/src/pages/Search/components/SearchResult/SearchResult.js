import React, { Component } from 'react';
import storeIcon from './assets/storeIcon.svg';
import lastUpdatedIcon from './assets/lastUpdated.svg';
import followersIcon from './assets/followersIcon.svg';
import followIcon from './assets/followersIcon.svg';
import chartBar from './assets/chartBar.svg';
import './searchresult.css';

class SearchResult extends Component {
    constructor(props) {
        super(props);
        this.data = this.props.data;
    }

    renderChart = () => {
        return this.data.stock.map((prod, index) => {
            var number;
            do {
            number = Math.floor(Math.random() * 999);
            } while (number < 100);
            return (
                <div key={index} className='search-result__product-line'>
                    <h3 className='search-result__product-id'>{number}</h3>
                    <h3 className='search-result__product-name'>{prod.prodName}</h3>
                    <h3 className='search-result__product-price'>{prod.price}</h3>
                    <div className='search-result__product-level'>{prod.level}</div>
                    <div className='search-result__product-demand'>{prod.demand}</div>
                    <h3 className='search-result__product-last-updated'>{prod.lastUpdated}</h3>
                </div>
            );
        })
    }


    render() {
        return (
            <div className='search-result'>
                <div className='search-result__follow-store'>
                    <div onClick={() => this.newFollower()} className='search-result__follow-content'>
                        <img alt='store' src={followIcon} className='search-result__follow-icon'/>
                        FOLLOW STORE
                    </div>
                </div>
                <div className='search-result__store-info'>
                    <img alt='store' src={storeIcon} className='search-result__store-img' />
                    <div className='search-result__store-details'>
                        <h2 className='search-result__store-name'>{this.data.name}</h2>
                        <h4 className='search-result__store-address'>{this.data.address}</h4>
                        <div className='search-result__tags'>
                            <div className='search-result__last-updated'>
                                <div className='search-result__updated-content'>
                                    <img alt='store' src={lastUpdatedIcon} className='search-result__updated-icon'/>
                                    <h4 className='search-result__updated-text'>UPDATED FREQUENTLY</h4>
                                </div>
                            </div>
                            <div className='search-result__followers'>
                                <div className='search-result__followers-content'>
                                    <img alt='store' src={followersIcon} className='search-result__followers-icon'/>
                                    <h4 className='search-result__followers-text'>{`${this.data.followers} FOLLOWERS`}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='search-result__store-data'>
                    <div className='search-result__store-lines'>
                        <div className='search-result__product-num line-text'>{`Found ${this.data.stock.length} products in total`}</div>
                        <div className='search-result__current-line line-text'>{this.data.lines.currentLine}</div>
                        <div className='search-result__line-speed line-text'>{this.data.lines.speed}</div>
                        <div className='search-result__wait-time line-text'>{this.data.lines.wait}</div>
                    </div>
                    <img alt='store' draggable='false' className='search-result__chart-bar' src={chartBar} />
                    <table className='search-result__data-chart'>
                        {this.renderChart()}
                    </table>
                </div>
            </div>
        );
    }
}

export default SearchResult;