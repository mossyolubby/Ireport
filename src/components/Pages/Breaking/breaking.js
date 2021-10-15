import React from 'react'
import axios from 'axios'
import Likes from '../../post-news/like';
import CommentPost from '../../post-news/comment';
import ShowComment from '../../CommentPost/comment-on-post';

const apiUrl = "https://i-report-project.herokuapp.com/api/"

class Breaking extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            posts:[]
        };
    }


    componentDidMount(){
        debugger;
        const self= this;
//var id= 1;
        axios.get(apiUrl + "all/posts/8", {
         
        })
        .then(function(response){

        self.setState({posts:response.data})

            
        }).catch(function(error){
            console.log('error is', error);
        })

        
    }

    
    render() {
    
    return (
        <container>
            <h1 className='business-news' >Breaking News</h1>
        <div className='allNews'>
        
            <div className='news'>
                {this.state.posts.map(function(post,{id}) {
                return <div>
                      
                      <h4 className="list-group-item-heading">{post.title}</h4>
                      <img className="image-group" src={post.imagePath} />
                      <p className="list-group-item-text">{post.description}</p>
                      <div className='likes'>
                          <Likes />
                          <CommentPost postId={post.id} />
                          <ShowComment postId={post.id} />
                      </div>
                      
                      {/* <input type="hidden" id="postId" name="postId" value={post.id}/> */}
                    </div>
                })
                }
                </div>
        </div>
        </container>
    )
}
}

export default Breaking;
