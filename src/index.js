import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter} from 'react-router-dom';
//import axios from 'axios';
//import { Provider } from 'react-redux';

//axios.defaults.baseURL = 'https://i-report-project.herokuapp.com/api/';
//axios.defaults.headers.common['Authorization'] = 'Bearer' + localStorage.getItem('token');

ReactDOM.render(

<BrowserRouter>
<App />
</BrowserRouter>

,document.getElementById
  ('root'));

