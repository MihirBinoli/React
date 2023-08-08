import React from 'react';
import { Browserouter, Routes, Route } from "react-router-dom";
import ProductClass from './ProductClass';
import About from './About'
import NavLayout from './NavLayout';

export default function RouteConfig() {
  return (
    <Browserouter>
        <Routes>
            <Route path='/' element ={<NavLayout />} />
            <Route path='/product' element ={<ProductClass />} />
            <Route path='/about' element ={<About />} />
        </Routes>
    </Browserouter>
  );
}
