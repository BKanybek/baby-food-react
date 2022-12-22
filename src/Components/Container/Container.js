import React from 'react';
import './Container.css';
import imgFood1 from '../../Img/container-img/img700px.jpg';
import imgFood2 from '../../Img/container-img/Heinz.jpg';
import imgFood3 from '../../Img/container-img/img-food3.png';
import imgFood4 from '../../Img/container-img/img700px.jpg';
import imgFood5 from '../../Img/container-img/img700px2.jpeg';
import imgFood6 from '../../Img/container-img/Heinz.jpg';
import imgFood7 from '../../Img/container-img/img-food3.png';

export const Container = () => {
  return (

    <div className='container-container'> 
      <div className='container-box'>
        <div className='box-1'><img className='box-img' src={imgFood1} alt='imgFood'/></div>
        <div className='box-2'><img className='box-img' src={imgFood2} alt='imgFood'/></div>
        <div className='box-3'><img className='box-img' src={imgFood3} alt='imgFood'/></div>
        <div className='box-4'><img className='box-img' src={imgFood4} alt='imgFood'/></div>
        <div className='box-5'><img className='box-img' src={imgFood5} alt='imgFood'/></div>
        <div className='box-6'><img className='box-img' src={imgFood6} alt='imgFood'/></div>
        <div className='box-7'><img className='box-img' src={imgFood7} alt='imgFood'/></div>
     </div>  
    </div>
  )
}
{/* <img src={imgFood}/> */}