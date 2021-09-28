import axios from 'axios';
import React, {Component} from 'react';
import CustomButton from '../custom-button/custom-button';
import { Link } from 'react-router-dom';
import authHeader from '../../services/auth-header';

//import ImageUploader from 'react-images-upload';


//const categories= ['politics', 'business', 'sport','entainment','health','food', 'tech', 'thoughtandopinion'];
const apiUrl = "https://i-report-project.herokuapp.com/api/"




class PostNews extends Component{
  constructor(props){
    super(props);
  
    this.handleTitleChange= this.handleTitleChange.bind(this)
    this.handleAreaOfReportChange= this.handleAreaOfReportChange.bind(this)
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleImageChange = this.handleImageChange.bind(this)
    

     this.state ={
       title:'',
       areaOfReport:[],
       description:'',
       image: [] 
     };
  
  }


//   componentDidMount = async() => {
//     debugger
//     await axios
//     .get(apiUrl + 'all/categories')
//     .then(response => {
//       this.setState({ areaOfReport: response.data });
//     })
//     .catch(function(error) {
//       console.log(error);
//     });
// }  

componentDidMount(){
  debugger;
  const self= this;

  axios.get(apiUrl + 'all/categories', {
   
  })
  .then(function(response){

  self.setState({areaOfReport:response.data})
console.log(response.data);
      
  }).catch(function(error){
      console.log('error is', error);
  })

  
}

      handleSubmit(event) {
        // const payload = {
        //   title:this.state.title,
        //   areaOfReport:this.state.areaOfReport,
        //   description:this.state.description,
        //   image:this.state.image
        // };
        // console.log(payload)  
        const formData = new FormData();
        formData.append("title", this.state.title);
        formData.append("areaOfReport", "politics");
        formData.append("description", this.state.description);
        formData.append("image", this.state.image);
        console.log(formData);
        formData.forEach(d => console.log(d))
        //debugger;
        const header = authHeader();
        console.log(header);
    axios.post(apiUrl + 'user/post/create', 
    formData,
       {headers:header})
    .then(function(response){
      console.log('response from add post is ', response)
      // History.push('/')
      this.props.history.push("/");
          window.location.reload();
    })
    .catch(function(error){
      console.log(error);
    })
      event.preventDefault();
    }
  
  handleTitleChange(e){
    this.setState({title:e.target.value})
  }
  
  handleAreaOfReportChange(e){
    this.setState({areaOfReport:e.target.value})
  }
  
  handleDescriptionChange(e){
    this.setState({description:e.target.value})
  }

  handleImageChange(e) {
    const picture = e.target.files[0];
    console.log(picture)
    this.setState({
     image: picture
    });
  }

  
  postNews(){
    const header = authHeader();
    axios.post(apiUrl + '/user/post/create', {
      title:this.state.title,
      areaOfReport:this.state.areaOfReport,
      description:this.state.description
    }, {headers:header})
    .then(function(response){
      console.log('response from add post is ', response)
      // History.push('/')
      this.props.history.push("/");
          window.location.reload();
    })
    .catch(function(error){
      console.log(error);
    })
  }
  
  
  
    render(){
      return(
        <div className='col-md-12'>
          <div className='card card-container'>
        
          <img src='images/ireportlogo.png' alt='IReport' width="100px" id="logo"/> 
          <br styles= "clear:both" />
            <form onSubmit={this.handleSubmit}>
              {/* <br styles= "clear:both" /> */}
              <div className="form-group">
             <input type="text" onChange={this.handleTitleChange} 
             className="form-control" id="title" name="title" placeholder="Title" required />
             </div>
             <br styles= "clear:both" />

              <div className='form-group'>
              <label>Area Of Report:
                <select 
                onChange={this.handleAreaOfReportChange} 
                 ref={(input) => this.areaOfReport = input} 
                >
                 {this.state.areaOfReport.map(function (areaOfReports,index){
                 
                 <option key={index} value={areaOfReports.name}>{areaOfReports.name}</option>
                 })}
                 
                </select>
                </label>
              </div>
              <br styles= "clear:both" />

              <div className="form-group">
                <label> News Description:
              <textarea className="form-control" 
              onChange={this.handleDescriptionChange} 
              type="textarea" 
              id="subject" 
              placeholder="Subject" 
              maxlength="140"
               rows="7">
              </textarea>
              </label>
              </div>
               <div className="form-group">
              <label for="avatar">upload your image</label>
               <input type="file"
               onChange={this.handleImageChange}
               id="image" name="image"
               accept="image/png, image/jpeg" />
                </div> 

              <div className="form-group">
              <CustomButton >Post News</CustomButton>
              </div>
  
              <button type="button" id="submit" name="submit" className="btn"><Link href='/'>Cancel</Link></button>
  
            </form>
        </div>
        </div>
      )
    }
  }

  export default PostNews;