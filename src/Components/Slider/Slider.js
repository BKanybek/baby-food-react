import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import './Slider.css';

export const Slider = () => {
  return (
    <div className='slider-container'>
      <Swiper
        slidesPerView={5}
        spaceBetween={20}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        grabCursor={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          520: {
            slidesPerView: 2,
          },
          900: {
            slidesPerView: 3,
          },
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
       
      >
        <SwiperSlide><div className='slider'>1</div></SwiperSlide>
        <SwiperSlide><div className='slider'>2</div></SwiperSlide>
        <SwiperSlide><div className='slider'>3</div></SwiperSlide>
        <SwiperSlide><div className='slider'>4</div></SwiperSlide>
        <SwiperSlide><div className='slider'>5</div></SwiperSlide>
        <SwiperSlide><div className='slider'>6</div></SwiperSlide>
        <SwiperSlide><div className='slider'>7</div></SwiperSlide>
        <SwiperSlide><div className='slider'>8</div></SwiperSlide>
        <SwiperSlide><div className='slider'>10</div></SwiperSlide>
        <SwiperSlide><div className='slider'>11</div></SwiperSlide>
        <SwiperSlide><div className='slider'>12</div></SwiperSlide>
        <SwiperSlide><div className='slider'>13</div></SwiperSlide>
        <SwiperSlide><div className='slider'>14</div></SwiperSlide>
        <SwiperSlide><div className='slider'>15</div></SwiperSlide>
        <SwiperSlide><div className='slider'>16</div></SwiperSlide>
        <SwiperSlide><div className='slider'>17</div></SwiperSlide>
        <SwiperSlide><div className='slider'>18</div></SwiperSlide>
        <SwiperSlide><div className='slider'>19</div></SwiperSlide>
        <SwiperSlide><div className='slider'>20</div></SwiperSlide>
        <SwiperSlide><div className='slider'>21</div></SwiperSlide>
      </Swiper>
    </div>
  )
}
