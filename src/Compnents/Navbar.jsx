import React from 'react';
import { FaShoppingBag, FaUser, FaShoppingCart } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const cartItemCount = 3;

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-5">
      {/* Logo on the left */}
      <a className="navbar-brand d-flex align-items-center" href="#">
        <FaShoppingBag className="me-2" />
        <span className="fw-bold">MART</span>
      </a>

      {/* Toggler for mobile (optional) */}
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

      {/* Right-side links and icons */}
      <div className="collapse navbar-collapse justify-content-end" id="navbarContent">
        <ul className="navbar-nav align-items-center me-4">
          <li className="nav-item mx-3">
            <a className="nav-link fw-semibold" href="#home">Home</a>
          </li>
          <li className="nav-item mx-3">
            <a className="nav-link fw-semibold" href="#shop">Shop</a>
          </li>
          <li className="nav-item mx-3">
            <a className="nav-link fw-semibold" href="#cart">Cart</a>
          </li>
        </ul>

        {/* User and Cart Icons */}
        <div className="d-flex align-items-center">
          <FaUser className="me-4 fs-5" />
          <div className="position-relative">
            <FaShoppingCart className="fs-5" />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
              {cartItemCount}
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
