import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Wishlist from './pages/Wishlist'
import Cart from './pages/Cart'
import Footer from './components/Footer'
import View from './pages/View'
import Pnf1 from './pages/Pnf1'



function App() {
  

  return (
    <>
     <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/wishlist" element={<Wishlist/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
      <Route path="/:id/view" element={<View/>}></Route>
      <Route path="/*" element={<Pnf1/>}></Route>
     </Routes>
     <Footer/>
    </>
  )
}

export default App
