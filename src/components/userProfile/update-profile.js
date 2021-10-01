import axios from 'axios';
import React from 'react';



class UpdateProfile extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        image:'',
        areaOfInterest:[],
        email:'',
        username
        
      };
      this.handleUpdate = this.handleUpdate.bind(this);
        this.onChangeImage = this.onChangeImage.bind(this);
        this.onChangeAreaOfInterest = this.onChangeAreaOfInterest.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
    }

    onChangeImage(e) {
        this.setState({
            image: e.target.value
        });
    }

    onChangeAreaOfInterest(e) {
        this.setState({
            areaOfInterest: e.target.value
        });
    }
    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }
    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }


    handleUpdate(){ 
        var update = this;
        axios.post('/updateProfile', {
          username: this.state.username,
          email: this.state.email,
          areaOfInterest:this.state.areaOfInterest,
          image:this.state.image
        })
        .then(function (response) {
          if(response){
            hashHistory.push('/')  
          }
        })
        .catch(function (error) {
          console.log('error is ',error);
        });
      }

    // onChangePassword(e) {
    //     this.setState({
    //         password: e.target.value
    //     });
    // }

    // handleUpdate(e) {
    //     e.preventDefault();

    //     this.setState({
    //         message: "",
    //         successful: false
    //     });

        
            //axios.put('https://i-report-project.herokuapp.com/api/user/profile',
            //     this.state.image,
            //     this.state.areaOfInterest,
            
            // ).then(
            //     response => {
            //         this.setState({
            //             message:response.data.message,
            //             successful:true
                        
            //         });
            //     },
                
         
            //     ).catch(function (error) {
            //         console.log('error is ',error);
            //       });;
            // }
    
    render() {
      return (
        <div className="col-md-5">
          <div className="form-area">  
              <form role="form">
                <br styles="clear:both" />
                <div className="form-group">
                  <input value={this.state.username} type="text" onChange={this.handleNameChange} className="form-control" placeholder="Name" required />
                </div>
                <div className="form-group">
                  <input value={this.state.email} type="password" onChange={this.handlePasswordChange} className="form-control" placeholder="Password" required />
                </div>
                <div className="form-group">
              <label for="avatar">upload your image</label>
               <input type="file"
               onChange={this.handleImageChange}
               id="image" name="image"
               accept="image/png, image/jpeg" />
                </div> 

               
                <button type="button" onClick={this.updateProfile} id="submit" name="submit" className="btn btn-primary pull-right">Update</button>
              </form>
          </div>
        </div>
      )
    }
}


export default UpdateProfile;