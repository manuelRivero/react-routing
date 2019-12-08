import React, {Component} from 'react';
import './header.css'

import {withRouter} from 'react-router-dom'

 class Header extends Component {

  state={
    isLogin:false
  }
  logout = () => {
    this.props.auth.logout();

  }

  login = () => {
    this.props.auth.login()
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

   componentDidMount(){
     const loginState = this.props.auth.isAuthenticated()
     this.setState({isLogin: loginState})
   }

  
  render(){
    
    const { isAuthenticated } = this.props.auth;
    
    return (
      <header className="header">
        <React.Fragment>
          <div className="header-top-bar">
                { isAuthenticated() ? this.logoutbtn(): this.loginbtn()}
          </div>
          <div className="header-logo">
                <img src="/img/logo.png" alt="logo"/>
                
          </div>
        </React.Fragment>
          
      </header>
    )
  }
}

export default withRouter(Header)