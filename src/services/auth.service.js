import axios from 'axios';


const API_URL = 'https://i-report-project.herokuapp.com/api/all/';


class AuthService {
    
    login(username, password) {
        return axios
        .post(API_URL +'login',{
            username,
            password
        })
        .then(response => {
            console.log(response,'response')
            console.log(response.data)
            if(response.data.access_token){
                alert('Successfully Login')
                localStorage.setItem("user", JSON.stringify(response.data))
            }

            return response.data;

        })
    }

    logout() {
        
        localStorage.removeItem("user");
        

    }
    register(username, email, password){
        return axios.post(API_URL + "signup", {
            username,
            email,
            password
        });
        
    }
    
    getCurrentUser(){
        //console.log('inside getCurrentUser')
        
        return JSON.parse(localStorage.getItem('user'));
    }
}

export default new AuthService();