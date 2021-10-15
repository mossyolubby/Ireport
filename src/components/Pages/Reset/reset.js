import React, {Component} from'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import CustomButton from '../../custom-button/custom-button';
//import authHeader from '../../../services/auth-header';



export default class Reset extends Component{


    state ={};
    handleSubmit = e => {
        e.preventDefault()

        const data = {
            token: this.props.match.params.id,
            password:this.password

        }
        //const header = authHeader();
        console.log(this.props, this.props.match.params.id, 'this is a prop')
        axios.put(' https://i-report-project.herokuapp.com/api/all/resetPassword', null, {
            params:  {
                token: this.props.match.params.id,
                password:this.password
    
            }
        }
        //{headers:header}
        )
        .then(
            res =>{
                console.log(res);
                this.setState({
                    reset:true
                })
            }
        ).catch(
            err =>{
                this.setState({
                    message:err.response.data.message
                  })
            }
        )
    };
    render(){
        if(this.state.reset){
            return<Redirect to={'/login'}/>
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
                  
                  <h3>Reset Password</h3>
            
                  <div className="form-group">
                      <label>Password</label>
                      <input type="password" className="from-control" placeholder="password"
                      onChange = {e=> this.password= e.target.value}/>
                  </div>
  
                  <CustomButton type='submit'>Reset Password</CustomButton>
  
              </form>
              </div>
              </div>
        )
    }
}