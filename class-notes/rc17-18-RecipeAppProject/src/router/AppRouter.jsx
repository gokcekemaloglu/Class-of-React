import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Login from '../pages/login/Login'
import Home from '../pages/home/Home'
import PrivateRouter from "./PrivateRouter"
import Details from '../pages/details/Details'
import Navbar from '../components/navbar/Navbar'
import About from '../pages/about/About'
import Footer from '../components/footer/Footer'
import NotFound from '../pages/errorPage/NotFound'

const AppRouter = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Login/>} />
        
        <Route path="/home" element={<PrivateRouter/>}>
          <Route path="/home" element={<Home/>}/>
        </Route>
        <Route path="/details" element={<Details/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default AppRouter