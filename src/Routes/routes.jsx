import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Home from '../../pages/Home'
import ProductsList from '../../pages/ProductsList'
import ProductDetail from '../../pages/ProductDetail'
import Cart from '../components/Product/cart'
import AppNavbar from '../components/Navbar/navbar'
import Footer from '../components/Footer/footer'

const AppRoutes = () => {
  const location = useLocation();
  return (
    <>
      {/* <BrowserRouter> */}
        {location.pathname !== "/products" && <AppNavbar />}
        {/* <AppNavbar/> */}
        <Routes>
          <Route element={<Home />} path='/'></Route>
          <Route element={<ProductsList />} path='/products' />
          <Route element={<ProductDetail />} path='/product/:title' />
          <Route element={<Cart />} path='/cart' />
        </Routes>
        <Footer />
      {/* </BrowserRouter> */}
    </>
  )
}

export default AppRoutes;