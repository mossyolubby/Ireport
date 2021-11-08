import axios from 'axios'
import React,{Component} from 'react'
//import Post from '../../post-news/post';
import './home.css';
//import {Image} from 'cloudinary-react';
//import Comment from '../../post-news/comment';
import CommentPost from '../../post-news/comment';
//import { Link } from 'react-router-dom'
import ShowComment from '../../CommentPost/comment-on-post';
import Likes from '../../post-news/like';
import Breaking from '../Breaking/breaking';
import UnLike from '../../post-news/Unlike';
//import CommentGroup from '../../CommentPost/comment-group';
//import Feed from '../../post-news/news-feed';
import ShowThought from '../Thought-and-opinion/Show-thought'


const apiUrl = "https://i-report-project.herokuapp.com/api/"

class Home extends Component{

    constructor(props){
        super(props);
        this.state = {
            posts:[]
        };
    }


    componentDidMount(){
       // debugger;
        const self= this;

        axios.get(apiUrl + "all/posts", {
         
        })
        .then(function(response){

        self.setState({posts:response.data})

        console.log(response.data)
            
        }).catch(function(error){
            console.log('error is', error);
        })

        
    }

    
    render() {
    

        this.state.posts.sort(function (a, b) {
            return b.id - a.id;
          });
    return (
        // <Container>
        <div className='allNews'>
            <div className='news'>
                {this.state.posts.map(function(post,index) {
                return <div key={index}>
                      <h5 className="news_title">{post.title}</h5>
                      <p className="news-desc">{post.description}</p>
                      {/* <p className="news-desc">{post.areaOfReport}</p> */}
                      <img className="image-group" src={post.imagePath} />

                      <div className='likes'>
                          <span className='Likes' style={{display:'flex'}}><Likes postId={post.id}/>{post.numberOfLikes}</span>
                          <span className='Unlike'><UnLike postId={post.id} />{post.numberOfDislikes}</span>
                          <span style={{paddingLeft: '10px', fontSize: '14px', margin:'0px'}}>Comments{post.numberOfComments}</span>
                      </div>
                      
                      <CommentPost postId={post.id} />
                      <ShowComment postId={post.id} /><span style={{fontSize:'14px'}}>{post.user.username}</span>
                      
                      <hr style={{margin:'0'}}/>
                      
                    </div>
                    
                    
                })
                }

            </div>
           
           <ShowThought 
           className="showthought"/> 
        </div>
        // </Container>
    )
}
}

export default Home;



// {/* <div className="news" id="breaking">
//                            <div className='breaking-news'>
//                                <Breaking />
//                            </div>
//          </div> */}


        {/* <div className="news" id="thought">
        <div className='opinion'>
                
                <div>
                   <h4>Thought and opinion</h4> 
                    mossyolubby <img
            src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
            alt="profile-img"
            className="profile-img-card" id="profilecard"
          /></div>
                
                <p className='news-desc'>bgtreds hytre bytre nhgtref lmnhgfsr lojshsrred 
                hgtadraea abafrad bfafds bhgtrav bgtard bgvfAD
                HGHFAFCAGFC  ajhsvhsyhobxb bnhgvsvfgc  bnbgvavsg  avsfvgacag
                </p>
                <span className='like'>Like</span>
                <span className='comment'>comment</span>
                <span className='share'>Share</span>
                
              </div>  
              </div>                     */}