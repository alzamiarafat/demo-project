import React, { Component } from 'react';
import SideBar from "../Layout/SideBar/SideBar";


export class UserCreate extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row flex-nowrap">
                    <SideBar />
                    <div className="col py-3">
                        <form className="card" onSubmit={this.formSubmit}>
                            <div className="card-body">
                                <legend>Create User</legend>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputUsername" className="form-label">User Name</label>
                                    <input type="text" className="form-control" name="username" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" name="email" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-control" name="password" />
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserCreate
