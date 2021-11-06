import React from 'react';
import {FaThumbsDown} from 'react-icons/fa';
import axios from 'axios';
import authHeader from '../../../services/auth-header'




const apiUrl = "https://i-report-project.herokuapp.com/api/"

class UnLikeThought extends React.Component{
    constructor(props) {
        super(props);
        
        this.addUnLikeThought = this.addUnLikeThought.bind(this)
        


        this.state = {
        thoughtId: this.props.thoughtId
        };
      }
    
    addUnLikeThought = (e) => {
      const thoughtId = this.props.thoughtId;
      const header = authHeader();
      axios.post(apiUrl + `user/thought/${thoughtId}/dislike`, null,
      {headers:header}).then(res=> console.log(res));
    
      e.preventDefault();
  }
    render(){
        return (
            <div>
           
             <button style={{margin:'0', fontSize:'14px',border:'none', BackgroundColor:'white',}}
             onClick={this.addUnLikeThought}>Unlike</button>
           
            </div>
        )

    }
}


export default UnLikeThought