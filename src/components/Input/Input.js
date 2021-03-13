import React from 'react';
import './input.css';

const Input = ({ placeholder, type }) => {
    return (
        <input className='input' placeholder={placeholder} />
    );
}

export default Input;