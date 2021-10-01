import React from 'react';
import axios from 'axios'



const apiUrl = "https://i-report-project.herokuapp.com/api/"
let commentCounter = 1;

class CommentPost extends React.Component {
    constructor() {
    super();
    this.state = {
    review: " ",
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
                 { commentId: commentCounter++, text: this.state.commentValue}
             ],

             review: "",
         });
     }

     submitCommentLine = (e) => {
         axios.get(apiUrl + 'user/comment/add')
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
          const {commentValue,handleCommentValue,
          enterCommentLine, submitCommentLine}= this.props;

          const enableCommentButton = () => {
              return (commentValue ? false : true);
          }

          const changeCommentButtonStyle = () => {
              return(commentValue ? "comments-button-enabled" : 
              "comments-button-disabled");
          }

          return(
              <div className= "comments-box">
                  <input onKeyPress = {enterCommentLine}
                  value= {commentValue}
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
//                     {commentLine.map((val) => {return
//                     <li className="each-comment"
//                         key={val.commentId}>{val.text}
//                     </li>})}
//                 </ul>
//             )
//         }
      

      
// }

export default CommentPost;
