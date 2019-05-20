import React, { Component } from 'react';

import './InfoProducto.css';

export default class InfoProductos extends Component {
  
  render() {
    if(!this.props.producto){
        return null;
    }else{
      const {imagen, nombre, precio, descripcion} = this.props.producto;
      return (
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
    
  }
}
