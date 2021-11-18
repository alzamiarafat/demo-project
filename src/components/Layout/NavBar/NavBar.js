import React from 'react';
// import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "rgb(11 90 74)" }}>
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="#"><h4>Navbar</h4></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div id="navbarNav">
            <ul className="navbar-nav pull-right">
              <li className="nav-item">
                <Link to="/" className="nav-link text-white">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link text-white">Login</Link>
              </li>
              <li className="nav-item">
                <Link to="/register" className="nav-link text-white">Registration</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;