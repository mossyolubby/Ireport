import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import AuthService from '../../services/auth.service';

import './header.css';


class Header extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            currentUser: AuthService.getCurrentUser()
        };

    }
    render(){
        const {currentUser} = this.state;
    return (
<div>
<div className="jumbotron">
<div className='header-text'>Something on your mind 
{currentUser?(<Link to='/thought-and-opinion' className='click'> click</Link>):(
    <Link to='/login' className=''> click</Link>
)}
  to share
</div>  
<div className='header-image'><Link to='/thought-and-opinion' className='thought-image'>
              <img src = 'images/Your thought2.jpg' width='150'alt= 'click to share opinion' className='header-image'/>
              </Link></div>    

</div>
      

</div>
            

    )
    }
}

export default Header;