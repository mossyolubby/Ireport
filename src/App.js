import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/header/header";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/Pages/Homepage/home';
import Politics from "./components/Pages/politics";
import Business from "./components/Pages/business";
import Sport from "./components/Pages/sport";
import Health from "./components/Pages/health";
import Entertainment from "./components/Pages/entertainment";
import Food from "./components/Pages/food";
import Tech from "./components/Pages/tech";
import ThoughtAndOpinion from "./components/Pages/Thought-and-opinion/thought-and-opinion";
import PostNews from "./components/post-news/post-news";
import SignUp from "./components/sign-up/SingnUp";
import AreaOfInterest from "./components/Pages/area-of-interest/area-of-interest";
//import NavBar from './components/Navbar/navbar'
import ForgotPassword from "./components/Pages/forgot-password/forgot-password";
//import BootstrapNavbar from './components/MainNav/main-nav';
import NavBar  from "./components/Navbar/navbar";
//import axios from 'axios';
import Reset from "./components/Pages/Reset/reset";
import Register from "./components/Register/register";
//import PostForm from "./components/post-news/post-form";
import Login from "./components/login/login";
import AuthService from "./services/auth.service";
import Profile from "./components/userProfile/profile";
import ChangePassword from "./components/userProfile/changePassword";
import CommentPost from "./components/post-news/comment";
import Verify from "./components/Verification/verify";
//import AuthService from "./services/auth.service";



class App extends React.Component{
  constructor(props){
    super(props) 

      this.state = {
        currentUser:undefined
      }
    }

    componentDidMount(){
      const user = AuthService.getCurrentUser();

      if (user) {
          this.setState({
          currentUser:user
          })
      }
    
  }

  
  
  render (){
  return (

    <Router>
  
     <Header />
     <NavBar currentUser={this.state.currentUser} />
     
      <Switch>
        <Route path='/' exact component={() => <Home user={this.state.user}/>} />
        <Route path='/politics'  component={Politics} />
        <Route path='/business'  component={Business} />
        <Route path='/sport'  component={Sport} />
        <Route path='/health' component={Health} />
        <Route path='/entertainment' component={Entertainment} />
        <Route path='/food'  component={Food} />
        <Route path='/tech'  component={Tech} />
        <Route path='/thought-and-opinion'  component={ThoughtAndOpinion} />
        <Route path='/post'  component={PostNews} />
      
        <Route path= '/signup' component={SignUp} />
        <Route path= '/area-of-interest' component={AreaOfInterest} />
        <Route path= '/forgot-password' component={ForgotPassword} />
        <Route path= '/reset-password/:id' component={Reset} />
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
        <Route path='/profile' component={Profile} />
        <Route path='/change-password' component={ChangePassword} />
        <Route path='/comment' component={CommentPost} />
        <Route path= '/verify' component ={Verify} />
      
        
        
      </Switch>
      {/* <Feed /> */}
    </Router>
  
  );
  }
}

export default App;
