import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch,Route,BrowserRouter,Link} from 'react-router-dom';
import Home from './views/Home.js';
import Register from './views/Register.js';
import Login from './views/Login.js';
import Post from './views/Post.js';
import CreatePost from './views/CreatePost.js';

 let token=localStorage.getItem('token');


class App extends Component {

  // constructor(props){
  //   super(props);
  // }

  ShowLogin(){
      let loginnorlogout=<Link className="nav-link" to='/login'>Login</Link>;
      if(token){
          loginnorlogout=<a href="" className="nav-link"  onClick={this.logout}>LogOut</a>;
      }
      return loginnorlogout;
  }

  
  logout(){
    localStorage.removeItem('token');
    this.history.push('/');
  }

    ShowRegisterOrPost(){
      let registerOrPost= <Link className="nav-link" to='/register'>Register</Link>
      if(token){
        registerOrPost=<a href="/post" className="nav-link"   to='/post' >Post</a>;
    }
    return registerOrPost
  }
  render() {
    return (
      <div>
        <div className="header">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto container">
                <li className="nav-item active">                
                  {/* Link is equal with a href  */}
                  <Link className="nav-link" to='/'>Home</Link> 
                </li>
                <li className="nav-item">
                  {this.ShowRegisterOrPost()}
                </li>   
                 <li className="nav-item">
                 {this.ShowLogin()}                
                </li>                  
              </ul>    
            </div>
          </nav>
        </div>
        <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/register" component={Register} />
               <Route path="/login" component={Login} />
               <Route path="/post" component={Post} />
               <Route path="/create-post" component={CreatePost} />
            </Switch>
        </div>
        <div className="container">
          <br/><br/>
          <h6>Footer</h6>
        </div>
      </div>
    );
  }
}

export default App;
