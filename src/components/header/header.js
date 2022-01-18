import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import AuthService from '../../services/auth.service';
import Carousel from 'react-bootstrap/Carousel'
import './header.css';


class Header extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            currentUser: AuthService.getCurrentUser()
        };

    }

    render(){
        return(
            <div className='header-carousel'>
            <Carousel>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src="images/ireportbanner.png"
      alt="Ireport"
      height="200px"
    />
    <Carousel.Caption>
      {/* <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src="images/newbanner.png"
      alt="Bringing news to your door step"
      height="200px"
    />
    <Carousel.Caption>
      {/* <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="images/banner2.png"
      alt="Be the first to know"
      height="200px"
      
    />
    <Carousel.Caption>
      {/* <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
        )
    }


//     render(){
//         const {currentUser} = this.state;
//     return (
// <div>
// <div className="jumbotron">
// <div className='header-text'>Something on your mind
// {currentUser?(<Link to='/thought-and-opinion' className='click'> click </Link>):(
//     <Link to='/login' className='nclick'> click </Link>
// )}
//   to share
// </div>  
// <div className='header-image'><Link to='/thought-and-opinion' className='thought-image'>
//               <img src = 'images/Your thought2.jpg' width='150'alt= 'click to share opinion' className='header-image'/>
//               </Link></div>    

// </div>
      

// </div>
            

//     )
//     }
 }

export default Header;