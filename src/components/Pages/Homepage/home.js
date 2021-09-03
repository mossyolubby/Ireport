import React,{Component} from 'react'




class Home extends Component{


    
    render() {
        if(this.props.user){
            return(
                <h2>Hi {this.props.user.email}</h2>
            )
        }
    return (
        <div>
            <h1>You are not logged in</h1>
            
        </div>
    )
}
}

export default Home;
