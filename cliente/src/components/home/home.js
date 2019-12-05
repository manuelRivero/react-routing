import React from 'react';
import styles from './home.module.css'

export default function Home() {
  return (
    <>
        <div className={[styles.Home, "section-container"].join(" ")}>
                <div className={styles.Gradient}></div>
                <div className={styles.Card}>
                    <h1>Lo mas exclusivo a menor precio!</h1>
                    <p>Ingresa para obtener los mejores descuentos y premios asombrosos.</p>
                    <button>Log in</button>
                    <button className={styles.StartBtn}>Empezar a comprar!</button>
                </div>
        </div>  
    </>
  );
}
