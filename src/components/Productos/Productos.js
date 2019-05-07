import React, { Component } from 'react';
import Producto from './Producto/Producto';
import Buscador from './Buscador/Buscador';
import "./productos.css"

export default class Productos extends Component {
    renderProductos = ({productos}) =>{
        return productos.map((producto, index) => (<Producto key={index} producto={producto} /> ))
    }
  render() {
    return (
      <div className="productos-container">
            
            <h1>Nuestros productos</h1>
            <Buscador className=""></Buscador>
            <div className="productos">
                {this.renderProductos(this.props)}
            </div>
      </div>
    )
  }
}

