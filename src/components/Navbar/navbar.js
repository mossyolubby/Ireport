import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';




function NavBar(


    ) {
      const [click, setClick] = useState(false);
	
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    return (
        <>
           <nav className="navbar">
               <div className="navbar-container">
               <Link to="/" className="ireport-logo"><img src='images/ireportlogo.png' alt='Ireport logo' width='100px'/>
                  </Link>
                  <div className='menu-icon' onClick={handleClick}>
                      <i className={click ? 'as fa-times': 'fas a-bars'}/>
                  </div>
                  <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                      <li className='nav-item'>
                          <Link to='/' className='nav-Links' onClick={closeMobileMenu}>
                              Home
                          </Link>
                      </li>
                      <li className='nav-item'>
                          <Link to='/politics' className='nav-Links' onClick={closeMobileMenu}>
                              Politics
                          </Link>
                      </li>
                      <li className='nav-item'>
                          <Link to='/business' className='nav-Links' onClick={closeMobileMenu}>
                              Business
                          </Link>
                      </li>
                      <li className='nav-item'>
                          <Link to='/sport' className='nav-Links' onClick={closeMobileMenu}>
                              Sport
                          </Link>
                      </li>
                      <li className='nav-item'>
                          <Link to='/health' className='nav-Links' onClick={closeMobileMenu}>
                              Health
                          </Link>
                      </li>
                      <li className='nav-item'>
                          <Link to='/entertainment' className='nav-Links' onClick={closeMobileMenu}>
                              Entertainment
                          </Link>
                      </li>
                      <li className='nav-item'>
                          <Link to='/food' className='nav-Links' onClick={closeMobileMenu}>
                              Food
                          </Link>
                      </li>
                      <li className='nav-item'>
                          <Link to='/tech' className='nav-Links' onClick={closeMobileMenu}>
                              Tech
                          </Link>
                      </li>
                      <li className='nav-item'>
                          <Link to='/thought-and-opinion' className='nav-Links' onClick={closeMobileMenu}>
                              Thought&Opinion
                          </Link>
                      </li>
                      <li className='nav-item'>
                          <Link to='/post' className='nav-Links-post' onClick={closeMobileMenu}>
                            <button className='btn'>Post</button>
                          </Link>
                      </li>
                      <li className='nav-item'>
                          <Link to='/signin' className='nav-Links-mobile' onClick={closeMobileMenu}>
                              Signin
                          </Link>
                      </li>
                  </ul>

               </div>
            </nav> 
        </>
    );
}

    
    export default NavBar;
    



