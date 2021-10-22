import axios from 'axios'
import React,{Component} from 'react';
import './home.css';
import CommentPost from '../../post-news/comment';



const apiUrl = "https://i-report-project.herokuapp.com/api/"

class ShowThought extends Component{

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

        console.log(response)
            
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
        <div className='news'>
            <div className='opinion'>
            <div>
                   <h4>Thought and opinion</h4> 
                    mossyolubby <img
            src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
            alt="profile-img"
            className="profile-img-card" id="profilecard"
          /></div>
                {this.state.posts.map(function(post,index) {
                return <div key={index}>
                      <p className="thought">{post.description}</p>
                      <div>
                          {/* <Likes /> */}
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
