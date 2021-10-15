import React, {Component} from 'react';
import AuthService from '../../services/auth.service';
import {Link} from 'react-router-dom';
import CustomButton from '../custom-button/custom-button';

//const apiUrl = "https://i-report-project.herokuapp.com/api/"
export default class Profile extends Component{
    constructor(props) {
        super(props);

        this.state = {
            currentUser: AuthService.getCurrentUser()
        };

    }

   
    render(){
        const {currentUser} = this.state;
        return(
            <div className="col-md-12">
            <div className="card card-container">
             <Link href='/update-profile'> <img
                src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                alt="profile-img"
                className="profile-img-card"
              /></Link>
                <h3><strong>{currentUser.username}</strong> Profile</h3>
            
            <p>
               <strong>Token:</strong> {''}
               {currentUser.access_token.substring(0, 20)}...{" "}
               {currentUser.access_token.substr(currentUser.access_token.length - 20)}
            </p>
            <p>
               <strong>Email:</strong> {''}
                {currentUser.email}
            </p>
            <p>
               <strong>password:</strong> {''}
               {currentUser.password}
            </p>
            <CustomButton><Link to='/change-password'><strong>change profile</strong></Link></CustomButton>
        </div>
        </div>
        )
    }
}