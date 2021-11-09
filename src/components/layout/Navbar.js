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
                <nav class="navbar navbar-expand-lg navbar-light bg-success">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">Navbar</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            {/* <Router> */}
                            <ul class="navbar-nav pull-right">
                                <li class="nav-item">
                                    <Router>
                                        <Link exact to="/" class="nav-link">Home</Link>
                                    </Router>
                                    {/* <a class="nav-link active" aria-current="page" href="#">Home</a> */}
                                </li>
                                <li class="nav-item">
                                    <Router>
                                        <Link to="/login" class="nav-link">Login</Link>
                                    </Router>
                                    {/* <a class="nav-link" href="#">Features</a> */}
                                </li>
                                <li class="nav-item">
                                    <Router>
                                        <Link to="/registration" class="nav-link">Registration</Link>
                                    </Router>
                                    {/* <a class="nav-link" href="#">Pricing</a> */}
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
