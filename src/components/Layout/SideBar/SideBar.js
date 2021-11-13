import React, { Component } from 'react';
import { Link } from "react-router-dom";

export class SideBar extends Component {
    render() {
        return (
            <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                    <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                        <span class="fs-5 d-none d-sm-inline">Menu</span>
                    </a>
                    <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                        <li class="nav-item">
                            <Link to="/" className="nav-link align-middle px-0"><i class="fas fa-home"></i> <span class="ms-1 d-none d-sm-inline">Home</span></Link>
                        </li>
                        <li>
                            <a href="/dashboard" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                                <i class="fas fa-tachometer"></i> <span class="ms-1 d-none d-sm-inline">Dashboard</span> </a>
                        </li>
                        <li class="nav-item">
                            <Link to="/test" className="nav-link align-middle px-0"><i class="fas fa-certificate"></i> <span class="ms-1 d-none d-sm-inline">Test Item</span></Link>
                        </li>
                    </ul>
                    <hr />
                </div>
            </div>
        )
    }
}

export default SideBar
