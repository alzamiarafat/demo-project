import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import SideBar from '../Layout/SideBar/SideBar';
import SideBar from '../Dashboard/Layout/SideBar/index'
import Header from '../Dashboard/Layout/Header/index'
import Loader from '../Layout/Loader';
import swal from 'sweetalert';
import axios from "axios";

function UserList() {
    const [APIData, setAPIData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`https://6190abddf6bf450017484c7d.mockapi.io/fakeData`).then((response) => {
            setAPIData(response.data);
            setLoading(false);
        })
    }, []);

    const onDelete = (id) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            axios.delete(`https://6190abddf6bf450017484c7d.mockapi.io/fakeData/${id}`)
            if (willDelete) {
                swal("User has been deleted successfully!", {
                    icon: "success",
                }).then(() => {
                    window.location.reload(true);
                });
            }
        });
    }

    return (

        <div className="container-fluid">
            <div className="row flex-nowrap">
                <div className="col py-3">
                    <h3>User List</h3>
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-12 text-end">
                                    <Link to="create" className="btn btn-outline-primary"><i className="fas fa-plus"></i> <span>Add New</span></Link>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <table className="table table-bordered mt-4 position-relative">
                                        <thead>
                                            <tr className="text-center">
                                                <th>SL</th>
                                                <th>Username</th>
                                                <th>Email</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                !loading ? APIData.map(
                                                    (user, index) => (
                                                        <tr className="text-center" key={user.id}>
                                                            <td>{index + 1}</td>
                                                            <td>{user.username}</td>
                                                            <td>{user.email}</td>
                                                            <td>
                                                                <Link to={user.id} className="btn btn-outline-warning"><i className="fas fa-eye"></i></Link> &nbsp;
                                                                <Link to={user.id} className="btn btn-outline-success"><i className="fas fa-edit"></i></Link>  &nbsp;
                                                                <button className="btn btn-outline-danger" onClick={() => { onDelete(user.id) }}><i className="fas fa-trash"></i></button>
                                                            </td>
                                                        </tr>
                                                    )) : <Loader />
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default UserList