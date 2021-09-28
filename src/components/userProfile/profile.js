import React, {Component} from 'react';
import AuthService from '../../services/auth.service';

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
              <img
                src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                alt="profile-img"
                className="profile-img-card"
              />
                <h3><strong>currentUser.username</strong> Profile</h3>
            
            {/* <p>
               <strong>Token:</strong> {''}
               {currentUser.accessToken.substring(0, 20)}...{" "}
               {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
            </p> */}
            <p>
               <strong>Email:</strong> {''}
               currentUser.email
            </p>
            <p>
               <strong>password:</strong> {''}
               currentUser.password
            </p>
        </div>
        </div>
        )
    }
}