import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
import axioApi from './axioConfig.js';
let token=localStorage.getItem('token');
if(token){
	axioApi.defaults.headers.common['x-access-token']=localStorage.getItem('token');
}



ReactDOM.render(
	<BrowserRouter>
		<App/>
	</BrowserRouter>, document.getElementById('root')
	);