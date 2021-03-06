import React,{Component} from 'react';
import axioApi from './../axioConfig.js';
import qs from 'qs';
let $this;
export default class Login extends Component{

	constructor(props){
		super(props);
		this.state={
			email:'',
			password:''			
		}
		$this=this;
	}

	handleEmailChange(e){
		$this.setState({email:e.target.value});
	}
	handlePasswordChange(e){
		$this.setState({password:e.target.value});
	}

	saveRegister(e){

		e.preventDefault();
		const user={email:$this.state.email,password:$this.state.password}
			axioApi.post("auth/login",qs.stringify(user)).then((res)=>{
				// $this.props.history.push('/');
				if(res.data.auth==true){
					localStorage.setItem('token',res.data.token);
					axioApi.defaults.headers.common['x-access-token']=res.data.token;

					// $this.props.history.push('/');
					$this.props.history.push({
						pathname:'/',
						redirectfrom:'login'
					});
				}
			}).catch((err)=>{
				alert("Username password missmatch");
				console.log(err);
			});		
	
	}



	render(){
		return(
			<div>
				<hr/>
					<h1>Login</h1>
				<hr/>			
			
        <form onSubmit={this.saveRegister}>
            <br/>
            <h2>Login</h2>					
            <br/>
            <div className="form-group">
                <label>Email address</label>
                <input onChange={this.handleEmailChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />						
            </div>
            <div className="form-group">
                <label>Password</label>
                <input onChange={this.handlePasswordChange} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>					
            <button type="submit"  className="btn btn-primary">Submit</button>
        </form>
       	</div>
			)
	}
}