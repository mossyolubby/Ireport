import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';


function Header () {
    return (
        <div className= 'header'>
            <div className='header-text'>
            Something on your mind <Link to='/thought-and-opinion' className='click'>click</Link> to share
            </div>
            
            <div className='header-image'>
            <Link to='/thought-and-opinion' className='thought-image'>
            <img src = 'images/Your thought2.jpg' alt= 'click to share opinion' className='header-image'/>
            </Link>
            
            </div>
        </div>  
            

    )
}

export default Header;