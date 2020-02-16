import React from 'react';
import ControlHeader from '../../components/Header/Control';
import NavigationBar from '../../components/Navigation/NavigationBar';
import { Link } from 'react-router-dom';
import './ChangePassword.css';
function ChangePassword() {
    return (
        <div className="page-container">
            <ControlHeader title="profile" path="/profile" colorText="white" />
            <div className="page-content-wrapper">
                <div className="change-password-form-wrapper">
                    <form
                        className="login-page-form"
                        style={{ height: '48vh' }}
                    >
                        <div className="login-page-inputs-container change-password-form">
                            <div className="login-page-input-wrapper">
                                <label className="login-page-label">
                                    current password
                                </label>
                                <input
                                    type="password"
                                    name="currentPassword"
                                    className="login-page-input"
                                    // {...bindUsername}
                                />
                            </div>
                            <div className="login-page-input-wrapper">
                                <label className="login-page-label">
                                    new password
                                </label>
                                <input
                                    type="password"
                                    name="newPassword"
                                    className="login-page-input"
                                    // {...bindPassword}
                                />
                            </div>
                            <div className="login-page-input-wrapper">
                                <label className="login-page-label">
                                    confirm password
                                </label>
                                <input
                                    type="password"
                                    name="confirmNewPassword"
                                    className="login-page-input"
                                    // {...bindPassword}
                                />
                            </div>

                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'flex-end',
                                    marginTop: '1vh'
                                }}
                            >
                                <div className="form-btn-wrapper">
                                    <Link to="/profile">
                                        <button className="btn-back">
                                            Back
                                        </button>
                                    </Link>

                                    <button className="btn-confirm">
                                        Confirm
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <NavigationBar />
        </div>
    );
}

export default ChangePassword;
