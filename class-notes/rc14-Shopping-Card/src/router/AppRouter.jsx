import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar"
import Main from "../pages/Main"
import NewProduct from '../pages/NewProduct';
import ProductList from '../pages/ProductList';
import About from '../pages/About';


const AppRouter = () => {
  return <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Main/>} />
      <Route path="/new-product" element={<NewProduct/>} />
      <Route path="/products" element={<ProductList/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/" element={<Main/>} />

    </Routes>
  </Router>;
}

export default AppRouter