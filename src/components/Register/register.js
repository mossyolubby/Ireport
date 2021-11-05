import React,{ Component } from 'react';
import { Redirect } from "react-router-dom";
//import {Form, Input, CheckButton} from 'react-form-validation';
//import {Form} from "react-form-validation";
//import CheckButton  from "validator";
import { Link } from 'react-router-dom';
import  { isEmail } from "validator";
import './register.css';
import './successful-register'
import AuthService from "../../services/auth.service";
import CustomButton from '../custom-button/custom-button';



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
export default class Register extends Component {
    constructor(props) {
        super(props);
        this.handleRegister = this.handleRegister.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.state = {
            username: "",
            email: "",
            password: "",
            successful:false,
            message: ""
        };

    }
    
    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    handleRegister(e) {
        e.preventDefault();

        this.setState({
            message: "You have successfully registered. Check your mail to verify ",
            successful: false
        });

        //this.form.validation();
        //if (this.checkBtn.context._errors.length === 0) {
            AuthService.register(
                this.state.username,
                this.state.email,
                this.state.password

            ).then(() => {
                this.props.history.push("/successful-register");
                window.location.reload();
                alert('successfully registered')
              },
                
                // response => {
                //     this.setState({
                //         message:response.data.message,
                //         successful:true,
                        //redirect: "/successful-register"
                        
                    // });
                    // this.props.history.push("/login");
                    // window.location.reload();
                // },
                error => {
                    const resMessage = 
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                        error.message ||
                        error.toString();

                        this.setState({
                            successful:false,
                            message:resMessage
                        });
                }
         
                )
            // }
            
    }

    render() {
        // if(this.state.register){
        //     return<Redirect to={'/successful-register'}/>
        // }


        return(
            <div className="col-md-12">
                <div className="card card-container">
                    <img
                    src= "//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                    alt="profile-img"
                    className="profile-img-card"
                    />

                    <form
                    onSubmit={this.handleRegister}
                    ref={c => {
                        this.form =c;
                    }}
                    >
                        {!this.state.successful && (
                            <div>
                                <div className="form-group">
                                    <label htmlFor= "username">Username</label>
                                    <input
                                    type="text"
                                    className="form-control"
                                    name="username"
                                    value={this.state.username}
                                    onChange={this.onChangeUsername}
                                    validations={[required, vusername]} 
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor= "email">Email</label>
                                    <input
                                    type="text"
                                    className="form-control"
                                    name="email"
                                    value={this.state.email}
                                    onChange={this.onChangeEmail}
                                    validations={[required, email]} 
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor= "password">Password</label>
                                    <input
                                    type="password"
                                    className="form-control"
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.onChangePassword}
                                    validations={[required, vpassword]} 
                                    />
                                </div>
                                <div className='form-group'>
                            
                <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
                
                />
                 <label className="form-check-label">
                 "By signup you already agreed to the terms and condition of our service."
               </label>


                <h6>Already have an account? <Link to ='/login'>Signin</Link></h6>
                                </div>

                                <div className="form-group">
                                    <CustomButton >Sign Up</CustomButton>
                                </div>
                            </div>
                        )}

                        {this.state.message && (
                            <div className="form-group">
                                <div
                                className={
                                    this.state.successful
                                    ? "alert alert-success"
                                    : "alert alert-danger"
                                }
                                role="alert"
                                >
                                    {this.state.message}
                                </div>
                            </div>
                        )}
                        <CustomButton
                        style={{ display: "none" }} 
                        ref={c => {
                            this.checkBtn = c;
                        }} 
                        />

                    </form>
                </div>
            </div>
        );
    }

}
