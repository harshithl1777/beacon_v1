import React from 'react';
import logo from "./assets/logo.svg";
import './stock-data.css';
// import { DropdownButton, Item } from '@popperjs/core';

const StockData = () => {
    return (
        <div className='stock-section'>
            <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/css?family=Inter" rel="stylesheet"></link>
            <div className="stock-top-line"></div>
                <img className="logo" src={logo} alt="logo"></img>
                <h1 className="stock-title">Stock Levels Data</h1>
                <h1 className="stock-title__text">Lorem ipsum dolor sit amet,
                 consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua ut enim
                   ad minim veniam. Lorem ipsum dolor sit amet, co.</h1>

                
                <div className="stock-levels">
                    <button className="stock-levels__add-product">Add Product</button>
                    <h1 className="stock-levels__title">What were the product stock levels like?</h1> 
                    <h1 className="stock-levels__text">Add as many products as you like and select the appropriate level.</h1>
                    <br></br>
                    {/* <DropdownButton id="add-product__dropdown" title="Select Button">
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </DropdownButton> */}
                    <div className="add-product__btns">
                        <button className="add-product__empty">Empty</button>
                        <button className="add-product__low">Low</button>
                        <button className="add-product__medium">Medium</button>
                        <button className="add-product__high">High</button>
                    </div>
                    <button className="add-product__next">Continue to the next step</button>
                </div>      
                    
        
        </div>
    );
}


export default StockData;