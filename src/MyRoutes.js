import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Components/Home/Home';
import { Navbar } from './Components/Navbar/Navbar';
import { Products } from './Components/Products/Products';

export const MyRoutes = () => {
  return (
    <BrowserRouter>
    <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='products' element={<Products/>} />
          
            {/* <Route path='/' element={<Navbar/>} /> */}
        </Routes>
    </BrowserRouter>
  )
}
