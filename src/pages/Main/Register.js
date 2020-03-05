import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
function Register() {
    return (
        <div className="login-page-background-image">
            <div className="page-container-secondary">
                <div className="register-page-container">
                    <form
                        className="register-form"
                        onSubmit={() => console.log('Register')}
                    >
                        <div className="register-form-inputs-container">
                            <div className="login-page-input-wrapper">
                                <label className="login-page-label">
                                    username
                                </label>
                                <input
                                    type="text"
                                    name="username"
                                    className="login-page-input"
                                    // {...bindUsername}
                                />
                            </div>
                            <div className="login-page-input-wrapper">
                                <label className="login-page-label">
                                    full name
                                </label>
                                <input
                                    type="text"
                                    name="fullname"
                                    className="login-page-input"
                                    // {...bindUsername}
                                />
                            </div>
                            <div className="login-page-input-wrapper">
                                <label className="login-page-label">
                                    email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    className="login-page-input"
                                    // {...bindUsername}
                                />
                            </div>
                            <div className="login-page-input-wrapper">
                                <label className="login-page-label">
                                    phone
                                </label>
                                <input
                                    type="text"
                                    name="phone"
                                    className="login-page-input"
                                    // {...bindUsername}
                                />
                            </div>
                            <div className="login-page-input-wrapper">
                                <label className="login-page-label">
                                    password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    className="login-page-input"
                                    // {...bindPassword}
                                />
                            </div>
                            <div className="login-page-input-wrapper">
                                <label className="login-page-label">
                                    re-enter password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    className="login-page-input"
                                    // {...bindPassword}
                                />
                            </div>
                            <div className="register-form-button-container">
                                <button
                                    className="btn-login-form"
                                    type="submit"
                                >
                                    <span>Submit</span>
                                </button>
                                <span style={{ fontSize: '2vh' }}>
                                    Already have an account?
                                    <Link to="/">
                                        <span
                                            style={{
                                                color: '#0EBEF5',
                                                fontWeight: 'bold',
                                                marginLeft: '1vh'
                                            }}
                                        >
                                            Log in
                                        </span>
                                    </Link>
                                </span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;
