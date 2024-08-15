import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Login from '../pages/login/Login'
import Home from '../pages/home/Home'
import PrivateRouter from "./PrivateRouter"

const AppRouter = () => {
  return (
    <Router>
      {/* navbar */}
      <Routes>
        <Route path="/" element={<Login/>} />
        
        <Route path="/home" element={<PrivateRouter/>}>
          <Route path="/home" element={<Home/>}/>
        </Route>

      </Routes>
    </Router>
  )
}

export default AppRouter