import React, { Component } from 'react';

import './InfoProducto.css';

export default class InfoProductos extends Component {
  
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
  render() {
      
      return (
        this.props.producto ? this.renderinfo() : <p>mal</p>
      )
    }
}
