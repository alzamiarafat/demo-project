import { useAuth } from '../../contexts/Auth';
// import SlideBar from '../Layout/SideBar/SideBar';
import SideBar from './Layout/SideBar/index';
import Header from './Layout/Header/index'
import { useNavigate } from "react-router-dom";

// import useStyles from './style';

function Dashboard() {

    const { logout } = useAuth();
    const history = useNavigate();

    function signOut() {
        logout().then(() => history('/login'));
    }

    return (
        <>
            <SideBar />
            <Header />
            {/* <div className={classes.contain}>
                <h4>page header</h4>
            </div> */}
        </>
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
