import React from 'react'
import axios from 'axios'

const apiUrl = "https://i-report-project.herokuapp.com/api/"

class Business extends React.Component{

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
        axios.get(apiUrl + "all/posts/2", {
         
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
            <h1 className='business-news' >Business News</h1>
        <div className='allNews'>
        
            <div className='news'>
                {this.state.posts.map(function(post,{id}) {
                return <div>
                      
                      <h4 className="list-group-item-heading">{post.title}</h4>
                      <p className="list-group-item-text">{post.description}</p>
                      <img className="image-group" src={post.imagePath} />
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

export default Business;
