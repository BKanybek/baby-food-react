import React from 'react';
import './Container.css';
import imgFood1 from '../../Img/container-img/img-food3.png';
import imgFood2 from '../../Img/container-img/Heinz.jpg';
import imgFood3 from '../../Img/container-img/img-food3.png';
import imgFood4 from '../../Img/container-img/food-5.jpg';
import imgFood5 from '../../Img/container-img/food-4.jpg';
import imgFood6 from '../../Img/container-img/Heinz.jpg';
// import imgFood7 from '../../Img/container-img/img-food3.png';


export const Container = () => {
  return (
    <div className='container-container'> 
      <h1>Lorem Ipsum</h1>
      <div className='container-box'>
        <div className='box'>
          <img className='box-img' src={imgFood1} alt='imgFood'/>
          <div className='box__text'>
            <h2>Новинка</h2>
            <a href='/' className='box-btn'>Посмотреть</a>
          </div>
        </div>
        <div className='box'>
          <img className='box-img' src={imgFood2} alt='imgFood'/>
          <div className='box__text'>
            <h2>Lorem</h2>
            <a href='/' className='box-btn'>Посмотреть</a>
          </div>
        </div>
        <div className='box'>
          <img className='box-img' src={imgFood3} alt='imgFood'/>
          <div className='box__text'>
            <h2>Lorem Ipsum is simply </h2>
            <a href='/' className='box-btn'>Посмотреть</a>
          </div>
        </div>
        <div className='box'>
          <img className='box-img' src={imgFood4} alt='imgFood'/>
          <div className='box__text'>
            <h2>Lorem Ipsum is simply </h2>
            <a href='/' className='box-btn'>Посмотреть</a>
          </div>
        </div>
        <div className='box'>
          <img className='box-img' src={imgFood5} alt='imgFood'/>
          <div className='box__text'>
            <h2>Lorem Ipsum is simply </h2>
            <a href='/' className='box-btn'>Посмотреть</a>
          </div>
        </div>
        <div className='box'>
          <img className='box-img' src={imgFood6} alt='imgFood'/>
          <div className='box__text'>
            <h2>Lorem Ipsum is simply </h2>
            <a href='/' className='box-btn'>Посмотреть</a>
          </div>
        </div>
      </div>  
    </div>
  )
}