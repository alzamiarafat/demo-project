import React from 'react';
import { Link, NavLink } from "react-router-dom";
import { useAuth } from '../../../../contexts/Auth'
import useStyles from './Style';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import { useSelector } from 'react-redux';


const SideBar = () => {

    // const { currentUser } = useAuth();
    // const name = currentUser ? JSON.stringify(currentUser.displayName) : null;
    const classes = useStyles();
    const user = useSelector(state => state.auth.user)


    return (
        <>
            <div className={classes.sideBar}>
                <h4>{user.displayName}</h4>
                <ButtonGroup orientation="vertical" aria-label="vertical outlined button group" variant="contained">
                    <Link to="/" target="_blank" className={`nav-link px-0 align-middle ${classes.item}`}>
                        <HomeIcon /> Home
                    </Link>
                </ButtonGroup>
                <ButtonGroup orientation="vertical" aria-label="vertical contained button group" variant="contained" >
                    <NavLink to={`/dashboard/${user.uid}`} style={({ isActive }) => ({ color: isActive ? 'white' : '' })} className={`nav-link px-0 align-middle ${classes.item}`} end>
                        <DashboardIcon />Dashboard
                    </NavLink>
                </ButtonGroup>
                <ButtonGroup orientation="vertical" aria-label="vertical contained button group" variant="contained" >
                    <NavLink to={`/dashboard/${user.uid}/user`} style={({ isActive }) => ({ color: isActive ? 'white' : '' })} className={`nav-link px-0 align-middle ${classes.item}`}>
                        <GroupIcon />Users</NavLink>
                </ButtonGroup>
                <ButtonGroup orientation="vertical" aria-label="vertical contained button group" variant="contained" >
                    <Link to="/test" className={`nav-link px-0 align-middle ${classes.item}`}>
                        <i className="fas fa-certificate"></i>
                        <span className="ms-1 d-none d-sm-inline">Test Item</span>
                    </Link>
                </ButtonGroup>
            </div>
        </>
        // <div className="col-auto col-md-3 col-xl-2 px-sm-2 bg-dark">
        //     <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
        //         <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        //             <span className="fs-5 d-none d-sm-inline">{JSON.parse(name)}</span>
        //         </a>
        //         <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
        //             <li className="nav-item">
        //                 <NavLink to="/" target="_blank" className="nav-link align-middle px-0"><i className="fas fa-home"></i> <span className="ms-1 d-none d-sm-inline">Home</span></NavLink>
        //             </li>
        //             <li>
        //                 <NavLink to="/dashboard" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
        //                     <i className="fas fa-tachometer"></i> <span className="ms-1 d-none d-sm-inline">Dashboard</span>
        //                 </NavLink>
        //             </li>
        //             <li className="nav-item">
        //                 <NavLink to="/users" className="nav-link align-middle px-0"><i className="fas fa-users"></i> <span className="ms-1 d-none d-sm-inline">Users</span></NavLink>
        //             </li>
        //             <li className="nav-item">
        //                 <Link to="/test" className="nav-link align-middle px-0"><i className="fas fa-certificate"></i> <span className="ms-1 d-none d-sm-inline">Test Item</span></Link>
        //             </li>
        //         </ul>
        //         <hr />
        //     </div>
        // </div>
    )
}

export default SideBar