import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home'
import ProductsList from '../../pages/ProductsList'
import ProductDetail from '../../pages/ProductDetail'
const AppRoutes = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route element={<Home/>} path='/'></Route>
        <Route element={<ProductsList/>} path='/products'/>
        <Route element={<ProductDetail/>} path='/product/:title'/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default AppRoutes
