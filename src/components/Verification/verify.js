import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


export default class Verify extends React.Component{


  state ={
    verify:true
  };


  componentDidMount = () => {

      // const data = {
      //     code: this.props.match.params.id,
          

      
      // }
      //const header = authHeader();
      console.log(this.props.location.pathname.split("/")[2], this.props.match.params, 'this is a prop')
      axios.get('https://i-report-project.herokuapp.com/api/all/verify', {
          params:  {
              code: this.props.location.pathname.split("/")[2]
             
  
          }
      }
      
      )
      .then(
          res =>{
              console.log(res);
              this.setState({
                  verify:true
              })
          }
      ).catch(
          err =>{
              this.setState({
                  message:err.response.data.message
                })
          }
      )
  };
  render(){
      
      return(
        <div className= 'card mt-4 mb-3'>

               {this.state.verify && <h4>You have successfully verified your email. 
                 <Link to="/login">Login</Link> to continue</h4>
               }
          
         </div>
      )
  }
}

 
  
  