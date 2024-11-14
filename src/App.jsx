import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Footer from './Footer/Footer'
import Nav from './Nav/Nav'

function App (){
  return(
    <>
    <Nav/>
    <Outlet/>
    <Footer/>
  
  </>
  )
}
export default App
