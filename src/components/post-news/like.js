import React from 'react';
import {FaThumbsDown, FaThumbsUp} from 'react-icons/fa';
import axios from 'axios';
import authHeader from '../../services/auth-header'




const apiUrl = "https://i-report-project.herokuapp.com/api/"

class Likes extends React.Component{
    constructor(props) {
        super(props);
        
        this.addlike = this.addlike.bind(this)
        


        this.state = {
        postId: this.props.postId
        };
      }
    
    addlike = (e) => {
      const postId = this.props.postId;
      const header = authHeader();
      axios.post(apiUrl + `user/post/${postId}/like`, null,
      {headers:header}).then(res=> console.log(res));
    
      e.preventDefault();
  }
    render(){
        return (
            <div>
           
             <FaThumbsUp
             onClick={this.addlike}
             onMouseOver="this.style.backgroundColor='#F8F8F8'" 
             onMouseOut="this.style.backgroundColor='#FFFFFF'"/>
           
            </div>
        )

    }
}


export default Likes;