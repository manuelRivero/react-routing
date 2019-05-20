import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


export default class Router extends Component {
 
  render() {
    const {productos} = this.props;
    return (
      <div>
        <BrowserRouter>
            
            <Switch>
                
                
            </Switch>
            
        </BrowserRouter>
      </div>
    )
  }
}
