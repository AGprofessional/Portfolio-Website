import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { Button } from '../button/Button';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = ()=>setClick(!click);
    const closeMobileMenu = ()=>setClick(false);

    //function that removes button on mobile/depending on screen size
    const showButton = ()=>{
        if (window.innerWidth<=960){ //show button only if screen size (window.innerWidth is > 960px)
            setButton(false);
        }else{
            setButton(true);
        }
    };

    /* window.addEventListener('resize', showButton); */
    return (
        <div>
        <nav class="navbar">
            <div class="navbar-container1">
                <Link to="/" className="navbar-logo1">Akash </Link>
            </div>
            <div className="menu-icon" onClick = {handleClick}>
                <i className = {click ? 'fas fa-times': 'fas fa-bars'}></i>
            </div>
            <ul className={click?'nav-menu active':'nav-menu'}>
                <li className ='nav-item'>
                    <Link to = '/home' className='nav-links' onClick = {closeMobileMenu}>Home</Link>
                </li>
                 <li className ='nav-item'>
                    <Link to = '/resume' className='nav-links' onClick = {closeMobileMenu}>Resume</Link>
                </li>
                 <li className ='nav-item'>
                    <Link to = '/projects' className='nav-links' onClick = {closeMobileMenu}>Projects</Link>
                </li>
                 <li className ='nav-item'>
                    <Link to = '/sign-up' className='nav-links-mobile' onClick = {closeMobileMenu}>Sign Up</Link>
                </li>
            </ul>
            {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </nav>
        </div>
    )
}

export default Navbar
