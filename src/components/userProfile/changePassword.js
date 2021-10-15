import React from 'react';
import axios from 'axios';
import AuthHeader from '../../services/auth-header';
import CustomButton from '../custom-button/custom-button';


export default class ChangePassword extends React.Component {
    state = {};

    handleSubmit= e => {
        
        e.preventDefault()

        const data = {
            password:this.password,
            newPassword:this.newPassword
        };
        const header = AuthHeader();
        axios.post(' https://i-report-project.herokuapp.com/api/all/user/changePassword', data,
        {headers:header}).then(
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

          if (this.message) {
            const cls = 'alert alert' + this.cls
            message = (
              <div className={cls} role="alert">
                {this.message}
              </div>
            )
          }
    return (
        
            <div className= "auth-wrapper">
              <div className="auth-inner">
              <form onSubmit={this.handleSubmit}>
                  {message}
                  <h3>Change your Password</h3>
                  <div className="form-group">
                      <label>Password</label>
                      <input type="email" className="from-control" placeholder="password"
                      onChange = {e=> this.password= e.target.value} />
                  </div>
                  <div className="form-group">
                      <label>New Password</label>
                      <input type="email" className="from-control" placeholder="new password"
                      onChange = {e=> this.newPassword= e.target.value} />
                  </div>
                  

                  <CustomButton>Change Password</CustomButton>

                  </form>
                  </div>
                  </div>
  
    )
}
}