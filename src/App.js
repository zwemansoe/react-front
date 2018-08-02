import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch,Route,BrowserRouter,Link} from 'react-router-dom';
import Home from './views/Home';
import Register from './views/Register';
import Login from './views/Login';

class App extends Component {
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
                  <Link className="nav-link" to='/register'>Register</Link>
                </li>   
                 <li className="nav-item">
                  <Link className="nav-link" to='/login'>Login</Link>
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
