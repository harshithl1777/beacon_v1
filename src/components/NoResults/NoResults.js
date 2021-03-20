import React, { Component } from 'react';
import './noresults.css';

class NoResults extends Component {
    render() {
        return (
            <div>
                <div className="top-dark"></div>
                <img className="ex" src=""></img>
                <h1 className="no-results__title">No results found based on your search</h1>
            </div>
        );
    }
}

export default NoResults;