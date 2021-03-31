import React from 'react';
import './whocontent.css';
import whogrey from './Assets/whogrey.svg'

const WhoContent = ({header, main, sub}) => {
    return (
        <div className='whocontent'>
            <div className='whocontent__text'>
                <h4 className='whocontent__heading'>{header}</h4>
                <h2 className='whocontent__main'>{main}</h2>
                <h3 className='whocontent__sub'>{sub}</h3>
                <div className='whocontent__buttons'>
                    <img src={whogrey} alt='grey' className='whocontent__grey'/>
                    <img src={whogrey} alt='grey' className='whocontent__grey'/>
                    <img src={whogrey} alt='grey' className='whocontent__grey'/>
                </div>
            </div>
        </div>
    );
}


export default WhoContent;