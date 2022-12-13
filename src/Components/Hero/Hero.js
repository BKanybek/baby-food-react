import React from 'react';
import './Hero.css';
import Img1 from '../../Img/picture/main.png';

export const Hero = () => {
  return (
    <div className='home-container'>
    <img className='home-img' src={Img1} alt="main" />
  </div>
  )
}
