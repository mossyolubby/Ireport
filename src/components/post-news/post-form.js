// import React, {Component} from 'react';

// //import CustomButton from '../custom-button/custom-button'
// //import { Link } from 'react-router-dom';

// //import axios from 'axios';



// const categories= ['politics', 'business', 'sport','entainment','health','food', 'tech', 'thoughtandopinion'];
// const apiUrl = "https://i-report-project.herokuapp.com/api/"




// class PostNews extends Component{
//   constructor(props){
//     super(props);
  
//     this.handleTitleChange= this.handleTitleChange.bind(this)
//     this.handleSubjectChange= this.handleSubjectChange.bind(this)
//      this.state ={
//        title:'',
//        subject:'',
//      };
  
//   }
  
//   handleTitleChange(e){
//     this.setState({title:e.target.value})
//   }
  
//   handleSubjectChange(e){
//     this.setState({title:e.target.value})
//   }
  
//   postNews(){
//     axios.post(apiUrl + '/user/post/create', {
//       title:this.state.title,
//       subject:this.state.subject
//     })
//     .then(function(response){
//       console.log('response from add post is ', response)
//       hashHistory.push('/')
//     })
//     .catch(function(error){
//       console.log(error);
//     })
//   }
  
  
  
//     render(){
//       return(
//         <div className='col-md-5'>
//           <div className='form-area'>
//             <form role='form'>
//               <br styles= "clear:both" />
//               <div className='form-group'>
//               <label>Category:
//                 <select ref={(input) => this.category = input} >
//                  {categories.map((category,index) =>
                 
//                  <option key={index} value={category}>{category}</option>
//                  )}
//                 </select>
//                 </label>
//               </div>
//               <div className="form-group">
//                 <label> News Description:
//               <textarea className="form-control" onChange={this.handleSubjectChange} type="textarea" id="subject" placeholder="Subject" maxlength="140" rows="7"></textarea>
//               </label>
//               </div>
  
//               <button type="button" id="submit" name="submit" className="btn" />
  
//             </form>
//         </div>
//         </div>
//       )
//     }
//   }

//   export default PostNews;