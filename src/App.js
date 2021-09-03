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
import SignInAndSignUpPage from "./components/Pages/sign-in-and-sign-up-page/sign-in-and-sign-up";
import PostNews from "./components/post-news/post-news";
import SignUp from "./components/sign-up/sign-up";
import AreaOfInterest from "./components/Pages/area-of-interest/area-of-interest";
//import NavBar from './components/Navbar/navbar'
import ForgotPassword from "./components/Pages/forgot-password/forgot-password";
import BootstrapNavbar from './components/MainNav/main-nav'
import axios from 'axios';
import SignIn from "./components/sign-in/sign-in";
import Reset from "./components/Pages/Reset/reset";


class App extends React.Component{
  state ={};

  componentDidMount =() => {
       
    axios.get('user').then(
        res => {
            this.setState(res.data);
        },
        err => {
            console.log(err)
        }
    )

    
};

setUser = user => {
  this.setState ({
    user: user
  })
}

  
  render (){
  return (

    <Router>
     <Header />
     <BootstrapNavbar user={this.state.user} setUser={this.setUser}/>
     
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
        <Route path='/signin'  component={() => <SignIn setUser={this.setUser}/>} />
        <Route path= '/signup' component={SignUp} />
        <Route path= '/area-of-interest' component={AreaOfInterest} />
        <Route path= '/reset:id' component={Reset} />
      
        
        
      </Switch>
    </Router>
  
  );
  }
}

export default App;
