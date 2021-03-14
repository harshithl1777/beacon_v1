import React from 'react';
import './rightcontent.css';
import landing__img from './Assets/landingimg.svg'


const RightContent = ({main, sub}) => {
    return (
        <div className='rightcontent'>
            <div className='rightcontent__left'>
            <img src={landing__img} alt='Logo' className='landing__img' draggable='false'/>            
            </div>
            <div className='rightcontent__right'>
                <h2 className='rightcontent__main'>{main}</h2>
                <h3 className='rightcontent__sub'>{sub}</h3>
                <button className='rightcontent__btn'> Start Searching </button>
            </div>
            
        </div>
    );
}


export default RightContent;