import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SideBar from '../Layout/SideBar/SideBar';

export class UserList extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row flex-nowrap">
                    <SideBar />
                    <div className="col py-3">
                        <h3>User List</h3>
                        <Link to="create" className="nav-link align-middle px-0"><i className="fas fa-certificate"></i> <span className="ms-1 d-none d-sm-inline">Test Item</span></Link>
                    </div>
                </div>
            </div>

        )
    }
}

export default UserList
