import React, {Component} from 'react';
import './header.css'
export default class Header extends Component {

  

  logout = () => {
    this.props.auth.logout();

  }

  login = () => {
    this.props.auth.login();
  }

  renderLogBtn = () => {
    let login = <a onClick = {this.login} className="log-btn">
                  <i class="fas fa-sign-in-alt log-text"></i> login 
                </a> ;
    let logout = <a onClick = {this.logout} className="log-btn">
                  <i class="fas fa-sign-in-alt log-text"></i> logout 
                </a>
    return !this.props.auth.isAuthenticated() ? login : logout ;
  }
  render(){
    return (
      <header>
        <React.Fragment>
          <div className="head">
                {this.renderLogBtn()}
          </div>
          <div className="logo">
                <img src="/img/logo.png" />
                
          </div>
        </React.Fragment>
          
      </header>
    )
  }
}
