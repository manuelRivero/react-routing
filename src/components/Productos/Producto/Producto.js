import React from 'react';
import {Link} from 'react-router-dom';
import './producto.css'

export default ({producto}) => {
  const {imagen, nombre, precio, id} = producto;
  return (
    <div className="producto">
      <img src={`/img/${imagen}.png`} alt={nombre} />

      <div className="producto-body">
        <h3>{nombre} </h3>
        <p>Precio:  <span className="precio">${precio}</span></p>
        <Link to={`/producto/${id}`} className="link" > Mas Informacion </Link>
      </div>
    </div>
  )
}
