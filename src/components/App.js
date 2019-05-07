import React, { Component } from 'react';
import Header from './Header/Header';
import Router from './Router';
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
          <Router productos={this.state.productos} />
      </div>
    );
  }
}

export default App;
