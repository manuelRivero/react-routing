import React, { Component } from 'react';
import MainRoutes from './routes';
import Footer from './Footer/Footer';



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
      <div className="app">
          <MainRoutes />
          <Footer></Footer> 
      </div>
    );
  }
}

export default App;
