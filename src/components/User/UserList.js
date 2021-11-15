import React, { Component, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SideBar from '../Layout/SideBar/SideBar';
import axios from "axios";

function UserList() {
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`https://6190abddf6bf450017484c7d.mockapi.io/fakeData`)
            .then((response) => {
                setAPIData(response.data);
            })
    }, [])
    return (
        <div className="container-fluid">
            <div className="row flex-nowrap">
                <SideBar />
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
                                    <table className="table table-bordered mt-4">
                                        <thead>
                                            <tr className="text-center">
                                                <th>SL</th>
                                                <th>Username</th>
                                                <th>Email</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {APIData.map((user, index) => (
                                                <tr className="text-center" key={user.id}>
                                                    <td>{index+1}</td>
                                                    <td>{user.username}</td>
                                                    <td>{user.email}</td>
                                                    <td>
                                                        <Link to={user.id} className="btn btn-outline-warning"><i className="fas fa-eye"></i></Link> &nbsp;
                                                        <Link to={user.id} className="btn btn-outline-success"><i className="fas fa-edit"></i></Link>  &nbsp;
                                                        <Link to={user.id} className="btn btn-outline-danger"><i className="fas fa-trash"></i></Link>
                                                    </td>
                                                </tr>
                                            ))}
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


// function Users() {
//     const [APIData, setAPIData] = useState([]);
//     useEffect(() => {
//         axios.get(`https://6190abddf6bf450017484c7d.mockapi.io/fakeData`)
//             .then((response) => {
//                 console.log(response.data)
//                 setAPIData(response.data);
//             })
//     }, [])
// }


// const [APIData, setAPIData] = useState([]);
// useEffect(() => {
//     axios.get(`https://6190abddf6bf450017484c7d.mockapi.io/fakeData`)
//         .then((response) => {
//             console.log(response.data)
//             // setAPIData(response.data);
//         })
// }, [])

// export class UserList extends Component {
//     // constructor(props) {
//     //     super(props)
//     // };
//     render() {

//     }
// }



// export default UserList
