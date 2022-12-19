import React from 'react';
import './Container.css';
import imgFood from '../../Img/container-img/img700px.jpg';

export const Container = () => {
  return (

    <div className='container-container'> 
      <div className='container-box'>
        <div className='box-1'><img className='box-img' src={imgFood} alt='imgFood'/></div>
        <div className='box-2'><img className='box-img' src={imgFood} alt='imgFood'/></div>
        <div className='box-3'><img className='box-img' src={imgFood} alt='imgFood'/></div>
        <div className='box-4'><img className='box-img' src={imgFood} alt='imgFood'/></div>
        <div className='box-5'><img className='box-img' src={imgFood} alt='imgFood'/></div>
        <div className='box-6'><img className='box-img' src={imgFood} alt='imgFood'/></div>
        <div className='box-7'><img className='box-img' src={imgFood} alt='imgFood'/></div>
     </div>  
    </div>
  )
}
{/* <img src={imgFood}/> */}