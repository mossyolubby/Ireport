import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import CustomButton from '../../custom-button/custom-button';
import './forgot-password.css'
import axios from 'axios';


export default class ForgotPassword extends Component {
    state = {};

    handleSubmit= e => {
        e.preventDefault()

        const data = {
            email:this.email
        };

        axios.post(' https://i-report-project.herokuapp.com/api/all/forgotPassword', data).then(
            res => {
                this.setState({
                    message:res.data.message,
                    cls: 'success'  
                })
            }
        ).catch(
            err => {
                this.setState({
                    message:err.response.data.message,
                    cls: 'danger'  
                })
            }
        )
    };
    render(){
        let message ='';

          if (this.state.message) {
            const cls = 'alert alert' + this.state.cls
            message = (
              <div className={cls} role="alert">
                {this.state.message}
              </div>
            )
          }
    return (
        
            <div className= "auth-wrapper">
              <div className="auth-inner">
              <form onSubmit={this.handleSubmit}>
                  {message}
                  <h3>Forgot Password</h3>
                  <div className="form-group">
                      <label>Email</label>
                      <input type="email" className="from-control" placeholder="email"
                      onChange = {e=> this.email= e.target.value} />
                  </div>

                  <CustomButton>Get Password</CustomButton>

                  </form>
                  </div>
                  </div>
  
    )
}
}

