import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'https://i-report-project.herokuapp.com/api/';

class UserService {
    getCategory(){
        return axios.get(API_URL + 'all/categories');
    }

    getPost(){
        return axios.get(API_URL + 'all/post');
    }

    getProfile(){
        return axios.get(API_URL + 'user/profile', {headers:authHeader()});
    }
}


export default new UserService();