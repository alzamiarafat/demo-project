import React, { Component } from 'react';
import ReactDom from 'react-dom';
// import { Link, Link as Router } from 'react-router-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Login from './Login';
import Home from './Home';
import Register from './Register';

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-success">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Navbar</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            {/* <Router> */}
                            <ul className="navbar-nav pull-right">
                                <li className="nav-item">
                                    <Router>
                                        <Link exact to="/" className="nav-link">Home</Link>
                                    </Router>
                                    {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                                </li>
                                <li className="nav-item">
                                    <Router>
                                        <Link to="/login" className="nav-link">Login</Link>
                                    </Router>
                                    {/* <a className="nav-link" href="#">Features</a> */}
                                </li>
                                <li className="nav-item">
                                    <Router>
                                        <Link to="/register" className="nav-link">Registration</Link>
                                    </Router>
                                    {/* <a className="nav-link" href="#">Pricing</a> */}
                                </li>
                            </ul>
                            {/* <Router>
                                <Route exact path="/" component={Home} />
                                <Route path="/login" component={Login} />
                                <Route path="/registration" component={Register} />
                            </Router> */}
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar
