import React from 'react';
import axios from 'axios'


const apiUrl = "https://i-report-project.herokuapp.com/api/"
class Entertainment extends React.Component{

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
        axios.get(apiUrl + "all/posts/3", {
         
        })
        .then(function(response){

        self.setState({posts:response.data})

            
        }).catch(function(error){
            console.log('error is', error);
        })

        
    }

    
    render() {
        this.state.posts.sort(function (a, b) {
            return b.id - a.id;
          });
    
    return (
        <container>
            
        <div className='News'>
        <h4 className='politics-news' 
        // style= {{display:'flex',justifyContent:'center', margin:'auto', }}
        >
            Entertainment News</h4>
            <div className=''>
                {this.state.posts.map(function(post,{id}) {
                return <div className='News-content'>
                    <img className="image" src={post.imagePath} />
                     
                      <div className = 'content-group'>
                          {/* <FaCircle/> */}
                      <h6 className="post-title">{post.title}</h6>
                      <p className='postdes'>{post.description}</p>
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


export default Entertainment;
