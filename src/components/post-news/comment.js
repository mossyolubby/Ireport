import React from 'react';
import axios from 'axios';
import authHeader from '../../services/auth-header';
import AuthService from '../../services/auth.service';



const apiUrl = "https://i-report-project.herokuapp.com/api/"
let commentCounter = 1;

class CommentPost extends React.Component {
    constructor() {
    super();
    
    this.state = {
    review: " ",
     postId: null,
     posts: [],
     comments: [],
    commentLine: [{ commentId:"", text: "",}],
   
      };
    }
    componentDidMount(){
        console.log("PROPS ", this.props.match.params.postId);

        const postId = this.props.match.params.postId;
        this.setState({
            postId: postId
        });

        const self= this;

        axios.get(apiUrl + "all/comments/" + postId, {
         
        })
        .then(function(response){

        const savedComments = response.data.map(res=>{
            return res.comment;
        })
        self.setState({
            posts:response.data,
            comments: savedComments
        })


        console.log(savedComments, "savedcomments")
        console.log(response, "RETRIEVED COMMENTS")
            
        }).catch(function(error){
            console.log('error is', error);
        })
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
         const postId = this.state.postId;
         console.log(this.state.review,postId,  "REVIEW")
         axios.post(apiUrl + `user/comment/add/${postId}/?review=` + this.state.review, {
            //  params:{
            //      postId:Id
            //  }
         },{headers:header})
         e.preventDefault();
         const updatedComment = [...this.state.comments];
         updatedComment.push(this.state.review);

         this.setState({
             comments: updatedComment,
             review: ""
         })

     };

     enterCommentLine = (e) => {
         if (e.charCode === 13) {
             this.setCommentLine();
         }
     };
 


 render(){
     return(
         <div>
             {this.state.comments && this.state.comments.map(comment => {
                 return <div>{comment}</div>
             })}
             <CommentBox
             review ={this.state.review}
             postId={this.state.postId}
             handleCommentValue={this.handleCommentValue}
             enterCommentLine = {this.enterCommentLine}
             submitCommentLine= {this.submitCommentLine} 
            />

         </div>
     )
 }
} 

class CommentBox extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            currentUser: AuthService.getCurrentUser(),
            postId: this.props.postId,
            posts:[]
        };
    }


    componentDidMount(){
       // debugger;
        
        
    }

      render(){
        const {currentUser} = this.state;
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
                 {currentUser && <input onKeyPress = {enterCommentLine}
                  value= {review}
                  id ="comments-input" 
                  onChange = {handleCommentValue}
                  type= "text"
                  placeholder="Add a comment" /> }

                  {currentUser && <button onClick={submitCommentLine}
                  type="submit"
                  className="comments-button"
                  id={changeCommentButtonStyle()}
                  disabled= {enableCommentButton()}>Post comment</button> }

                  
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
