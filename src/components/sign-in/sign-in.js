import React from 'react'
import { Link } from 'react-router-dom';
import CustomButton from '../custom-button/custom-button';
import FormInput from '../form-input/form-input';
import './sign-in.css'

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: '',
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({ email: '', password: ''})
    }

    handleChange = event => {
        const { value, name} = event.target;

        this.setState({[name]: value})
    }

    render() {
        return(
            <div className='container'>
            <div className='signin'> 
            <div className='signlogo'><img src= 'images/ireportlogo.png' alt= '' className='signimage' width='100px'/></div>
                <div className= 'signtitle'>Signin</div>
                <div className='signincontainer'>
                <form onSubmit={this.handleSubmit}>
            
                    <FormInput 
                    name='email' 
                    type='email'
                    placeholder='email'
                    handleChange={this.handleChange} 
                    value={this.state.email}
                    required
                    />

                    
                    <FormInput 
                    name='password' 
                    type='password' 
                    placeholder='password'
                    handleChange={this.handleChange}
                    value={this.state.email} 
                    required/>

                    <CustomButton type='submit'>Signin</CustomButton> 
                    <Link to='/forgot-password' className='forgot-password' >Forgot Password?</Link> 

                    <div className='signupLink'>Don't have an account? <Link to= '/signup' className='signuplink'>SIGNUP</Link> </div>
         
                
                </form>
                </div>

            </div>
            </div>
        )
    }
}

export default SignIn;
