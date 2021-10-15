import React from 'react';
import axios from 'axios';
import authHeader from '../../services/auth-header';



const apiUrl = "https://i-report-project.herokuapp.com/api/"
let commentCounter = 1;

class CommentPost extends React.Component {
    constructor() {
    super();
    
    //console.log("PROPS ", this.props);
    this.state = {
    review: " ",
    //postId: this.props.postId,
    commentLine: [{ commentId:"", text: "",}],
      };
    }
 handleCommentValue = (e) =>{
     this.setState({
         review:e.target.value,
     })
    };

     setCommentLine = () => {
         this.setState({
             commentLine: [
                 ...this.state.commentLine,
                 { commentId: commentCounter++, text: this.state.review}
             ],

             review: "",
         });
     }
        
     submitCommentLine = (e) => {
         const header = authHeader();
         const postId = this.props.postId;
         console.log(this.state.review,postId,  "REVIEW")
         axios.post(apiUrl + `user/comment/add/${postId}/?review=` + this.state.review, {
            //  params:{
            //      postId:Id
            //  }
         },{headers:header})
         e.preventDefault();
         this.setCommentLine();
     };

     enterCommentLine = (e) => {
         if (e.charCode === 13) {
             this.setCommentLine();
         }
     };
 


 render(){
     return(
         <div>
             <CommentBox
             review ={this.state.review}
             handleCommentValue={this.handleCommentValue}
             enterCommentLine = {this.enterCommentLine}
             submitCommentLine= {this.submitCommentLine} 
            />

         </div>
     )
 }
} 

class CommentBox extends React.Component{
      render(){
          const {review,handleCommentValue,
          enterCommentLine, submitCommentLine}= this.props;

          const enableCommentButton = () => {
              return (review ? false : true);
          }

          const changeCommentButtonStyle = () => {
              return(review ? "comments-button-enabled" : 
              "comments-button-disabled");
          }

          return(
              <div className= "comments-box">
                  <input onKeyPress = {enterCommentLine}
                  value= {review}
                  id ="comments-input" 
                  onChange = {handleCommentValue}
                  type= "text"
                  placeholder="Add a comment" />

                  <button onClick={submitCommentLine}
                  type="submit"
                  className="comments-button"
                  id={changeCommentButtonStyle()}
                  disabled= {enableCommentButton()}>Post</button>
              </div>
          )


      }

      
      }

//       class Comment extends React.Component {
//         render(){
//             const { commentLine } = this.props;

//             return(
                  
//                 <ul className="comments-list">
//                     {commentLine.map(function(val){
//                         return
//                     <li className="each-comment"
//                         key={val.commentId}>{val.text}
//                     </li>
//                 })}
//                 </ul>
//             )
//         }
      

      
//  }

export default CommentPost;
