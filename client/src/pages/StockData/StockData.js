import React, { useState } from 'react';
import logo from "./assets/logo.svg";
import './stock-data.css';
import { Link } from 'react-router-dom';

const StockData = (props) => {
    const [inputNum] = useState(3);
    const [data, setData] = useState([
        { prodName: "Select product", price: '', level: "Select level", demand: "Select demand"},
        { prodName: "Select product", price: '', level: "Select level", demand: "Select demand"},
        { prodName: "Select product", price: '', level: "Select level", demand: "Select demand"},
        { prodName: "Select product", price: '', level: "Select level", demand: "Select demand"},
    ]);

    const products = ["Eggs", "Milk", "Bread", "Bagel", "Rice"
     ,"Onions", "Potatoes", "Apples", "Chicken", "Fish", "Beef"
     , "Pork", "Pasta", "Soup", "Pizza", "Noodles" ];
    

    var storeNameProp = props.location.state.name;
    var idProp = props.location.state.id;
    var timeProp = props.location.state.time;
    var locationProp = props.location.state.location;
    var addressProp = props.location.state.address;

    const renderProductOptions = () => {
        return products.map((product, index) => {
            return <option key={index} value={product}>{product}</option>;
        });
    }
    
    const renderProductInputs = () => {
        let inputArray = [];
        for (var i = 0; i <= inputNum; i++) {
            inputArray.push(i);
        }
        return inputArray.map((line) => {
            return (
                <div key={line} className='stock-dropdowns'>
                    <select id="stock-dropdown-1" defaultValue='Select product' className={line} value={data.prodName}  onChange={e => onChangeText('prodName', e)}>
                        <option disabled>Select product</option>
                        {renderProductOptions()}
                    </select>
                    <select id="stock-dropdown-2" defaultValue='Select level' className={line} value={data.level} onChange={e => onChangeText('level', e)}>
                        <option disabled>Select Level</option>
                        <option value="EMPTY">Empty</option>
                        <option value="LOW">Low</option>
                        <option value="MEDIUM">Medium</option>
                        <option value="HIGH">High</option>
                    </select>
                    <input id="stock-price" className={line} placeholder="Enter Price" value={data.price} onChange={e => onChangeText('price', e)}></input>
                    <select id="stock-dropdown-3" defaultValue='Select demand' className={line} value={data.demand} onChange={e => onChangeText('demand', e)}>
                        <option disabled>Select demand</option>
                        <option value="LOW DEMAND">Low Demand</option>
                        <option value="MED. DEMAND">Medium Demand</option>
                        <option value="HIGH DEMAND">High Demand</option>
                    </select>
                </div>
            );
        });
    }

    const onChangeText = (inputName, e) => {
        var line = e.target.className;
        const newValue = e.target.value;
        const total = data;
        total[line][inputName] = newValue;
        setData(total);
    }

    return (
        <div className='stock-section'>
            <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/css?family=Inter" rel="stylesheet"></link>
            <div className="stock-top-line"></div>
                <img className="logo" src={logo} alt="logo"></img>
                <h1 className="stock-title">Stock Levels Data</h1>
                <div className="stock-levels">
                    {/* <button className="stock-levels__add-product" onClick={() => addProduct()}>Add Product</button>
                    <button className="stock-levels__del-product" onClick={() => delProduct()}>Delete Product</button> */}
                    <h1 className="stock-levels__title">What were the product stock levels like?</h1> 
                    <h1 className="stock-levels__text">Please select the stock levels for any 5 products</h1>
                    <br></br>
                    {renderProductInputs()}
                    <Link to={{ pathname: '/contribute/2.1', state:{ name: storeNameProp, time: timeProp, id: idProp, location: locationProp, address: addressProp, stock: data }}}>
                        <button className="next">Continue to the next step</button>
                    </Link>
                </div>
        </div>
    );
}


export default StockData;