import React from 'react';
import { Navbar } from '../Navbar/Navbar';
import Img1 from '../../Img/picture/main.png';
import './Home.css';

export const Home = () => {
  return (
    <>
      <Navbar/>
        <div className='home-container'>
          <img className='home-img' src={Img1} alt="main" />
        </div>
    </>
  )
}
