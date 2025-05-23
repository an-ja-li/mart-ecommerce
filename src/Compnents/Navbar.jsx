import React from 'react';
import { Link } from 'react-router-dom';
import { IoBag } from "react-icons/io5";
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import './Navbar.css';

const Navbar = ({ cartItems }) => {
  const safeCartItems = cartItems || [];

  // ✅ Calculate total quantity
const cartItemCount = safeCartItems.length;

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-4">
      <div className="container-fluid">
        {/* Logo */}
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <IoBag className="me-2 fs-4" />
          <span className="fw-bold text-dark">MART</span>
        </Link>

        {/* Toggler for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Links */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarContent">
          <ul className="navbar-nav align-items-center me-3">
            <li className="nav-item mx-2">
              <Link to="/" className="nav-link fw-semibold">Home</Link>
            </li>
            <li className="nav-item mx-2">
              <Link to="/product" className="nav-link fw-semibold">Shop</Link>
            </li>
            <li className="nav-item mx-2">
              <Link to="/cart" className="nav-link fw-semibold">Cart</Link>
            </li>
          </ul>

          {/* Icons */}
          <div className="d-flex align-items-center">
            <FaUser className="me-4 fs-5 text-dark" />
            <div className="position-relative">
              <Link to="/cart" className="text-decoration-none text-dark">
                <FaShoppingCart className="fs-5" />
                {cartItemCount > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
                    {cartItemCount}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
