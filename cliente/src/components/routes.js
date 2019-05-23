import React from 'react';
import { Route, Router } from 'react-router-dom';

// componentes del Auth
import Callback from './Callback/Callback';
import Auth from '../Auth/Auth';
import history from '../history';

// Componentes Propios

import Header from './Header/Header';
import Nosotros from './Nosotros/Nosotros';
import NoFound from './NoFound';
import Productos from './Productos/Productos';
import InfoProducto from './Productos/InfoProducto/InfoProducto';
import Nav from './Nav/Nav';
import Contacto from './Contacto/Contacto';
import Footer from './Footer/Footer';

const auth = new Auth();

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

export const makeMainRoutes = () => {
  return (
      <Router history={history}>
        <Header auth ={auth} />
        <Nav></Nav>
        <div>
            <Route path="/callback" render={(props) => {
              handleAuthentication(props);
              return <Callback {...props} /> 
            } } />

            <Route exact path="/"  render={ (props )=>( 
                <Productos 
                    auth ={auth} {...props}
                /> 
              ) } />

                  
            <Route exact path="/productos" render={ (props ) => (
                    <Productos 
                    auth ={auth} {...props}
                    /> 
              ) } />

            <Route exact path="/producto/:productoid" render={ (props)=>{
                      let idProducto= props.location.pathname.replace('/producto/', '');
                      return(
                        <InfoProducto 
                        auth ={auth} {...props}
                        />
                      )
                    }
                  } />
            <Route exact path="/nosotros" component={Nosotros} />
            <Route exact path="/contacto" component={Contacto} />
            <Route  component={NoFound} />
        </div>

      <Footer></Footer> 
      </Router>
  );
}
