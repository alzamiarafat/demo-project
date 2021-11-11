import React from 'react';
// import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-success">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div id="navbarNav">
            <ul className="navbar-nav pull-right">
              <li className="nav-item">
                  <Link exact to="/" className="nav-link">Home</Link>
                {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
              </li>
              <li className="nav-item">
                  <Link to="/login" className="nav-link">Login</Link>
                {/* <a className="nav-link" href="#">Features</a> */}
              </li>
              <li className="nav-item">
                  <Link to="/register" className="nav-link">Registration</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;