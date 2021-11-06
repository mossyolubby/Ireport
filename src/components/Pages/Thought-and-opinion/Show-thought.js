import axios from 'axios'
import React,{Component} from 'react';
//import CommentPost from '../../post-news/comment';
import './thought-and-opinion.css'
import LikeThought from './thought-like';
import UnLikeThought from './thought-unlike';
//import AuthService from '../../../services/auth.service'



const apiUrl = "https://i-report-project.herokuapp.com/api/"

class ShowThought extends Component{

    constructor(props){
        super(props);
        this.state = {
            // currentUser:AuthService.getCurrentUser(),
            // //user:this.state.props,
            posts:[]
        };
    }


    componentDidMount(){
       // debugger;
        const self= this;
        
        axios.get(apiUrl + "all/thoughts")
        .then(function(response){

        self.setState({posts:response.data})

        console.log(response)
            
        }).catch(function(error){
            console.log('error is', error);
        })

        
    }

    
    render() {
    


        this.state.posts.sort(function (a, b) {
            return b.id - a.id;
          });

        //   const {currentUser} = this.state;
          //const user =this.state
    return (
        // <Container>
        <div className='news-thought'>
            <div className='opinion'>
            <h4>Thought and opinion</h4>
            <div>
                    
                     {/* {currentUser.username} */}
                     {/* {user.username} */}
                     
            </div>
                {this.state.posts.map(function(post,index) {
                return <div key={index}>
                    <img
            src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
            alt="profile-img"
            className="profile-img-card" id="profilecard"
            
            /> 
                    <h6 className="thought">{post.user.username}</h6>
                      <p className="thought">{post.description}</p>
                      <div className='likethought'>
                      <div classname='Likes' style={{padding:'5px', margin:'0', display:'flex',}}>
                          <LikeThought thoughtId={post.id}/>{post.numberOfLikes}</div>
                          
                          <div className='Unlike' style={{padding:'5px'}}>
                              <UnLikeThought thoughtId={post.id} />{post.numberOfDislikes}</div>
                      
                      </div>
                      <hr />
                      
                    </div>
                    
                    
                })
                }

            </div>
        </div>
        // </Container>
    )
}
}

export default ShowThought;
