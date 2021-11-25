import { useAuth } from '../../contexts/Auth';
// import SlideBar from '../Layout/SideBar/SideBar';
import SideBar from './Layout/SideBar/index';
import Header from './Layout/Header/index'
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import { createTheme, ThemeProvider, CssBaseline } from '@material-ui/core';
import Body from './Layout/Body/index'
import useStyles, { theme } from './style';



const Dashboard = () => {

    const { currentUser, logout } = useAuth();
    const classes = useStyles();
    const history = useNavigate();
    const location = useLocation();

    function signOut() {
        logout().then(() => history('/login'));
    }

    return (
        <ThemeProvider theme={theme}>
            <SideBar />
            <div className={classes.contain}>
                <Header />
                {location.pathname === `/dashboard/${currentUser.uid}` ? <Body /> : <Outlet />}
            </div>
            <CssBaseline />
            {/* <div className={classes.contain}>
                <h4>page header</h4>
            </div> */}
        </ThemeProvider>
        // <div className="container-fluid">
        //     <div className="row bg-dark py-1 mt-auto">
        //         <div className="col-12 text-end">
        //             <button className="d-inline btn btn-outline-danger" onClick={signOut}><i class="fas fa-power-off"></i></button>
        //         </div>
        //     </div>
        //     <div className="row flex-nowrap">
        //         <SlideBar />
        //         <div className="col py-3">
        //             <h3>Welcome Dashboard</h3>
        //             {/* <p>This is current user:{currentUser}</p> */}
        //             <p className="lead">
        //                 An example 2-level sidebar with collasible menu items. The menu functions like an "accordion" where only a single
        //                 menu is be open at a time. While the sidebar itself is not toggle-able, it does responsively shrink in width on smaller screens.</p>
        //         </div>
        //     </div>
        // </div>
    )
}

export default Dashboard
