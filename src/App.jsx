import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Navbar from "./Compnents/Navbar";
// import Footer from "./Compnents/Footer";
// import HomeSlider from "./Compnents/HomeSlider";
import Home from './pages/Home';
import Product from './pages/Product';
// import ProductDetail from './pages/ProductDetail';
// import Cart from './pages/Cart';
// import Login from './pages/Login';

export default function App() {
  return (
    <Router>
      <Navbar />
      {/* <HomeSlider/> */}
      {/* <Footer/> */}
      <Routes>
        
        <Route path="/"element={<Home />} />
        <Route path="product" element={<Product />} />
        {/* <Route path="products/:id" element={<ProductDetail />} />
        <Route path="cart" element={<Cart />} />
        <Route path="login" element={<Login />} />  */}
       
      </Routes>
    </Router>
  );
}
