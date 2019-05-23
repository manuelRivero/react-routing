import React, { Component } from 'react';
import {makeMainRoutes} from './routes';


class App extends Component {

  state={
    productos:null
  }
  componentWillMount(){
    this.setState({
      productos: null
    })
  }
  render() {
    return (
      <div className="container">
          
          {makeMainRoutes()}
      </div>
    );
  }
}

export default App;
