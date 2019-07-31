import axios from 'axios';

import React, { Component } from 'react';
import Producto from './Producto/Producto';
import Buscador from './Buscador/Buscador';
import "./productos.css"

export default class Productos extends Component {

  state={
    productos: null,
    terminoBusqueda:''
  }

  getApiData = () => {
    
    const {getAccessToken} = this.props.auth,
          headers = { 'Authorization' : `Bearer ${getAccessToken()}`},
          url = 'http://localhost:8080/productos';
    axios.get(url, {headers}).then(res => this.setState({ productos: res.data}))
    
    

  }
  componentWillMount(){
    if(this.props.auth.getAccessToken() ) {
      this.getApiData();
    }
  }

  loginHandle = () => {
    this.props.auth.login()
    
  }

  renderProductos = () =>{
      
      let content = this.state.productos ? 
        this.state.productos.map((producto, index) => (<Producto key={index} producto={producto} /> )) :
        <p>cargando</p>
        return content;
      
  }

  renderLoginBtn = () => {
    return (
      <div className=" contenedor-boton">
          <h2> Ingresa para disfrutar del mejor contenido!</h2>
          <a className="login-btn" onClick={this.loginHandle}> Iniciar sesion</a>
      </div>
    )
  }
  renderBuscador = () => {
    return ( <Buscador className=""></Buscador> )
  }
  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div className="section-container fadeIn">
            
              { isAuthenticated() &&
                this.renderBuscador()
                }
            <div className="productos">
              { !isAuthenticated() ?
                this.renderLoginBtn() :
                this.renderProductos()
                }
              {
                
              }
            </div>
      </div>
    )
  }
}

