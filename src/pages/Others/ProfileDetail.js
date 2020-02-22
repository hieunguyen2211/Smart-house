import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProfileRequest } from '../../redux/profile/profileAction';
import NavigationBar from '../../components/Navigation/NavigationBar';
import { Icon } from 'antd';
import { FaSave } from 'react-icons/fa';
import { Route, Link } from 'react-router-dom';
import './ProfileDetail.css';
function ProfileDetail() {
    const profileData = useSelector(state => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProfileRequest());
    }, [dispatch]);
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
                            <label className="login-page-label">username</label>
                            <input
                                type="text"
                                name="username"
                                className="login-page-input"
                                // {...bindUsername}
                                value={profileData.data.username}
                                disabled
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
                                value={profileData.data.fullName}
                            />
                        </div>
                        <div className="login-page-input-wrapper">
                            <label className="login-page-label">email</label>
                            <input
                                type="email"
                                name="email"
                                className="login-page-input"
                                value={profileData.data.email}
                                // {...bindPassword}
                            />
                        </div>
                        <div className="login-page-input-wrapper">
                            <label className="login-page-label">phone</label>
                            <input
                                type="text"
                                name="phone"
                                className="login-page-input"
                                // {...bindPassword}
                                value={profileData.data.phoneNumber}
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
