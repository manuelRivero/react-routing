import React from 'react'
import './nosotros.css';
export default () => {
  return (
            <div className="section-container">
                
                <div className="nosotros-text contenido-container">
                    <div className="line-title">
                        <h2>Sobre nosotros</h2>
                    </div>
                
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vestibulum sed justo non vulputate.
                    Pellentesque condimentum, justo a pulvinar interdum, diam justo vestibulum quam, et blandit sapien mi vitae nisl. Etiam vel dignissim nulla, et condimentum dolor. 
                </p>
                </div>
                
                <div className="nosotros-list contenido-container">
                    <div className="item">
                        <div className="icon">
                            <i class="fas fa-dollar-sign"></i>
                        </div>
                        
                        <h3>Consectetur adipiscing elit.</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    
                    <div className="item">
                        <div className="icon">
                            <i class="fas fa-truck"></i>
                        </div>
                        <h3>Consectetur adipiscing elit.</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    
                    <div className="item">
                    <div className="icon">
                        <i class="fas fa-globe-americas"></i>
                    </div>
                    
                    <h3> Lorem ipsum</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    </div>
                </div>
            </div>
  )
}
