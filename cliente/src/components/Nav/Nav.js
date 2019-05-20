import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './nav.css';

export default class Nav extends Component  { 

    
    render(){
        return (
                <nav className="navegacion" >
                    <NavLink className="link" to={'/nosotros'} activeClassName="active" > Nosotros </NavLink>
                    <NavLink className="link" to={'/productos'}  activeClassName="active"> Productos </NavLink>
                    <NavLink className="link" to={'/contacto'} activeClassName="active"> Contacto </NavLink>
                    <span className="nav-span"></span>
                </nav>
        )
    }
  
}
