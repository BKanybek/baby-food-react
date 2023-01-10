import React from 'react';
// import { About } from '../About/About';
import { Container } from '../Container/Container';
import { Footer } from '../Footer/Footer';
import { Hero } from '../Hero/Hero';
import { NavMenu } from '../Nav/NavMenu';
import { Slider } from '../Slider/Slider';

import './Home.css';

export const Home = () => {
  return (
    <>
      <NavMenu/>
      <Hero/>
      {/* <About/> */}
      <Container/>
      <Slider/>
      <Footer/>
    </>
  )
}
