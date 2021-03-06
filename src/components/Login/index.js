import React from 'react';
import logo from '../../logo-1.png';
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from '../../contexts/Auth';
import { useDispatch } from 'react-redux';
import { LoginAction } from '../../redux/authAction';

function Login() {

    const history = useNavigate();
    const location = useLocation();
    require('./Login.css');
    const { login, signInGoogle, signInFB } = useAuth();
    const dispatch = useDispatch();

    function formSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        const email = data.get('email');
        const password = data.get('password');

        login(email, password).then((response) => {
            dispatch(LoginAction(response.user));
            history(`/dashboard/${response.user.uid}`);
        }).catch((error) => alert(error.message))
    }

    function loginWithGoogle() {
        signInGoogle().then((response) => history(`/dashboard/${response.user.uid}`)).catch((error) => alert(error.message))
    }

    return (
        <>
            <div className="container-fluid">
                <div className="row main-content text-center">
                    <div className="col-md-4 text-center company__info">
                        <Link to="/">
                            <img src={logo} className="company__logo" width="200" height="200" alt="logo" />
                        </Link>
                    </div>
                    <div className="col-md-8 col-xs-12 col-sm-12 login_form ">
                        <div className="container-fluid">
                            <div className="row mt-3">
                                <h2>Log In</h2>
                            </div>
                            <div className="row">
                                <form className="form-group" onSubmit={formSubmit}>
                                    <div className="row">
                                        <input type="text" name="email" className="form__input" placeholder="Email" />
                                    </div>
                                    <div className="row">
                                        <input type="password" name="password" className="form__input" placeholder="Password" />
                                    </div>
                                    <div>
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            Remember me
                                        </label>
                                    </div>
                                    <input type="submit" value="Submit" className="btn login-btn" />
                                </form>
                            </div>
                            <div className="row">
                                <p>Don't have an account? <Link to="/register">Register Here</Link></p>
                            </div>
                            <div>
                                <h5>Sign up with social media</h5>
                                <div className="social-icons">
                                    <a href="#" onClick={signInFB}><i className="fab fa-facebook-f" title="Facebook"></i></a>
                                    <a href="#" onClick={loginWithGoogle}><i className="fab fa-google" title="Google"></i></a>
                                    <a href="#"><i className="fab fa-twitter" title="Twitter"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
