import React from 'react';
import {FaThumbsDown} from 'react-icons/fa';
import axios from 'axios';
import authHeader from '../../services/auth-header'




const apiUrl = "https://i-report-project.herokuapp.com/api/"

class UnLike extends React.Component{
    constructor(props) {
        super(props);
        
        this.addUnlike = this.addUnlike.bind(this)
        


        this.state = {
        postId: this.props.postId
        };
      }
    
    addUnlike = (e) => {
      const postId = this.props.postId;
      const header = authHeader();
      axios.post(apiUrl + `user/post/${postId}/dislike`, null,
      {headers:header}).then(res=> console.log(res));
    
      e.preventDefault();
  }
    render(){
        return (
            <div>
           
             <FaThumbsDown
             onClick={this.addUnlike}/>
           
            </div>
        )

    }
}


export default UnLike