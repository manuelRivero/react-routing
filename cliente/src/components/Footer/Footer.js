import React from 'react';
import  logo from './../../assets/logo.png';

import  './footer.css';

export default () => {
  return (
    <footer className="footer">
        <div className="footer-c-1 ">
            <div className="footer-item">
            <h2> Lorem ipsum </h2>
            <i className="fab fa-facebook icon"></i>
            <i className="fab fa-instagram icon"></i>  
            <i className="fab fa-twitter icon"></i>
            </div>
            <div className="footer-item">
            <h2> Lorem ipsum </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vestibulum sed justo non vulputate.
                 Pellentesque condimentum.</p>
            </div>
        </div>
        
        <div className="footer-c-2">
            <span className="divider"></span>
            <div className="footer-item ">
            <img className="logo" src={logo} alt="logo"/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vestibulum sed justo non vulputate.
                    Pellentesque condimentum, justo a pulvinar interdum, diam justo vestibulum quam, et blandit sapien mi vitae nisl.
                    Etiam vel dignissim nulla, et condimentum dolor. In sagittis semper risus ut laoreet. Phasellus ac aliquet justo
                </p>
            </div>
        </div>
    </footer>
  )
}
