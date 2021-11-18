import React, { Component } from 'react'
import { useAuth } from '../../contexts/Auth';
import SlideBar from '../Layout/SideBar/SideBar';
import { useNavigate } from "react-router-dom";



function Dashboard() {

    const { logout } = useAuth();
    const history = useNavigate();

    function signOut(event) {
        logout().then(()=> history('/login'));
        
    }
    return (
        <div className="container-fluid">
            <div class="row bg-dark py-1 mt-auto">
                <div class="col-12 text-end">
                    <button className="d-inline btn btn-outline-danger" onClick={signOut}><i class="fas fa-power-off"></i></button>
                </div>
            </div>
            <div className="row flex-nowrap">
                <SlideBar />
                <div className="col py-3">
                    <h3>Welcome Dashboard</h3>
                    {/* <p>This is current user:{currentUser}</p> */}
                    <p className="lead">
                        An example 2-level sidebar with collasible menu items. The menu functions like an "accordion" where only a single
                        menu is be open at a time. While the sidebar itself is not toggle-able, it does responsively shrink in width on smaller screens.</p>
                </div>

            </div>
        </div>

    )
}

export default Dashboard
