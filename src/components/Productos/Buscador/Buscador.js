import React, { Component } from 'react';
import './buscador.css'

export default class Buscador extends Component {
    handle = () => {
        console.log("click");
    }
  render() {
    return (
        <div className="buscador-container">
            
            <input className="buscador" type="text" placeholder="Encuentralo al toque..." onChange={this.handle}></input>
            <div className="icon-container">
              <i class="fas fa-search icon"></i>
            </div>
      </div>
    )
  }
}

