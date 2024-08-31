import React from 'react';
import sun from './sun.svg';

//Simple function used to format the title and spinning sun icon
function HelloWorld(){
    return (
        <div className="Title-container">
            <h1 className="Title-title">
                Simple Weather App by Chin-Hsiang Ho
                
            </h1>
            <img src={sun} className="Sun-icon" alt="Sun icon" />
            
        </div>
    );
}

export default HelloWorld