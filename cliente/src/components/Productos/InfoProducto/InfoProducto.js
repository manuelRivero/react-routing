import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './InfoProducto.css';

export default class InfoProductos extends Component {
  
  renderLoginBtn = () => {
    return (
      <div className=" productos-contenedor-login">
          <h2> Ingresa para disfrutar del mejor contenido!</h2>
          <a className="productos-login-btn" onClick={this.loginHandle}> Iniciar sesion</a>
      </div>
    )
  }

  renderinfo(){
    const {imagen, nombre, precio, descripcion} = this.props.producto 
    return(
          <div className="container">
            <div className="info-producto">
              <div className="info-producto-img">
                  <img src={`/img/${imagen}.png`} alt="imagen" />
              </div>
              <div className="info-producto-body">
                  <h1>{nombre}</h1>
                  <span className="precio">$ {precio}</span>
                  <p>{descripcion}</p>
              </div>
          </div>
        </div>
    )
  }

  renderProductoDesconocido(){
    return (
      <div className=" productos-contenedor-login">
          <h2>Parece que este producto no esta disponible en este momento!</h2>
          <p>haz click en volver para ver nuestras ofertas.</p>
          <Link className="productos-login-btn" to="/">Volver</Link>
      </div>
    )
  }
  render() {
    
      return (
        <div className="container">
          {!this.props.auth.isAuthenticated() ? this.renderLoginBtn() : (this.props.producto ? this.renderinfo() : this.renderProductoDesconocido())}
        </div>
      )
    }
}
