// import Home from '../pages/Home'
import { useEffect } from 'react';
import './App.css'
import AppRoutes from './Routes/routes';
import Aos from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    Aos.refresh();
  })
  return(
    <>
      {/* <Home/> */}
      <AppRoutes/>
    </>
  )
}

export default App;