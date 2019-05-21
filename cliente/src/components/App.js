import React, { Component } from 'react';
import Header from './Header/Header';
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
          <Header />
          {makeMainRoutes()}
      </div>
    );
  }
}

export default App;
