import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ProImg1 from '../../Img/product_img/10728-350x350.jpg';
import ProImg2 from '../../Img/product_img/cabrita.jpg';
import ProImg3 from '../../Img/product_img/hainze.jpg';
import ProImg4 from '../../Img/product_img/hugies.jpg';
import ProImg5 from '../../Img/product_img/kasha.jpg';
import ProImg6 from '../../Img/product_img/kitty.jpg';
import ProImg7 from '../../Img/product_img/Nan.jpg';
import './Slider.css';

export const Slider = () => {
  return (
    <div className='slider-container'>
      <div>
        <a href='/' className='slider-btn'>Посмотреть все</a>
      </div>  
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
          430: {
            slidesPerView: 1,
          },
          520: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 5,
          }
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
       
      >
        <SwiperSlide>
          <div className='product'>
            <div className='main_product'>
                <div className='images'>
                  <img src={ProImg1} alt='img'/>
                </div>
                <h2>Lorem Ipsum</h2>
                <p>500 сом</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='product'>
            <div className='main_product'>
                <div className='images'>
                  <img src={ProImg2} alt='img'/>
                </div>
                <h2>Lorem Ipsum</h2>
                <p>500 сом</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='product'>
            <div className='main_product'>
                <div className='images'>
                  <img src={ProImg3} alt='img'/>
                </div>
                <h2>Lorem Ipsum</h2>
                <p>500 сом</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='product'>
            <div className='main_product'>
                <div className='images'>
                  <img src={ProImg4} alt='img'/>
                </div>
                <h2>Lorem Ipsum</h2>
                <p>500 сом</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='product'>
            <div className='main_product'>
                <div className='images'>
                  <img src={ProImg5} alt='img'/>
                </div>
                <h2>Lorem Ipsum</h2>
                <p>500 сом</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='product'>
            <div className='main_product'>
                <div className='images'>
                  <img src={ProImg6} alt='img'/>
                </div>
                <h2>Lorem Ipsum</h2>
                <p>500 сом</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='product'>
            <div className='main_product'>
                <div className='images'>
                  <img src={ProImg7} alt='img'/>
                </div>
                <h2>Lorem Ipsum</h2>
                <p>500 сом</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
