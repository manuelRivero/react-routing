import React from 'react';
import  './footer.css';

export default () => {
  return (
    <footer className="footer">
        <div className="footer-c-1 flex">
            <div className="footer-item">
            <h2> Lorem ipsum </h2>
            <i class="fab fa-facebook icon"></i>
            <i class="fab fa-instagram icon"></i>  
            <i class="fab fa-twitter icon"></i>
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
            <img className="logo" src="./img/logo.png" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vestibulum sed justo non vulputate.
                    Pellentesque condimentum, justo a pulvinar interdum, diam justo vestibulum quam, et blandit sapien mi vitae nisl.
                    Etiam vel dignissim nulla, et condimentum dolor. In sagittis semper risus ut laoreet. Phasellus ac aliquet justo
                </p>
            </div>
        </div>
    </footer>
  )
}
