import React from 'react';
import './Hero.css';
import Img1 from '../../Img/hero-img/hero-img-test.jpg';
import Img2 from '../../Img/hero-img/hero-img2.jpg';
import Img3 from '../../Img/hero-img/img-hero.jpg';


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
        speed={2000}
        centeredSlides={true}
        autoplay={{
          delay: 500,
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
          <h1 className='hero-text' style={{color: 'white'}}>
            Baby Food
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className='hero-img'  
            src={Img2}
            alt='hero-img'
          />
          <h1 className='hero-text'>
            Baby Food
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className='hero-img' 
            src={Img3}
            alt='hero-img'
          />
          <h1 className='hero-text'>
            Baby Food
          </h1>
        </SwiperSlide>
      </Swiper>
    </div>
    </>
  )
}



