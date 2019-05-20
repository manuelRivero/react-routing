import React from 'react'
import './nosotros.css';
export default () => {
  return (
            <div className="nosotros-container">
                
                <div className="nosotros-item text-1 ">
                <h1 className="title-fade">Sobre nosotros</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vestibulum sed justo non vulputate.
                    Pellentesque condimentum, justo a pulvinar interdum, diam justo vestibulum quam, et blandit sapien mi vitae nisl. Etiam vel dignissim nulla, et condimentum dolor. 
                </p>
                </div>
                <div className="nosotros-item text-2">
                        <div className="nosotros-sub-item">
                            <div className="icon">
                            <i class="fas fa-dollar-sign"></i>
                            </div>
                            
                            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vestibulum sed justo non vulputate.
                                Pellentesque condimentum.
                            </h3>
                        </div>
                        
                        <div className="nosotros-sub-item">
                        <div className="icon">
                            <i class="fas fa-truck"></i>
                        </div>
                        
                        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vestibulum sed justo non vulputate.
                                Pellentesque condimentum.
                            </h3>   
                        </div>
                        
                        <div className="nosotros-sub-item">
                        <div className="icon">
                            <i class="fas fa-globe-americas"></i>
                        </div>
                        
                        <h3> Lorem ipsum</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            </p>
                        </div>
                </div>
            </div>
  )
}
