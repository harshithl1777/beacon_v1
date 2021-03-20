import React, { Component } from 'react';
import './noresults.css';
import ex from './assets/ex.svg';



class NoResults extends Component {
    render() {
        return (
            <div className="no-results">
                <div className="top-dark"></div>
                <img className="ex" src={ex}></img>
                <h1 className="no-results__title">No results found based on your search.</h1>
                <h1 className="no-results__text">Perhaps try with a different search or consider
                 contributing to Beacon’s database after you next go shopping so that other
                  shoppers can access this information.</h1>
            </div>
        );
    }
}

export default NoResults;