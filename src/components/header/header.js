import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';

import './header.css';


function Header () {
    return (
        // <nav class="navbar navbar-light bg-light">
        //  <div class="header">
        //  {/* <div className= 'bg-light p-8 rounded-lg m-12 header'> */}
        //     <div className='header-text'>
        //     Something on your mind <Link to='/thought-and-opinion' className='click'>click</Link> to share
        //     </div>
            
        //  <div className='header-image'>
        //  <Link to='/thought-and-opinion' className='thought-image'>
        //      <img src = 'images/Your thought2.jpg' alt= 'click to share opinion' className='header-image'/>
        //      </Link>
            
        //      </div>
        //  {/* </div>  */}
        //  </div> 
        // </nav>

//         <nav class="navbar navbar-light bg-light">
//   <div class="navbar-brand" href="#">
//   Something on your mind <Link to='/thought-and-opinion' className='click'>click</Link> to share
//     <img src='images/Your thought2.jpg' width="30" height="30" class="d-inline-block align-top" alt="'click to share opinion'"/>
    
//   </div>
// </nav>
        
     <div>
<div className="jumbotron">
<div className='header-text'>Something on your mind <Link to='/thought-and-opinion' className='click'> click</Link>  to share
</div>  
<div className='header-image'><Link to='/thought-and-opinion' className='thought-image'>
              <img src = 'images/Your thought2.jpg' width='150'alt= 'click to share opinion' className='header-image'/>
              </Link></div>    

</div>
      

</div>
            

    )
}

export default Header;