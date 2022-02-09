import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar">
      <div className="nav">
        <h3 className="logo">EcommerceSite</h3>
      </div>
      <ul className="nav">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/orders" className="nav-link">
          My Orders
        </Link>
        <Link to="/cart" className="nav-link">
          Cart
        </Link>
      </ul>
    </div>
  );
};

export default Header;
