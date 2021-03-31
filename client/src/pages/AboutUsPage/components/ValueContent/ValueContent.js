import React from 'react';
import './valuecontent.css';
import valuegrey from './Assets/valuegrey.svg'

const ValueContent = ({header, main, sub}) => {
    return (
        <div className='valuecontent'>
            <div className='valuecontent__text'>
                <h4 className='valuecontent__heading'>{header}</h4>
                <h2 className='valuecontent__main'>{main}</h2>
                <h3 className='valuecontent__sub'>{sub}</h3>
                <div className='valuecontent__buttons'>
                    <img src={valuegrey} alt='grey' className='valuecontent__grey'/>
                    <img src={valuegrey} alt='grey' className='valuecontent__grey'/>
                    <img src={valuegrey} alt='grey' className='valuecontent__grey'/>
                    <img src={valuegrey} alt='grey' className='valuecontent__grey'/>
                </div>
            </div>
        </div>
    );
}


export default ValueContent;