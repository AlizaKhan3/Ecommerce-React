import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home'
import ProductsList from '../../pages/ProductsList'
import ProductDetail from '../../pages/ProductDetail'
import Cart from '../components/Product/cart'
import AppNavbar from '../components/Navbar/navbar'
const AppRoutes = () => {
  
  return (
    <>
    <BrowserRouter>
    <AppNavbar/>
    <Routes>
        <Route element={<Home/>} path='/'></Route>
        <Route element={<ProductsList/>} path='/products'/>
        <Route element={<ProductDetail/>} path='/product/:title'/>
        <Route element={<Cart/>} path='/cart'/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default AppRoutes
