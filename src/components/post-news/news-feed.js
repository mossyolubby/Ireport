// import React, {Component} from 'react';
// //import axios from 'axios';
// //import Filter from './filter-post';
// //import PostForm from './post-form';
// //import Post from './post'

// const apiUrl = " https://i-report-project.herokuapp.com/api/all/"
// const categories= ['politics', 'business', 'sport','entainment','health','food', 'tech', 'thoughtandopinion'];

// class Feed extends Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//             posts: [],
//             //filteredPosts: [],
//             errors: {}
//         }

//         this.handleNewsPost = this.handleNewPost.bind(this);
//         //this.handleFilter =this.handleFilter.bind(this);
//     }

//     componentWillMount(){
//         this.fetchPosts();

//     }

//     componentWillUnmount(){
//         clearTimeout(this.timeout);
//     }

//     startPolling(){
//         this.timeout = setTimeout(()=> 
//         this.fetchPosts(), 10000);
//     }

//     fetchPosts(){
//     fetch(`${apiUrl}/posts`).then(
//       (response) => {
//           return response.json();
//       }).then((posts) =>{
//           clearTimeout(this.timeout);
//           this.startPolling();
//           this.setState({ posts });
//       });
//     }

//     handleNewPost(post) {
//         const currentPosts = this.state.posts;
//    const context = this;

//    var posts = this.state.posts.concat([post]);
//    this.setState({ posts, errors: {} });

//    fetch(`${apiUrl}/posts`, {
//        method:'post',
//        body: JSON.stringify(post),
//        header: {'Content-Type': 'application/json' }

//    }).then(function(response) {
//        return response.json();
//    }).then(function(data) {
//        if (data.errors) {
//            context.setState({
//                errors: data.errors,
//                posts: currentPosts
//            });
//        }else {
//            context.setState({
//                errors: {}
//            })
//        }
//    });
//     }


//     render(){
//         const posts = this.state.posts.map((post, 
//         index) =>
//         <Post key={index} value={post} />
//         );
        
//         return(
        
//             <Post onSubmit={this.handleNewPost}
//             errors={this.state.errors}/>
        
//         )
            
//     }
     

// }


// class Post extends React.Component {
//     render() {
//       return (
//         <div className="post">
//           <span className="label">{this.props.value.category}</span>
//           <span className="content">{this.props.value.content}</span>
//         </div>
//       )
//     }
//   }

// class PostForm extends React.Component {
//     constructor(props) {
//       super(props);
//       this.handleSubmit = this.handleSubmit.bind(this);
//     }
  
//     handleSubmit(event) {
//       this.props.onSubmit({
//         category: this.category.value,
//         content: this.content.value
//       });
//       this.category.value = categories[0];
//       this.content.value = '';
//       event.preventDefault();
//     }
  
//     render() {
//       let errors = {};
//       Object.keys(this.props.errors).forEach((key) => {
//         errors[key] = this.props.errors[key] ? this.props.errors[key][0] : null;
//       });
//       return (
//         <div className="post-form">
//           <form onSubmit={this.handleSubmit}>
//             <label>
//               Category:
//               <small className="formError">{errors.category}</small>
//               <select ref={(input) => this.category = input}>
//                 {categories.map((category, index) =>
//                   <option key={category} value={category}>{category}</option>
//                 )}
//               </select>
//             </label>
//             <label>
//               Content:
//               <small className="formError">{errors.content}</small>
//               <input type="text" ref={(input) => this.content = input} />
//             </label>
//             <button className="button">Submit</button>
//           </form>
//         </div>
//       )
//     }
//   }
  
  
  

// export default Feed;