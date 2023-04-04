import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Component/Header/Header'
import Shop from './Component/Shop/Shop'
import { Outlet } from 'react-router-dom'



function App() {
 

  return (
    <div className="App">

     <Header></Header>

      <Outlet></Outlet>

    

   </div>
  )
}

export default App
