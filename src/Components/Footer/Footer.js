import React from 'react';
import footerImg from '../../Img/logo.png' 
import './Footer.css';

export const Footer = () => {
  return (
    <div>
        <div className='footer'>
          <div className='footer-container'>
            {/* <div className='footer-logo-container'>
              <img className='footer-logo' src={footerImg} alt='img'/>
            </div> */}
            <div className='footer-info'>
              <div className='footer-info-nav'>
                

              </div>
              <div className='footer-info-contacts'>
                <p>Контактные данные:</p>

              </div>
              <div className='footer-info-social'>
                <p>Мы в социальных сетях:</p>

              </div>
            </div>
          </div>
        </div>
    </div>
    
  )
}
