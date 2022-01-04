import React from 'react';
import {FaThumbsDown} from 'react-icons/fa';
import {AiOutlineHeart} from 'react-icons/ai'
import axios from 'axios';
import authHeader from '../../../services/auth-header'




const apiUrl = "https://i-report-project.herokuapp.com/api/"

class LikeThought extends React.Component{
    constructor(props) {
        super(props);
        
        this.addLikeThought = this.addLikeThought.bind(this)
        


        this.state = {
        thoughtId: this.props.thoughtId
        };
      }
    
    addLikeThought = (e) => {
      const thoughtId = this.props.thoughtId;
      const header = authHeader();
      axios.post(apiUrl + `user/thought/${thoughtId}/like`, null,
      {headers:header}).then(res=> console.log(res));
    
      e.preventDefault();
  }
    render(){
        return (
            <div>
           
             <button
             style={{margin:'0', fontSize:'12px',border:'none', BackgroundColor:'white',}}
             onClick={this.addLikeThought}>
               <AiOutlineHeart/>
               Like</button>
           
            </div>
        )

    }
}


export default LikeThought;