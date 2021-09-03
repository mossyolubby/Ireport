import React, {Component} from 'react';


export default class Register extends Component{

    render(){
        return(
            <form className=''>
                <h3>Sign Up</h3>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="from-control" placeholder="email"/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="from-control" placeholder="password"/>
                </div>

                <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="password" className="from-control" placeholder="password"/>
                </div>

                <button className="btn btn-primary btn-block">Sign Up</button>

            </form>

        )
    }
}