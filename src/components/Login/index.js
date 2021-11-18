import React from 'react';
import logo from '../../logo-1.png';
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from '../../contexts/Auth';

function Login() {
    const history = useNavigate();
    require('./Login.css');
    const { login } = useAuth();
    function formSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        const email = data.get('email');
        const password = data.get('password');

        login(email, password).then(() => history('/dashboard')).catch((error) => alert(error.message))
    }

    return (
        <div>
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
                                    {/* <Link to="/dashboard" className="btn login-btn">Submit</Link> */}
                                </form>
                            </div>
                            <div className="row">
                                <p>Don't have an account? <Link to="/register">Register Here</Link></p>
                            </div>
                            <div>
                                <h5>Sign up with social media</h5>
                                <div className="social-icons">
                                    <a href="#"><i className="fab fa-facebook-f" title="Facebook"></i></a>
                                    <a href="#"><i className="fab fa-google" title="Google"></i></a>
                                    <a href="#"><i className="fab fa-twitter" title="Twitter"></i></a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Login
