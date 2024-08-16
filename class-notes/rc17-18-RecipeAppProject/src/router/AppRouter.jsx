import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Login from '../pages/login/Login'
import Home from '../pages/home/Home'
import PrivateRouter from "./PrivateRouter"
import Details from '../pages/details/Details'

const AppRouter = () => {
  return (
    <Router>
      {/* navbar */}
      <Routes>
        <Route path="/" element={<Login/>} />
        
        <Route path="/home" element={<PrivateRouter/>}>
          <Route path="/home" element={<Home/>}/>
        </Route>
        <Route path="/details" element={<Details/>}/>

      </Routes>
    </Router>
  )
}

export default AppRouter