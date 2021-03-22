import React from 'react';
import './highlightcontent.css';
import grey from './assets/grey.svg'


const HighlightContent = () => {
    return (
        <div className='highlightcontent'>

            <img src={grey} alt="grey" className='grey' />

            <div className='highlightcontent__section'>
                <div className='highlightcontent__one'>
                    <div className='highlightcontent__num'>
                        <h2 className='hightlightcontent__number'>1</h2>
                    </div>
                    <div className='highlightcontent__text'>
                        <h2 className='highlightcontent__main'>Search for store data</h2>
                        <h3 className='highlightcontent__sub'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor.</h3>
                    </div>
                </div>
                <div className='highlightcontent__two'>
                    <div className='highlightcontent__num'>
                        <h2 className='hightlightcontent__number'>2</h2>
                    </div>
                    <div className='highlightcontent__text'>
                        <h2 className='highlightcontent__main'>Get your shopping done</h2>
                        <h3 className='highlightcontent__sub'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor.</h3>
                    </div>
                </div>
                <div className='highlightcontent__three'>
                    <div className='highlightcontent__num'>
                        <h2 className='hightlightcontent__number'>3</h2>
                    </div>
                    <div className='highlightcontent__text'>
                        <h2 className='highlightcontent__main'>Contribute to our data</h2>
                        <h3 className='highlightcontent__sub'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor.</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default HighlightContent;