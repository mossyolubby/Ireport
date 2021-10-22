// import ReactDom from 'react-dom';
// import React from 'react';
// import axios from 'axios';
// import CommentOnPost from './comment-on-post';
// import CommentAdd from './comment-add';



// class CommentGroup extends React.Component {
//     constructor(props){
//         super(props);

//         this.state ={
//             comments:[{id: '', body: ''}]
//         }

//         this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
//     }

//     handleCommentSubmit(data) {
//         const postData = {
//             review:data
//         };
//         axios.post('https://i-report-project.herokuapp.com/api/user/comment/add/',postData).then(
//             (response)=>{
//                 let comments = this.state.comments;
//                 comments.unshift({
//                     id:comments.length + 1,
//                     body:response.data.review
//                 });
//                 this.setState({comments:comments});
//             }
//         );
//     }
//     renderComments () {
//         const {comments} = this.state;
//         return comments.map(review => {
//             const{id, body} = review

//             return(
//                 <CommentOnPost key= {id} body = {body}/>
//             )
//         })
//     }
//     render(){
//         return(
//             <div>{this.renderComments()}
//             <CommentAdd handleCommentSubmit = {this.handleCommentSubmit}/>
//             </div>
//         )
//     }
// }

// export default CommentGroup;