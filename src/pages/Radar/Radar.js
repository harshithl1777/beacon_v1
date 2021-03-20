import { BrowserRouter as Link } from 'react-router-dom';
import React, { Component } from 'react';
import safari from "./assets/safari.svg";
import './radar.css';

const Radar = () => {
        return (
            <div className='radar'>
                <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet"></link>
                <link href="https://fonts.googleapis.com/css?family=Inter" rel="stylesheet"></link>
                <h1 className="radar__title">Your Contributions</h1>
                <h1 className="radar__text">Lorem ipsum dolor sit amet,
                 consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua ut enim
                   ad minim veniam. Lorem ipsum dolor sit amet, co.</h1>

                <div className="radar__cont">
                    <div className="cont__fixed">
                        <button className="fixed__check"></button>
                        <img className="fixed__img" src={safari}></img>
                        <h1 className="fixed__num-cont">3 total contributions</h1>
                        <button className="fixed__stock-cont" disabled>1 STOCK CONT.</button>
                        <button className="fixed__lines-cont" disable>1 LINES CONT.</button>
                    </div>
                    
                    <div className="cont__create">
                        <button className="create__check"></button>
                        <h1 className="create__title">Contribution for Costco Wholesale</h1>
                        <h1 className="title__address">121 Front Street West, Monte Carlo, Florida, US</h1>
                        <h1 className="create__date">January 17, 2021</h1>
                        <button className="create__lines-cont" disabled>LINES CONTRIBUTION</button>
                        <button className="create__stock-cont" disabled>STOCK CONTRIBUTION</button>
                        <button className="create__item-1" disabled>EGGS</button>
                        <button className="create__item-2" disabled>MILK</button>
                        <button className="create__dots" disabled>...</button>
                    </div>
                </div>
                   
                

                
            </div>
        );
}

export default Radar;