import React from 'react';


class Likes extends React.Component{
    state = {
        count: 0
    }

    incrementMe = () => {
      debugger
        let newCount = this.state.count + 1;
        this.setState({
            count:newCount
        })
    }

    render(){
        return (
            <div>
            <button onClick= {this.incrementMe}>Likes: {this.state.count}</button>
            </div>
        )

    }
}



// const increment = action =>
//   (prevState, props) => {
//     if(action.type === "TOGGLE_LIKE") {
//       prevState["like"].count =  prevState["like"].clicked ? prevState["like"].count - 1 :
//         prevState["like"].count + 1
  //   } else {
  //     prevState["dislike"].count = prevState["dislike"].clicked ? prevState["dislike"].count - 1 :
  //       prevState["dislike"].count + 1
  //   }

  //   return prevState;
  // }

// const setFlag = action =>
//       (prevState, props) => {
//         if(action.type === "TOGGLE_LIKE") {
//           prevState["like"].clicked ? prevState["like"].clicked = false: prevState["like"].clicked = true;
        //   prevState["dislike"].clicked = false;
        // } else {
        //   prevState["dislike"].clicked ? prevState["dislike"].clicked = false: prevState["dislike"].clicked = true;
        //     prevState["like"].clicked = false;
      //   }
      // }

// export default class Likes extends React.Component {
//   state = {
//     like: {
//       count: 0,
//       clicked: false
//     },
    // dislike: {
    //   count: 0,
    //   clicked: false
    // },
  // };


  // toggleLike = () => {
  //   this.setState(increment({ type: "TOGGLE_LIKE" }))
  //   this.setState(setFlag({ type: "TOGGLE_LIKE" }));
  // };
//   toggleDislike = () => {
//     this.setState(increment({ type: "TOGGLE_DISLIKE" }))
//     this.setState(setFlag({ type: "TOGGLE_DISLIKE" }));
//   };
  // render() {
  //   var classNameLike = this.state.like.clicked ? "like-button liked" : "like-button";
    // var classNameDislike = this.state.dislike.clicked ? "dislike-button disliked" : "dislike-button";
    // return (
    //   <>
    //     <div>
          
    //       <button className={classNameLike} onClick={this.toggleLike}>
    //         Like | <span className="likes-counter">{this.state.like.count}</span>
    //       </button>
          {/* <button className={classNameDislike} onClick={this.toggleDislike}>
            Dislike | <span className="dislikes-counter">{this.state.dislike.count}</span>
          </button> */}
        // </div>
        
//       </>
//     );
//   }
// }

 export default Likes;