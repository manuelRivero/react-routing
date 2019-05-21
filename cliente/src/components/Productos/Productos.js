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

  }
  componentWillMount(){
    this.getApiData();
  }

  loginHandle = () => {
    console.log(this.props.auth.login())
    
  }


  renderProductos = () =>{
      return null//productos.map((producto, index) => (<Producto key={index} producto={producto} /> ))
  }

  renderLoginBtn = () => {
    return (
      <div className=" contenedor-boton">
          <p> Debes estar logeado para ver el contenido!</p>
          <a className="boton" onClick={this.loginHandle}> Iniciar sesion</a>
      </div>
    )
  }
  renderBuscador = () => {
    return ( <Buscador className=""></Buscador> )
  }
  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div className="productos-container">
            
            <h1>Nuestros productos</h1>
              { isAuthenticated() &&
                this.renderBuscador()
                }
            <div className="productos">
              { !isAuthenticated() ?
                this.renderLoginBtn() :
                this.renderProductos()
                }

            </div>
      </div>
    )
  }
}

