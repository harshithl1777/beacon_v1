import React from 'react';
import axios from 'axios';
import StatusAlert, { StatusAlertService, StautsAlertService } from 'react-status-alert';
import logo from "./assets/logo.svg";
import contributed from "./assets/contributed.svg";
import './thanks.css';

const Thanks = (props) => {
    const totalData = props.location.state;

    const formatStock = (data) => {
        const newData = data.filter((product) => product.prodName !== 'Select product');
        newData.forEach((item, index) => {
            item['lastUpdated'] = (totalData.time.slice(-2) === 'am') ? totalData.time.slice(0, totalData.time.length-2)+'AM' : totalData.time.slice(0, totalData.time.length-2)+'PM';
            item.price = `${totalData.stock[index].price}`;
        });
        return newData;
    }

    const formattedData = {
        _id: totalData.id,
        name: totalData.name,
        location: totalData.location,
        address: totalData.address,
        lines: {
            currentLine: `About ${totalData.pplInLine} people in line`,
            speed: totalData.lineSpeed,
            wait: `About ${totalData.waitTime} min wait-time`
        },
        stock: formatStock(totalData.stock),
        followers: 0,
    };
    
    const insertToDB = () => {
        axios.get(`${process.env.REACT_APP_URL}/api/stores`, {
            params: {
                token: process.env.REACT_APP_API_STORE_DATA_TOKEN,
                docID: formattedData._id
            }
        })
        .then(({ data }) => {
            if (data.data !== 0) {
                console.log(data.data);
                updateStore(data.data);
            } else {
                insertNewDoc();
            }
        })
        .catch((err) => {
            console.log(err);
            StatusAlertService.showError('Unable to insert data. Try again later');
        });
    }

    const updateStore = (old) => {
        formattedData['followers'] = old.followers;
        for (var x = 0; x < formattedData.stock.length; x++) {
            const newStock = formattedData.stock[x];
            for (var y = 0; y < old.stock.length; y++) {
                if (newStock.name === old.stock[y].name) {
                    old['stock'] = old.stock.slice(y);
                }
            }
        }
        for (var z = 0; z < old.stock.length; z++) {
            formattedData.stock.push(old.stock[z]);
        }
        console.log(formattedData, old);
        axios.post(`${process.env.REACT_APP_URL}/api/stores/replace`, {
            token: process.env.REACT_APP_API_STORE_DATA_TOKEN,
            data: formattedData,
        })
        .then(() => {
            console.log('WORKED');
            // window.location.href = `${process.env.REACT_APP_URL}/app/search`;
        })
        .catch((err) => {
            console.log(err);
            StatusAlertService.showError('Unable to update data. Try again later');
        });
    }

    const insertNewDoc = () => {
        console.log(process.env.REACT_APP_URL);
        axios.post(`${process.env.REACT_APP_URL}/api/stores/new`, {
            token: process.env.REACT_APP_API_STORE_DATA_TOKEN,
            data: formattedData,
        })
        .then(() => {
            window.location.href = `${process.env.REACT_APP_URL}/app/search`;
        })
        .catch(() => StatusAlertService.showError('Unable to insert new data. Try again later'));
    }

    return (
        <div className='thanks-section'>
            <StatusAlert />
            <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/css?family=Inter" rel="stylesheet"></link>
            <div className="thanks-top-line"></div>  
            <img className="logo" src={logo} alt="logo"></img>
                <h1 className="thanks-title">{`Thanks for contributing!`}</h1>
                <h1 className="thanks-title__text">Lorem ipsum dolor sit amet,
                 consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua ut enim ad minim veniam.
                   Lorem ipsum dolor sit amet, co.</h1>
            <img className="contributed" alt="contributed" src={contributed}></img>
            <button className="gtg" onClick={() => insertToDB()}>I'm good to go</button>
        </div>
    );
}


export default Thanks;