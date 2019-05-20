import React, { Component } from 'react';
import Header from './Header/Header';
import {makeMainRoutes} from './routes';
import InfoProductos from '../datos/datos.json';


class App extends Component {

  state={
    productos:null
  }
  componentWillMount(){
    this.setState({
      productos: InfoProductos
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
