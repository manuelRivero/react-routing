import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Nosotros from './Nosotros/Nosotros';
import NoFound from './NoFound';
import Productos from './Productos/Productos';
import InfoProducto from './Productos/InfoProducto/InfoProducto';
import Nav from './Nav/Nav';
import Contacto from './Contacto/Contacto';
import Footer from './Footer/Footer';

export default class Router extends Component {
 
  render() {
    const {productos} = this.props;
    return (
      <div>
        <BrowserRouter>
            <Nav></Nav>
            <Switch>
                <Route exact path="/"
                  render={
                    ()=>( <Productos productos={productos} /> )
                  } 
                />
                <Route exact path="/productos" render={
                  () => (<Productos productos={productos} /> )
                } />
                <Route exact path="/producto/:productoid"
                  render={
                    (props)=>{
                      let idProducto= props.location.pathname.replace('/producto/', '');
                      return(
                        <InfoProducto producto={productos[idProducto]} />
                      )
                    }
                  } 
                />
                <Route exact path="/nosotros" component={Nosotros} />
                <Route exact path="/contacto" component={Contacto} />
                <Route  component={NoFound} />
            </Switch>
            <Footer></Footer>
        </BrowserRouter>
      </div>
    )
  }
}
