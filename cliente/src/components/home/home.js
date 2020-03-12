import React from 'react'
import styles from './home.module.css';
import GradientCard from './../../UI/gradientCard/gradientCard'
import {Link} from 'react-router-dom'

export default function Home(props) {
  // hacer redireccionamiento automatico a los productos si el usuario ya esta logueado

  const loginHandle = () => {
    props.auth.login()
    
  }

  let cardContent= (
    <div>
      <h1>Lo mas exclusivo a menor precio!</h1>
      <p>Ingresa para obtener los mejores descuentos y premios asombrosos.</p>
        
      <button  onClick={loginHandle}>Log in</button>
      <Link  to="/productos">Empezar a comprar!</Link>
    </div>
    
  );

  if(props.auth.isAuthenticated()){
    cardContent=(
      <div>
      <h1>Bienvenido! estas listo para ver el mejor contenido</h1>
        
      <Link  to="/productos">Empezar a comprar!</Link>
    </div>
    )
  }
  

  return ( 
        <div className={[styles.Home, "section-container"].join(" ")}>
            <GradientCard>
              {cardContent}
            </GradientCard>
        </div>  
  );
}
