import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

// componentes del Auth
import Callback from './Callback/Callback';
import Auth from '../Auth/Auth';

// Componentes Propios

import Header from './Header/Header';
import Nosotros from './Nosotros/Nosotros';
import NoFound from './NoFound/NoFound';
import Productos from './Productos/Productos';
import InfoProducto from './Productos/InfoProducto/InfoProducto';
import Nav from './Nav/Nav';
import Contacto from './Contacto/Contacto';
import Home from './home/home';

// css

import './routes.css';

const auth = new Auth();

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}


export default class extends React.Component {
  constructor(){
    super()
    this.state={
      productos:[]
    }
    this.handlerproducts = this.handlerproducts.bind(this)
  }

  
  handlerproducts(productos){
      this.setState((st)=>{
        return ({
          productos
        })
      })
  }
  render(){
    
  return (
   
    <div className="routes">
      <BrowserRouter basename="/react-routing">
        <Header  auth={auth} />
        <Nav></Nav>
        <Switch>
            <Route path="/callback" render={(props) => {
              handleAuthentication(props);
              return <Callback {...props} /> 
            } } />

            <Route exact path="/"  render={ (props )=>( 
                <Home
                    auth ={auth}
                    {...props}
                /> 
              ) } />

                  
            <Route exact path="/productos" render={ (props ) => (
                    <Productos 
                    auth ={auth}
                    {...props}
                    handlerproducts={this.handlerproducts}
                    /> 
              ) } />

            <Route exact path="/producto/:productoid" render={ (props)=>{
                      let idProducto= props.match.params.productoid;
                      return(
                        <InfoProducto 
                        auth ={auth} {...props} producto={this.state.productos[idProducto]}

                        />
                      )
                    }
                  } />
            <Route exact path="/nosotros" component={Nosotros} />
            <Route exact={true}path="/contacto" component={Contacto} />
            <Route  component={NoFound} />
          </Switch>
      </BrowserRouter>
      
    </div>
      
      
  );
  }
}
