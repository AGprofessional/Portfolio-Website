import React from 'react';

import './Button.css';

import {Link} from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large'];
export const Button = 
    ({
    children, type, onClick, buttonStyle, buttonSize
     }) =>{
         //buttonStyle, buttonSize are attributes of the Button tag that will be passed in
         //this is saying if there is no attribute passed in as buttonStyle or buttonSize, set the value of checkButtonStyle or checkButtonSize to the default value of STYLES[0] or SIZE[0]
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize= SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
//the entire button is a router Link, and in it is an html button 
    return(
        
        <Link to='/sign-up' className='btn-mobile'>
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick = {onClick} type = {type}>
                    {children}
            </button>
        </Link>)
    
    };



