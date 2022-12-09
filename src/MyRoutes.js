import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Components/Home/Home';
import { Navbar } from './Components/Navbar/Navbar';

export const MyRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Navbar/>} />
            <Route path='Home' element={<Home/>} />
        </Routes>
    </BrowserRouter>
  )
}
