import React from 'react'
import styles from './home.module.css';
import {Link} from 'react-router-dom'

export default function Home() {
  // hacer redireccionamiento automatico a los productos si el usuario ya esta logueado
  return ( 
  <div className={[styles.Home, "section-container"].join(" ")}>
                <div className={[styles.Card, "fadeUp"].join(" ")}>
                    <div className="fadeDown" style={{marginBottom: "5rem"}}>
                      <h1>Lo mas exclusivo a menor precio!</h1>
                      <p>Ingresa para obtener los mejores descuentos y premios asombrosos.</p>
                    </div>
                    <button className={styles.Button}>Log in</button>
                    <Link className={[styles.StartBtn, styles.Button].join(" ")} to="/productos">Empezar a comprar!</Link>
                </div>
        </div>  
  );
}
