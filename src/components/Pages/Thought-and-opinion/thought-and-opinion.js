import axios from 'axios';
import React, {Component} from 'react';
import CustomButton from '../../custom-button/custom-button'
import { Link, Redirect} from 'react-router-dom';


const apiUrl = "https://i-report-project.herokuapp.com/api/"




class PostThought extends Component{
  constructor(props){
    super(props);
  
    
    this.handleSubjectChange= this.handleSubjectChange.bind(this)
     this.state ={
       subject:''
     };
  
  }
  
  
  handleSubjectChange(e){
    this.setState({title:e.target.value})
  }
  
  postNews(){
    axios.post(apiUrl + '/user/post/create', {
      
      subject:this.state.subject
    })
    .then(function(response){
      console.log('response from add post is ', response)
      History.push('/')
    })
    .catch(function(error){
      console.log(error);
    })
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
    
        
            {/* <form role='form'> */}
              
              <div className="form-group">
                <label> Your Thought:
              <textarea className="form-control" onChange={this.handleSubjectChange} type="textarea" id="subject" placeholder="Subject" maxlength="140" rows="7"></textarea>
              </label>
              </div>

              <div className="form-group">
                                    <CustomButton >Post</CustomButton>
                                </div>
            <Link href="/">Cancel</Link>
  
              {/* <button type="button" id="submit" name="submit" className="btn"><Link href='/'>Cancel</Link></button> */}
  
            {/* </form> */}
        </div>
        </div>
      )
    }
  }

  export default PostThought;