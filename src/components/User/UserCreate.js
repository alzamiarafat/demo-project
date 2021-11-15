import React, { Component } from 'react';
import SideBar from "../Layout/SideBar/SideBar";
import axios from "axios";
import swal from 'sweetalert';
import { useNavigate } from "react-router-dom";

function UserCreate() {
    const history = useNavigate();

    return (
        <div className="container-fluid">
            <div className="row flex-nowrap">
                <SideBar />
                <div className="col py-3">
                    <form className="card" onSubmit={formSubmit}>
                        <div className="card-body">
                            <legend>Create User</legend>
                            <div className="mb-3">
                                <label htmlFor="exampleInputUsername" className="form-label">User Name</label>
                                <input type="text" className="form-control" name="username" placeholder="Enter Username" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" name="email" placeholder="Enter Email Address" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" name="password" placeholder="Enter Password" />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )

    function formSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        const email = data.get('email');
        const username = data.get('username');
        const password = data.get('password');
    
        axios.post(`https://6190abddf6bf450017484c7d.mockapi.io/fakeData`, { username, email, password }).then(() => {
            swal("Good job!", "You clicked the button!", "success").then(() => {
                event.target.reset();
                history('/users')
            });
        })
    }
}


export default UserCreate
