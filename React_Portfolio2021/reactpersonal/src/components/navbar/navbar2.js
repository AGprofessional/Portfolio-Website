import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { Button } from '../button/Button';
import './Navbar2.css';

const Navbar2 = () =>{
const [click, setClick] = useState(false);
const [button, setButton] = useState(false);

const handleClick = ()=>{
    setClick(!click);
    console.log(click);
}
return(

<>
<nav className="navbar">
<div className="menu-icon" onClick = {handleClick}>
    <i className={click?'fas fa-times': 'fas fa-bars'}></i>
</div>
</nav>

</>



)



}

export default Navbar2;