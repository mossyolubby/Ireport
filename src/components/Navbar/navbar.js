import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';  
import "bootstrap/dist/css/bootstrap.css";
import { Navbar,Nav,Button } from 'react-bootstrap'
import AuthService from '../../services/auth.service';


export default class NavBar extends Component{
  constructor(props){
    super(props);

    this.logOut = this.logOut.bind(this);

    this.state = {
      currentUser:undefined
    }  
    
    
  }

   componentDidMount(){
     const user = AuthService.getCurrentUser();

     //console.log('getCurrentUser', user)

    if(user){
      
       this.setState({
        currentUser:user,
        

      })
     }
   }

  logOut(){
    this.setState({
      currentUser:null,
    })
    AuthService.logout(
      //  this.props.history.push("/"),
      //   window.location.reload()
    )
  }
 
 render(){
     const{ currentUser} = this.state;

     return(
         <div className='main'>
             <div className="row">
                 <div className="col-md-12">
                     
                         <Navbar bg="dark" variant="dark" expand="lg" sticky="top" >
                             <Navbar.Brand href="/" id="logo"><img src='images/ireportlogo.png' alt='Ireport logo' width='100px'/></Navbar.Brand>
                             <Navbar.Toggle aria-controls="basic-navbar-nav" />
                             <Navbar.Collapse id="basic-navbar-nav">
                                 <Nav className="mr-auto">
                                 <Nav.Link href="/" id="nblink">Home</Nav.Link>
                                 <Nav.Link href="/politics" id="nblink">Politics</Nav.Link>
                                 <Nav.Link href="/business" id="nblink">Business</Nav.Link>
                                 <Nav.Link href="/sport" id="nblink">Sport</Nav.Link>
                                 <Nav.Link href="/health" id="nblink">Health</Nav.Link>
                                 <Nav.Link href="/entertainment" id="nblink">Entertainment</Nav.Link>
                                 <Nav.Link href="/food" id="nblink">Food</Nav.Link>
                                 <Nav.Link href="/tech" id="nblink">Tech</Nav.Link>
                                 {/* {console.log(currentUser)} */}
                                 {currentUser &&<Nav.Link href="/thought-and-opinion" id="nblink">Thought&Opinion</Nav.Link>}
                                 
                                  {currentUser &&<Nav.Link href="/post" className='post'><Button className='btn'>Post</Button></Nav.Link>}                
                                  
                                  {currentUser ? (
                                  <div className="navbar-nav ml-auto">
          
                                  <Nav.Link href="/profile" id="nblink">{currentUser.username}</Nav.Link>
                                 <Nav.Link href="/login" id= "nblink" onClick={this.logOut}>SignOut</Nav.Link>
              
                                  </div>
                                    ) : (
                                  <div className="navbar-nav ml-auto">
              
                                 <Nav.Link href="/login" id="nblink" >SignIn</Nav.Link>
                                 
                                 <Nav.Link href="/register" id="nblink">SignUp</Nav.Link>
                                    </div>
                                  )}
                                  
                                            
                                   </Nav>
                                 </Navbar.Collapse>
                         </Navbar>
                     {/* {buttons} */}
                         
                 </div>
             </div>
         </div>
     )  
 }


}
