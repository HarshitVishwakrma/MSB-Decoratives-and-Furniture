import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Shop from './pages/Shop'
import LandingPage from './pages/LandingPage'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetailsPage'
import Navbar from './components/Navbar'


function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}></Route>
        <Route path='/shop' element={<Shop/>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        <Route path='/products/:productId' element={<><Navbar/><ProductDetails></ProductDetails></>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
