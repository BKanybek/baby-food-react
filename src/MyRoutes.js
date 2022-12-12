import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Components/Home/Home';
import { Navbar } from './Components/Navbar/Navbar';

export const MyRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>} />
            {/* <Route path='/' element={<Navbar/>} /> */}
        </Routes>
    </BrowserRouter>
  )
}
