
import './App.css'
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import { ShopContextProvider } from './context/ShopContext'
import About from './pages/About'
import Feature from './pages/Feature'
import Menu from './pages/Menu'
import Booking from './pages/Booking'
import Cart from './components/Cart'

function App() {

  return (
    <>
    <ShopContextProvider>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/feature' element={<Feature/>}/>
      <Route path='/menu' element={<Menu/>}/>
      <Route path='/booking' element={<Booking/>}/>
      <Route path='/cart' element={<Cart/>}/>
      </Route>
     </Routes>
     </BrowserRouter>
     </ShopContextProvider>
    </>
  )
}

export default App
