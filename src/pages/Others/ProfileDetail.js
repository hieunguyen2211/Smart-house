import React from 'react';
import NavigationBar from '../../components/Navigation/NavigationBar';
import { Icon, DatePicker } from 'antd';
import { FaSave } from 'react-icons/fa';
import { Route, Link } from 'react-router-dom';
import './ProfileDetail.css';
import moment from 'moment';
function ProfileDetail() {
    return (
        <div className="page-container">
            <div className="control-header-container header-profile profile-detail">
                <div
                    className="control-header-content"
                    style={{ marginTop: '1vh' }}
                >
                    <Route>
                        <Link to="/profile" style={{ height: '25px' }}>
                            <Icon
                                type="arrow-left"
                                className="icon"
                                style={{ color: 'white' }}
                            />
                        </Link>
                    </Route>

                    <span
                        style={{
                            textTransform: 'uppercase',
                            color: 'white'
                        }}
                    >
                        Profile
                    </span>
                    <FaSave className="icon" style={{ color: 'white' }} />
                </div>
                <div className="header-content-wrapper">
                    <img
                        className="profile-avatar avatar-full"
                        src={
                            process.env.PUBLIC_URL +
                            '/images/profile/avatar.jpg'
                        }
                        alt="avatar-full"
                    />
                    <div className="avatar-change-btn">
                        <Icon
                            type="camera"
                            style={{ color: 'white', fontSize: '3vh' }}
                        />
                    </div>
                </div>
            </div>
            <div className="profile-detail-content-wrapper">
                <form className="login-page-form">
                    <div className="login-page-inputs-container profile-detail-content">
                        <div className="login-page-input-wrapper">
                            <label className="login-page-label">
                                full name
                            </label>
                            <input
                                type="text"
                                name="username"
                                className="login-page-input"
                                // {...bindUsername}
                                value="Thomas Shelby"
                            />
                        </div>
                        <div className="login-page-input-wrapper">
                            <label className="login-page-label">email</label>
                            <input
                                type="email"
                                name="email"
                                className="login-page-input"
                                value="thomas.shelby@gmail.com"
                                // {...bindPassword}
                            />
                        </div>
                        <div className="login-page-input-wrapper">
                            <label className="login-page-label">phone</label>
                            <input
                                type="text"
                                name="text"
                                className="login-page-input"
                                // {...bindPassword}
                                value="0904887332"
                            />
                        </div>

                        <div className="login-page-input-wrapper">
                            <label className="login-page-label">
                                date of birth
                            </label>
                            <DatePicker
                                value={moment('22/05/1990', 'DD/MM/YYYY')}
                                format={'DD/MM/YYYY'}
                            />
                        </div>
                    </div>
                </form>
            </div>
            <NavigationBar />
        </div>
    );
}

export default ProfileDetail;
