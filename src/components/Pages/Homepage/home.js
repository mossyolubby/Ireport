import axios from 'axios'
import React,{Component} from 'react'
//import Post from '../../post-news/post';
import './home.css';
import {Image} from 'cloudinary-react';
import Comment from '../../post-news/comment';
import CommentPost from '../../post-news/comment';
//import { Link } from 'react-router-dom'
//import Feed from '../../post-news/news-feed';


const apiUrl = "https://i-report-project.herokuapp.com/api/"

class Home extends Component{

    constructor(props){
        super(props);
        this.state = {
            posts:[]
        };
    }


    componentDidMount(){
        debugger;
        const self= this;

        axios.get(apiUrl + "all/posts", {
         
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
        <div className='allNews'>
            <div className='news'>
                {this.state.posts.map(function(post,index) {
                return <div>
                      <h4 className="news_title">{post.title}</h4>
                      <p className="news-desc">{post.description}</p>
                      {/* <p className="news-desc">{post.areaOfReport}</p> */}
                      <Image className="list-group-item-text"/>{post.image_path}
                      <input type="hidden" id="postId" name="postId" value={post.id}/>
                      <CommentPost/>
                    </div>
                    
                })
                }
            
                {/* <h1 className='news_title'>News Title</h1>
                <p className='news-desc'>bgtreds hytre bytre nhgtref lmnhgfsr lojshsrred 
                hgtadraea abafrad bfafds bhgtrav bgtard bgvfAD
                HGHFAFCAGFC  ajhsvhsyhobxb bnhgvsvfgc  bnbgvavsg  avsfvgacag
                </p>
                <span className='like'>Like</span>
                <span className='comment'>comment</span>
                <span className='share'>Share</span>
                
              </div>  
            
        

        <div className="news" id="thought">
        <div className='opinion'>
                {this.state.posts.map(function(post,index) {
                return <a href="#" key={index} className="list-group-item active">
                      <h4 className="list-group-item-heading">{post.title}</h4>
                      <p className="list-group-item-text">{post.description}</p>
                    </a>
                })
                }
            
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
                
              </div>   */}
        </div>
        </div>
        </container>
    )
}
}

export default Home;
