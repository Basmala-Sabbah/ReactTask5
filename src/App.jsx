import React from 'react'
import Navbar from './Components/navbar/Navbar'
import Footer from './Components/footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home'
import Users from './Components/users/users'
import Create from './Components/users/Create'
import Details from './Components/users/Details'

export default function App() {
  return (
    <>
   
  
     <Navbar/>
     <Routes>
     <Route path='/' element={<Home/>} />
     <Route path='/users' element={<Users/>} />
     <Route path='/create' element={<Create/>} />
     <Route path='/users/:id' element={<Details/>}></Route>
     <Route path='*' element={<h2>Page not found </h2>} />
     </Routes>
    <Footer/> 
   
    
    
    </>
  )
}
