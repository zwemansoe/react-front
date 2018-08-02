import axios from 'axios';
const axioApi=axios.create({
	// baseURL:'http://localhost:5000/api/',
	baseURL:'https://mern-stack-zwe-man-soe.herokuapp.com/api/',  //https://mern-stack-zwe-man-soe.herokuapp.com/
	timeout:10000,
	withCredentials:true
});

export default axioApi