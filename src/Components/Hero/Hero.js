import React from 'react';
import './Hero.css';
import Img1 from '../../Img/hero-img/food.jpg';
import Img2 from '../../Img/hero-img/hero-img2.jpg';
import Img3 from '../../Img/hero-img/Papmpersjpg.jpg';


import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

export const Hero = () => {
  return (
    <>
    <div className='hero-container'>
      <Swiper
        spaceBetween={2}
        speed={3000}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img 
              className='hero-img' 
              src={Img1}
              alt='hero-img'
          />
            <div className='hero-text-one'>
              <h1>
                Детское питание 
              </h1>
              <p className='text-hero'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              <button className='btn-hero'>Посмотреть</button>
             </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className='hero-img'  
            src={Img2}
            alt='hero-img'
          />
          <div className='hero-text-next'>
            <h1>
              Подгузники
            </h1>
            <p className='text-hero'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <button className='btn-hero'>Посмотреть</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className='hero-img' 
            src={Img3}
            alt='hero-img'
          />
          <div className='hero-text-last'>
            <h1>
              Baby Food
            </h1>
            <p className='text-hero'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            {/* <button className='btn-hero'>Посмотреть</button> */}
          </div>
        </SwiperSlide>
      </Swiper>
    </div>

    </>
  )
}



