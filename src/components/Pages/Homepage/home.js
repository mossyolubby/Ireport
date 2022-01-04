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
            <div className='news' style={{width: '18rem;'}}>
                
                {this.state.posts.map(function(post,index) {
                return <div className='content' key={index}>
                    <div className='' >
                    <div className = 'card-body'>
                      <h5 className="news_title card-title">{post.title}</h5>
                      <div className='image-group'>
                     <img className="card-img-top" src={post.imagePath}
                     />
                    </div>
                    <p className="news-desc card-text">{post.description}</p>
                     
                      {/* <p className="news-desc">{post.areaOfReport}</p> */}
                        <div className='reaction'> 
                          <span className='Likes' style={{display:'flex', padding:'10px'}}>
                         <Likes postId={post.id}/>
                         <span className='numberoflikes' style={{paddingLeft:'7px', marginTop:'4px'}}>{post.numberOfLikes} </span>
                          </span>
                           <span className='Unlike' style={{display:'flex', padding:'8px', marginTop:'4px', marginLeft:'0'}}><UnLike postId={post.id} />
                           <span className='numberofUnlike' style={{paddingLeft:'7px', marginTop:'0px'}}>{post.numberOfDislikes}</span>
                           </span>
                          <span style={{paddingLeft: '10px', fontSize: '12px', marginTop:'14px'}}>Comments
                          <span className='numberofcomment' style={{paddingLeft:'7px', marginTop:'0px' }}>{post.numberOfComments}</span>
                          </span> 
                        </div> 
                    </div>
                      
                      {/* <CommentPost postId={post.id} />
                      <ShowComment postId={post.id} /><span style={{fontSize:'14px'}}>{post.user.username}</span> */}
                      
                      {/* <hr style={{margin:'0'}}/>  */}
                      </div>
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