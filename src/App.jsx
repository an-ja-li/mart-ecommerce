import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Navbar from "./Compnents/Navbar";
import Footer from "./Compnents/Footer";
// import Home from './pages/Home';
// import Products from './pages/Products';
// import ProductDetail from './pages/ProductDetail';
// import Cart from './pages/Cart';
// import Login from './pages/Login';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Footer/>
      <Routes>
        {/* 
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<ProductDetail />} />
        <Route path="cart" element={<Cart />} />
        <Route path="login" element={<Login />} /> 
        */}
      </Routes>
    </Router>
  );
}
