import React,{Component} from 'react';
import axios from 'axios';



// class CommentOnPost extends Component{
//     constructor(props) {
//         super(props);
//     }
//     render(){
//         const {body} = this.props;
//         return(
//             <div className = "comment card mb-2">
//                 <div className = "card-body">
//                     <strong>mossy</strong>2hrs <br/>
//                     {body}
//                 </div>
//             </div>
//         );
//     }


// }

// export default CommentOnPost;

const apiUrl = "https://i-report-project.herokuapp.com/api/"

class ShowComment extends Component{

    constructor(props){
        super(props);
        this.state = {
            posts:[],

        };
    }


    componentDidMount(){
       // debugger;
        const self= this;

        axios.get(apiUrl + "all/comments/" + this.props.postId, {
         
        })
        .then(function(response){

        self.setState({posts:response.data})

        console.log(response, "RETRIEVED COMMENTS")
            
        }).catch(function(error){
            console.log('error is', error);
        })

        
    }

    
    render() {
    
    return (
       
        <div className=" ">
            <div className="card-body" style={{padding:'0',}}>
                {this.state.posts.map(function(post,index) {
                return <div key={index}>
                    
                      <p className="showcomment" style={{padding: '1px', fontSize: '14px', margin:'0'}} >{post.comment}-</p>
                     
                      {/* <hr style={{margin:'0'}}/> */}
                    </div>
                    
                    
                })
                }
            
 
        </div>
        </div>
       
    )
}
}

export default ShowComment;