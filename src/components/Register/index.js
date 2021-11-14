import React, { Component } from 'react';
import { Link } from "react-router-dom";

export class Register extends Component {
    render() {
        require('./Register.css')
        return (
            <div className="reg-bg">
                <div className="registration-form">
                    <form>
                        <div className="form-icon">
                            <span><i className="fas fa-user-plus"></i></span>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control item" id="username" placeholder="Username" />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control item" id="password" placeholder="Password" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control item" id="email" placeholder="Email" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control item" id="phone-number" placeholder="Phone Number" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control item" id="birth-date" placeholder="Birth Date" />
                        </div>
                        <div className="form-group">
                            <button type="button" className="btn btn-block create-account">Create Account</button>
                        </div>
                        <p href="#" className="mb-0 pull-right">Already have an account? <Link to="/login">Login</Link></p>

                    </form>
                    <div className="social-media">
                        <h5>Sign up with social media</h5>
                        <div className="social-icons">
                            <a href="#"><i className="fab fa-facebook-f" title="Facebook"></i></a>
                            <a href="#"><i className="fab fa-google" title="Google"></i></a>
                            <a href="#"><i className="fab fa-twitter" title="Twitter"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register
