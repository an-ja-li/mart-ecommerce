import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import Navbar from "./Compnents/Navbar";
import ProductId from './pages/ProductId';
import Home from './pages/Home';
import Product from './pages/Product';
import Cart from './pages/Cart';



function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <Router>
      {/* ✅ Navbar visible on all pages */}
      <Navbar cartItems={cartItems} />

   

      <Routes>
        <Route path="/" element={<Home  cartItems={cartItems} setCartItems={setCartItems} />} />

        {/* ✅ Pass cart state to Product listing page */}
        <Route
          path="/product"
          element={<Product cartItems={cartItems} setCartItems={setCartItems} />}
        />

        {/* ✅ Product details page */}
        <Route
          path="/product/:id"
          element={<ProductId cartItems={cartItems} setCartItems={setCartItems} />}
        />

        {/* ✅ Cart page */}
        <Route
          path="/cart"
          element={<Cart cartItems={cartItems} setCartItems={setCartItems} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
