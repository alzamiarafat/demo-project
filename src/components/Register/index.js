import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from '../../contexts/Auth';
import { auth } from '../../firebase-config';
import { updateProfile } from '@firebase/auth';

import './Register.css';
// require('./Register.css');

function Register() {
    const history = useNavigate();
    const { signUp } = useAuth();

    function formSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        const email = data.get('email');
        const password = data.get('password');
        const username = data.get('username');

        if (data.get('password') === data.get('confirm_password')) {
            signUp(email, password).then(() => {
                alert("User has been created!");
                updateProfile(auth.currentUser, {
                    displayName: username,
                }).then(() => history('/dashboard')).catch((error)=>alert(error.message))
            }).catch((error) => alert(error.message))
        } else alert('not submitted')
    }

    return (
        <div className="reg-bg">
            <div className="registration-form">
                <form onSubmit={formSubmit}>
                    <div className="form-icon">
                        <span><i className="fas fa-user-plus"></i></span>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control item" name="username" placeholder="Username" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control item" name="email" placeholder="Email" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control item" name="phone_number" placeholder="Phone Number" />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control item" name="password" placeholder="Password" />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control item" name="confirm_password" placeholder="Confirm Password" />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-block create-account">Create Account</button>
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

export default Register