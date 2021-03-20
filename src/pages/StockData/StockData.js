import React, {useEffect, useReducer, useState} from 'react';
import logo from "./assets/logo.svg";
import './stock-data.css';
import { Link } from 'react-router-dom';

// const reducer = (state, action) => {
//     const {type, dummyData} = action;
//     switch(type) {
//         case 'DATA_UPLOADED':
//             return {...state, data: dummyData}
//         default:
//             return {...state, data: []}
//     }
// }

const StockData = () => {
    // var nameProp = props.location.state.name;
    // var storeNameProp = props.location.state.storeName;

    // const dummyData = {
    //     name: nameProp,
    //     storeName: storeNameProp,
    // }
    
    const products = ["Eggs", "Milk", "Bread", "Bagel", "Rice"
     ,"Onions", "Potatoes", "Apples", "Chicken", "Fish", "Beef"
     , "Pork", "Pasta", "Soup", "Pizza", "Noodles" ];

    const [data, setData] = useState({
        name: "",
        price: 0,
        level: "",
        demand: "",
        time: ""
    });

    const {
        name,
        price,
        level,
        demand,
        time
    } = data;

    const onChangeText = (name, inputName) => {
        setData({...data, [name]: inputName});
    }

    const [inputNum, setInputNum] = useState(3);
    const renderProductOptions = () => {
        return products.map((product, index) => {
            return <option key={index} value={product}>{product}</option>;
        });
    }
    
    const renderProductInputs = () => {
        let inputArray = [];
        for (var i = 1; i <= inputNum; i++) {
            inputArray.push(i);
        }
        return inputArray.map((line) => {
            return (
                <div key={data.name} className="stock-dropdowns">
                    <select id="stock-dropdown-1" onChange={(e) => onChangeText("name", e.target.value) }>
                        <option disabled selected>Select Product</option>
                        {renderProductOptions()}
                    </select>
                    <select id="stock-dropdown-2" onChange={(e) => onChangeText("level", e.target.value) }>
                        <option disabled selected>Select Level</option>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                    <input id="price" className="stock-price" placeholder="Enter Price"  onChange={(e) => onChangeText("price", e.target.value) }></input>
                    <select id="stock-dropdown-3" onChange={(e) => onChangeText("demand", e.target.value) }>
                        <option disabled selected>Select Demand</option>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                </div>
            );
        });
    }

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
                    <button className="stock-levels__add-product" onClick={() => setInputNum(inputNum+1)}>Add Product</button>
                    <button className="stock-levels__del-product" onClick={() => setInputNum(inputNum-1)}>Delete Product</button>
                    <h1 className="stock-levels__title">What were the product stock levels like?</h1> 
                    <h1 className="stock-levels__text">Add as many products as you like and select the appropriate level.</h1>
                    <br></br>
                    {renderProductInputs()}
                    {/* <Link to={{ pathname: '/app/contribute2.1', state:{name: data.name, storeName: data.storeName, }}}>
                        <button className="add-product__next" >Continue to the next step</button>
                    </Link> */}
                </div>      
                    
        
        </div>
    );
}


export default StockData;