import React from "react";
import { IoBag } from "react-icons/io5";

function Footer() {
  return (
    <footer  style={{ backgroundColor: "#0d2a52" }}className=" text-white pt-5 pb-4">
      <div className="container">
        <div className="row">

          {/* Column 1 */}
          <div className="col-md-2 mb-4">
            <h5 className="fw-bold mb-3">
              <IoBag /> Mart
            </h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Auctor libero id et, in gravida. Sit diam duis mauris nulla cursus. 
              Erat et lectus vel ut sollicitudin elit at amet.
            </p>
          </div>

          {/* Column 2 */}
          <div className="col-md-3 mb-4">
            <h5>About Us</h5>
            <ul className="list-unstyled">
              <li>Careers</li>
              <li>Our Stores</li>
              <li>Our Cares</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="col-md-3 mb-4">
            <h5>Customer Care</h5>
            <ul className="list-unstyled">
              <li>Help Center</li>
              <li>How to Buy</li>
              <li>Track Your Order</li>
              <li>Corporate & Bulk Purchasing</li>
              <li>Returns & Refunds</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="col-md-3 mb-4">
            <h5>Contact Us</h5>
            <address>
              70 Washington Square South, New York, NY 10012, United States
            </address>
            <p>Email: example@gmail.com</p>
            <p>Phone: +1 1123 456 789</p>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
