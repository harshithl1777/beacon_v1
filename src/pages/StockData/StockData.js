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

    // const [info, setInfo] = useState({
    //     eggsBool: false,
    //     eggsQ: "",
    //     eggsP: "",
    //     eggsD: "",
    //     milkBool: false,
    //     milkQ: "",
    //     milkBool: "",
    //     milkQ: "",
    //     breadBool: false,
    //     breadQ: "",
    //     breadP: "",
    //     breadD: "",
    //     bagelBool: false,
    //     bagelQ: "",
    //     bagelP: "",
    //     bagelD: "",
    //     riceBool: false,
    //     riceQ: "",
    //     riceP: "",
    //     riceD: "",
    //     onionsBool: false,
    //     onionsQ: "",
    //     onionsP: "",
    //     onionsD: "",
    //     potatoesBool: false,
    //     potatoesQ: "",
    //     potatoesP: "",
    //     potatoesD: "",
    //     applesBool: false,
    //     applesQ: "",
    //     applesP: "",
    //     applesD: "",
    //     chickenBool: false,
    //     chickenQ: "",
    //     chickenP: "",
    //     chickensD: "",
    //     fishBool: false,
    //     fishQ: "",
    //     fishP: "",
    //     fishD: "",
    //     beefBool: false,
    //     beefQ: "",
    //     beefP: "",
    //     beefD: "",
    //     porkBool: false,
    //     porkQ: "",
    //     porkP: "",
    //     porkD: "",
    //     pastaBool: false,
    //     pastaQ: "",
    //     pastaP: "",
    //     pastaD: "",
    //     soupBool: false,
    //     soupQ: "",
    //     soupP: "",
    //     soupD: "",
    //     pizzaBool: false,
    //     pizzaQ: "",
    //     pizzaP: "",
    //     pizzaD: "",
    //     noodlesBool: false,
    //     noodlesQ: "",
    //     noodlesP: "",
    //     noodlesD: ""
    // });


    // const {
    //     eggsBool,
    //     eggsQ,
    //     eggsP,
    //     eggsD,
    //     milkBool,
    //     milkQ,
    //     milkP,
    //     milkD,
    //     breadBool,
    //     breadQ,
    //     breadP,
    //     breadD,
    //     bagelBool,
    //     bagelQ,
    //     bagelP,
    //     bagelD,
    //     riceBool,
    //     riceQ,
    //     riceP,
    //     riceD,
    //     onionsBool,
    //     onionsQ,
    //     onionsP,
    //     onionsD,
    //     potatoesBool,
    //     potatoesQ,
    //     potatoesP,
    //     potatoesD,
    //     applesBool,
    //     applesQ,
    //     applesP,
    //     applesD,
    //     chickenBool,
    //     chickenQ,
    //     chickenP,
    //     chickensD,
    //     fishBool,
    //     fishQ,
    //     fishP,
    //     fishD,
    //     beefBool,
    //     beefQ,
    //     beefP,
    //     beefD,
    //     porkBool,
    //     porkQ,
    //     porkP,
    //     porkD,
    //     pastaBool,
    //     pastaQ,
    //     pastaP,
    //     pastaD,
    //     soupBool,
    //     soupQ,
    //     soupP,
    //     soupD,
    //     pizzaBool,
    //     pizzaQ,
    //     pizzaP,
    //     pizzaD,
    //     noodlesBool,
    //     noodlesQ,
    //     noodlesP,
    //     noodlesD
    // } = info;

    // const prodCheck = (name) => {
    //     if (name == "eggs" || name == "Eggs" || name == "egg" || name == "Egg"){
    //         setInfo({ eggsBool: true});
    //     }
    //     else if (name == "milk" || name == "Milk"){
    //         setInfo({ milkBool: true});
    //     }
    //     else if (name == "bread" || name == "Bread"){
    //         setInfo({ breadBool: true});
    //     }
    //     else if (name == "bagel" || name == "Bagel"){
    //         setInfo({ bagelBool: true});
    //     }
    //     else if (name == "rice" || name == "Rice"){
    //         setInfo({ riceBool: true});
    //     }
    //     else if (name == "onion" || name == "Onion" || name == "onions" || name == "Onions"){
    //         setInfo({ onionsBool: true});
    //     }
    //     else if (name == "potatoe" || name == "Potatoe" || name == "potatoes" || name == "Potatoes"){
    //         setInfo({ potatoesBool: true});
    //     }
    //     else if (name == "apple" || name == "Apple" || name == "apples" || name == "Apples"){
    //         setInfo({ applesBool: true});
    //     }
    //     else if (name == "chicken" || name == "Chicken"){
    //         setInfo({ chickenBool: true});
    //     }
    //     else if (name == "fish" || name == "Fish"){
    //         setInfo({ fishBool: true});
    //     }
    //     else if (name == "beef" || name == "Beef"){
    //         setInfo({ beefBool: true});
    //     }
    //     else if (name == "pork" || name == "Pork"){
    //         setInfo({ riceBool: true});
    //     }
        
    // }

    // const prodQuantity = (itemQ, amount) => {
    //     setInfo({...info, [itemQ]: amount})
    // }

    // const handleBtnClick = (quantity) => {
    //     onChangeText(quantity)
    //   }


    //   const onChangeText = (name , quantity) =>  {
    //     setInfo({ ...info, [name]: quantity });
    // };

    // const fetchFromBackend =(props) => {
    //     const [state, dispatch] = useReducer(reducer, {data:[]});
    //     dispatch({
    //         type: 'DATA_UPLOADED',
    //         dummyData: dummyData
    //     })
    // }

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
                    <input className="add-product__prod" placeholder="Enter product name" ></input>
                                  
                    <div className="add-product__btns">
                        <button className="add-product__empty" >Empty</button>
                        <button className="add-product__low" >Low</button>
                        <button className="add-product__medium" >Medium</button>
                        <button className="add-product__high" >High</button>
                    </div>
                    {/* <Link to={{ pathname: '/app/', state:{name: data.name, storeName: data.storeName, eggs: info.eggsBool,
                         eggsQuantity: info.eggsQ, eggsPrice: info.eggsP, eggsDemand: info.eggsD, milk: info.milkBool,
                         milkQuantity: info.milkQ, milkPrice: info.milkP, milkDemand: info.milkD, bread: info.breadBool,
                         breadQuantity: info.breadQ, breadPrice: info.breadP, breadDemand: info.breadD, bagel: info.bagelBool,
                         bagelQuantity: info.bagelQ, bagelPrice: info.bagelP, bagelDemand: info.bagelD, eggs: info.eggsBool,
                         eggsQuantity: info.eggsQ, eggsPrice: info.eggsP, eggsDemand: info.eggsD,}}}>
                        <button className="add-product__next">Continue to the next step</button>
                    </Link> */}
                </div>      
                    
        
        </div>
    );
}


export default StockData;