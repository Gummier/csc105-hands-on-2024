import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Gallery from './pages/Gallery'
function App() {

  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Gallery/>
    </>
  )
}

export default App
