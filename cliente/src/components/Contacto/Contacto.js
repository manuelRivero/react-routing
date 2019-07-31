import React from 'react';
import './contacto.css';

export default () => {
  return (
    <div className="section-container fadeIn">
        <div className="contenido-container">
            <div className="line-title flex-title">
                <h2 className="">Ponte en contacto</h2>
            </div>
        <div className="contact-hero">
                <div className="contact-menu-item">
                    <i class="fas fa-map-marker-alt"></i>
                    <h3>DIRECCION</h3>
                    <h5> lorem ipsum </h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                </div>
                <div className="contact-menu-item">
                    <i class="fas fa-phone"></i>
                    <h3>TELEFONOS</h3>
                    <h5> lorem ipsum </h5>
                    <p>Lorem ipsum dolor sit amet </p>
                    
                    <h5> lorem ipsum </h5>
                    <p>Lorem ipsum dolor sit amet </p>
                </div>

                <div className="contact-menu-item">
                    <i class="far fa-comment-alt"></i>
                    <h3>EMAIL</h3>
                    <h5> lorem ipsum </h5>
                    <p>Lorem ipsum dolor sit amet </p>
                    
                    <h5> lorem ipsum </h5>
                    <p>Lorem ipsum dolor sit amet </p>
                </div>

            </div>
    </div>
        <div className="contact-form contenido-container">
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
    </div>
  )
}
