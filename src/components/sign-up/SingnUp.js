import React, {Component} from 'react';
import './sign-up.css';
import CustomButton from '../custom-button/custom-button'
import { Link } from 'react-router-dom';
import  { isEmail } from "validator"
import axios from 'axios'



const required  = value =>{
  if (!value) {
      return(
          <div className="alert alert-danger" role="alert">
              This field is required!
          </div>
      );
  }
};

const email=value =>{
  if (!isEmail(value)){
     return(
         <div className="alert alert-danger" role="alert">
             This is not a valid email
         </div>
     );
  }
};

const vusername = value => {
 if (value.length < 3 || value.length > 20){
     return(
         <div className="alert alert-danger" role="alert">
             The username must be between 3 and 20 characters
         </div>
     );
 }
};

const vpassword = value => {
  if (value.length < 6 || value.length > 40 ) {
      return (
          <div className="alert alert-danger" role="alert">
              The password must be betwen 6 and 40 characters.
          </div>
      )
  }
}

class SignUp extends Component{
    
  state={}

  
  
  handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      username:this.username,
      email:this.email,
      password: this.password
      
    }
    axios.post('all/signup',data).then(
      res => {
       console.log(res)
        this.props.history.push('/area-of-interest')
      }
    ).catch(
      err => {
        this.setState({
          message:err.response.data.message
        })
      }
    )

    
  }

    render(){
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
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>Username</label>
                    <input type="username" className="from-control" placeholder="username"
                    onChange = {e=> this.username= e.target.value} 
                    validations={[required, vusername]}
                     />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="from-control" placeholder="email"
                    onChange = {e=> this.email= e.target.value}
                    validations={[required, email]}  />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="from-control" placeholder="password"
                    onChange = {e=> this.password= e.target.value}
                    validations={[required, vpassword]} />
                </div>

                

                <div className="form-check">
                <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
                
                />
                 <label className="form-check-label">
                 "By signup you already agreed to the terms and condition of our service."
               </label>
               </div>
               


                <CustomButton>Sign Up</CustomButton>

                <h6>Already have an account? <Link to ='/signin'>Signin</Link></h6>

                

            </form>
            </div>
            </div>

        )
    }
}

export default SignUp;
