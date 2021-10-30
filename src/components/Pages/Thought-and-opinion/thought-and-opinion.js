import axios from 'axios';
import React, {Component} from 'react';
import CustomButton from '../../custom-button/custom-button'
import { Link, Redirect} from 'react-router-dom';
import authHeader from '../../../services/auth-header'



const apiUrl = "https://i-report-project.herokuapp.com/api/"




  class ThoughtAndOpinion extends Component{
    constructor(props){
      super(props);
    
      this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this)
      
      
  
       this.state ={
         description:'',
         
       };
    
    }

        handleSubmit(event) { 
          console.log("description", this.state.description)
          
          const formData = new FormData();
          formData.append("description", this.state.description);
          // const description = this.state.description
          //debugger;
          const header = authHeader();
          console.log(header);
      axios.post(apiUrl + 'user/thoughts/create' , 
      // null, {
      //   params:{
      //     description:'i have good news'
      //   }
      // }, 
        formData,
          {headers:header},
        
         )
      .then(function(response){
        console.log('response from add post is ', response)
        alert('Added successfully')
         History.push('/')
        this.props.history.push("/");
            window.location.reload();
      })
      .catch(function(error){
        console.log(error);
      })
        event.preventDefault();
      }
    
    handleDescriptionChange(e){
      this.setState({description:e.target.value})
    }
    

    
    
    
    
      render(){
        return(
          <div className='col-md-12'>
           <div className='card card-container'>
           <img
            src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
             alt="profile-img"
            className="profile-img-card"
           /> 
            <br styles= "clear:both" />
              <form onSubmit={this.handleSubmit}>

                <div className="form-group">
                  <label>Your Thought:
                <textarea className="form-control" 
                onChange={this.handleDescriptionChange} 
                type="textarea" 
                id="subject" 
                placeholder="Subject"
                maxLength="140"
                 rows="7">
                </textarea>
                </label>
                </div>

  
                <div className="form-group">
                <CustomButton >Post Thought</CustomButton>
                </div>
    
                <button type="button" id="submit" name="submit" 
                className="btn"><Link href='/'>Cancel</Link></button>
    
              </form>
          </div>
          </div>
        )
      }
    }
  
    export default ThoughtAndOpinion;