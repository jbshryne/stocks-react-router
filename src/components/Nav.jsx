import { Link } from "react-router-dom";
import React from "react";

const Nav = () => {
  return (
    <header>
      <Link to="/">
        <big className="nav-item"><span className="istocks">iStocks</span></big>
      </Link>
      <Link className="nav-item" to="/about">
        <small>About Us</small>
      </Link>
      <Link className="nav-item" to="/stocks">
        <small>Track Your Stocks</small>
      </Link>
    </header>
  );
};

export default Nav;
