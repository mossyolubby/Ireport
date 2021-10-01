import React from 'react';
import axios from 'axios';


export default class ChangePassword extends Component {
    state = {};

    handleSubmit= e => {
        
        e.preventDefault()

        const data = {
            password:this.password,
            newPassword:this.newPassword
        };
        const header = authHeader();
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
                  <h3>Forgot Password</h3>
                  <div className="form-group">
                      <label>Password</label>
                      <input type="email" className="from-control" placeholder="email"
                      onChange = {e=> this.password= e.target.value} />
                  </div>
                  <h3>New Password</h3>
                  <div className="form-group">
                      <label>Email</label>
                      <input type="email" className="from-control" placeholder="email"
                      onChange = {e=> this.newPassword= e.target.value} />
                  </div>
                  

                  <CustomButton>Change Password</CustomButton>

                  </form>
                  </div>
                  </div>
  
    )
}
}