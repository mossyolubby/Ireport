import React from 'react';
import axios from 'axios';
import './style.css';

const apiUrl = "https://i-report-project.herokuapp.com/api/"

class Sport extends React.Component{

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
        axios.get(apiUrl + "all/posts/4", {
         
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
            <div className='News'>
            <h4 className='sport-news' style= {{display:'flex',justifyContent:'center', margin:'auto', }}>Sport News</h4>
        
        
            <div className='news'>
                {this.state.posts.map(function(post,{id}) {
                return <div className= 'News-content'>
                      
                      <h6 className="post-title">{post.title}</h6>
                      <img className="image" src={post.imagePath} />
                      <p className="postdes">{post.description}</p>
                      
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
export default Sport;
