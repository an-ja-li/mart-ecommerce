import React, { useState } from 'react';
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
import Cart from './pages/Cart';

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <Router>
      {/* ✅ Pass cartItems to Navbar */}
      <Navbar cartItems={cartItems} />

      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* ✅ Pass cart state to Product page */}
        <Route
          path="/product"
          element={<Product cartItems={cartItems} setCartItems={setCartItems} />}
        />
        
        {/* ✅ Cart already receives props correctly */}
        <Route
          path="/cart"
          element={<Cart cartItems={cartItems} setCartItems={setCartItems} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
