import React from 'react';
import './leftcontent.css';
import landing__img from './Assets/landingimg.svg'


const LeftContent = ({main, sub}) => {
    return (
        <div className='leftcontent'>
            
            <div className='leftcontent__left'>
                <h2 className='leftcontent__main'>{main}</h2>
                <h3 className='leftcontent__sub'>{sub}</h3>
                <button className='leftcontent__btn'> Start Searching </button>
            </div>

            <div className='leftcontent__right'>
            <img src={landing__img} alt='Logo' className='landing__img' draggable='false'/>            
            </div>
            
        </div>
    );
}


export default LeftContent;