import React, {Component} from 'react';
import { Link, Redirect } from 'react-router-dom';
import CustomButton from '../custom-button/custom-button';
//import FormInput from '../form-input/form-input';
import 'bootstrap/dist/css/bootstrap.min.css';
//import ForgotPassword from '../Pages/forgot-password/forgot-password';
import './sign-in.css'
import axios from 'axios';
//import {setUserSession} from '../../Utils/common'


export default class SignIn extends Component{
  state = {}

    handleSubmit = e=> {
      e.preventDefault();
  
      const data = {
        email:this.email,
        password: this.password,
        
      }
      axios.post(' https://i-report-project.herokuapp.com/api/all/login',data)
      .then(res => {
          console.log(res)
          localStorage.setItem('token',res.data.token)
          this.setState({
            signIn:true
          });
          this.props.setUser(res.data.user);
        })
        .catch(
        err => {
          this.setState({
            message:err.response.data.message
          })
        }
      )
  
      
    }
  
      render(){
        if(this.state.signIn){
          return <Redirect to ={'/'} />

        }
          let error ='';

          if (this.state.message) {
            error = (
              <div className= "alert alert-danger" role="alert">
                {this.state.message}
              </div>
            )
          }
 
 
 
 
          
          return(
            <div className= "auth-wrapper">
              <div className="auth-inner">
              <form onSubmit={this.handleSubmit}>
                       {error}
                  <h3>Sign In</h3>
                  <div className="form-group">
                      <label>Email</label>
                      <input type="email" className="from-control" placeholder="email"
                      onChange = {e=> this.email= e.target.value} />
                  </div>
  
                  <div className="form-group">
                      <label>Password</label>
                      <input type="password" className="from-control" placeholder="password"
                      onChange = {e=> this.password= e.target.value}/>
                  </div>
  
                  <CustomButton type='submit'>Sign In</CustomButton>

                  <p className='forgotpassword text-right'><Link to = '/forgot-password'>Forgot Password?</Link></p>

                  <div className='signupLink'>Don't have an account? <Link to= '/signup' className='signuplink'>SIGNUP</Link> </div>

  
              </form>
              </div>
              </div>
  
          )
      }
  }