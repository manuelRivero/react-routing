import React, {Component} from 'react';
import './header.css'
export default class Header extends Component {

  logout = () => {
    this.props.auth.logout();

  }

  login = () => {
    this.props.auth.login();
  }

  loginbtn = () => {
    return(
      <a onClick = {this.login} className="header-log-btn">
         <i className="fas fa-sign-out-alt header-log-text"></i> login 
      </a> 
    )
  }
    
   logoutbtn = () => {
     return (
       <a onClick = {this.logout} className="header-log-btn">
                  <i className="fas fa-sign-in-alt header-log-text"></i> logout 
                </a>
     )
   }     
  render(){
    const login =this.props.auth.isAuthenticated();
    return (
      <header className="header">
        <React.Fragment>
          <div className="header-top-bar">
                { login ? this.logoutbtn(): this.loginbtn()}
          </div>
          <div className="header-logo">
                <img src="/img/logo.png" />
                
          </div>
        </React.Fragment>
          
      </header>
    )
  }
}
