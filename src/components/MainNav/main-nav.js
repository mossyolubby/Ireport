import React from 'react'
import { Link } from 'react-router-dom';


  import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'
  import './main-nav.css'
  

class BootstrapNavbar extends React.Component{
    handleLogout = () => {
       localStorage.clear();
       this.props.setUser(null);
    };
    render(){
        let buttons;

        if (this .props.user){
            buttons = ( <Nav.Link href="/" onClick={this.handleLogout}>SignOut</Nav.Link>
          )

        }else{
          buttons = ( <Nav.Link href="/signin">SignIn</Nav.Link>
          )
        }


        return(
            <div className='main'>
                <div className="row">
                    <div className="col-md-12">
                        
                            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                                <Navbar.Brand href="#home"><img src='images/ireportlogo.png' alt='Ireport logo' width='100px'/></Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto">
                                    <Nav.Link href="/">Home</Nav.Link>
                                    <Nav.Link href="/politics">Politics</Nav.Link>
                                    <Nav.Link href="/business">Business</Nav.Link>
                                    <Nav.Link href="/sport">Sport</Nav.Link>
                                    <Nav.Link href="/health">Health</Nav.Link>
                                    <Nav.Link href="/entertainment">Entertainment</Nav.Link>
                                    <Nav.Link href="/food">Food</Nav.Link>
                                    <Nav.Link href="/tech">Tech</Nav.Link>
                                    <Nav.Link href="/thought-and-opinion">Thought&Opinion</Nav.Link>
                                    <Nav.Link href="/post" className='post'><Button className='btn'>Post</Button></Nav.Link>                
                                     
                                    </Nav>
                                    </Navbar.Collapse>
                            </Navbar>
                            {buttons}
                            
                    </div>
                </div>
            </div>
        )  
    }
}

export default BootstrapNavbar;

