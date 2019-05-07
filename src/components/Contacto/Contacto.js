import React from 'react';
import './contacto.css';

export default () => {
  return (
    <div className="form-container">
        <form>
            <legend>Envianos tu mensaje!</legend>
            <div className="input-field">
                <label>Nombre: </label>
                <input type="text" name="nombre" id="nombre" className="input" placeholder="ejem: Manuel Rivero"/>
            </div>
            <div className="input-field">
                <label>Email: </label>
                <input type="text" name="email" id="email" className="input" placeholder="ejem: exaple@123.com"/>
            </div>
            <div className="input-field">
                <label>Mensaje: </label>
                <textarea name="mensaje" id="mensaje" className="input" placeholder="Escribe tu mensaje aqui..."> </textarea>
            </div>
            <div className="input-field">
                <button type="submit" className="btn">Enviar</button>
            </div>
        </form>
      
    </div>
  )
}
