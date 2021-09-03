import React, {Component} from 'react';
import './sign-up.css';
import CustomButton from '../custom-button/custom-button'
import { Link } from 'react-router-dom';
import axios from 'axios'

export default class SignUp extends Component{

  state = {};
  handleSubmit = e=> {
    e.preventDefault();

    const data = {
      username:this.username,
      email:this.email,
      password: this.password
      
    }
    axios.post(' https://i-report-project.herokuapp.com/api/all/signup',data).then(
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
                    onChange = {e => this.username= e.target.value}/>
                </div>
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
               


                <CustomButton><Link to='/area-of-interest'>Sign Up</Link></CustomButton>

                <h6>Already have an account? <Link to ='/signin'>Signin</Link></h6>

                

            </form>
            </div>
            </div>

        )
    }
}