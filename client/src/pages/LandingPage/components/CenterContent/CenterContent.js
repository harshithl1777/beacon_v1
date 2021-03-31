import React from 'react';
import './centercontent.css';


const CenterContent = ({header, main, sub}) => {
    return (
        <div className='content'>
            <div className='content__text'>
                <h4 className='content__heading'>{header}</h4>
                <h2 className='content__main'>{main}</h2>
                <h3 className='content__sub'>{sub}</h3>
            </div>
        </div>
    );
}


export default CenterContent;