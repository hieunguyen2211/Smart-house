import React, { useState } from 'react';
import { Icon } from 'antd';
import { Route, Link } from 'react-router-dom';
import NavigationBar from '../../components/Navigation/NavigationBar';
import MenuRec from '../../components/Menu/MenuRec';
import './Profile.css';
export default function Profile() {
    const data = [
        {
            id: 1,
            icon: {
                url: process.env.PUBLIC_URL + '/icons/main/Profile/house.svg',
                style: {
                    width: '12vw',
                    margin: '3vw'
                }
            },
            title: 'My home',
            path: '/home'
        },
        {
            id: 2,
            icon: {
                url: process.env.PUBLIC_URL + '/icons/main/Profile/profile.svg',
                style: {
                    width: '12vw',
                    margin: '3vw'
                }
            },
            title: 'My profile',
            path: '/profile/detail'
        },
        {
            id: 3,
            icon: {
                url:
                    process.env.PUBLIC_URL + '/icons/main/Profile/password.svg',
                style: {
                    width: '12vw',
                    margin: '3vw'
                }
            },
            title: 'Change password',
            path: '/profile/changePassword'
        },
        {
            id: 4,
            icon: {
                url: process.env.PUBLIC_URL + '/icons/main/Profile/signOut.svg',
                style: {
                    width: '12vw',
                    margin: '3vw'
                }
            },
            title: 'Sign out',
            path: '/'
        }
    ];

    const [modes, setModes] = useState([
        {
            id: 1,
            title: 'Off Energy',
            iconURL: {
                active:
                    process.env.PUBLIC_URL +
                    '/icons/modes/active/offPowerActive.svg',
                disabled:
                    process.env.PUBLIC_URL +
                    '/icons/modes/disabled/offPowerDisabled.svg'
            },
            active: true
        },
        {
            id: 2,
            title: 'Left Home',
            iconURL: {
                active:
                    process.env.PUBLIC_URL +
                    '/icons/modes/active/leftHomeActive.svg',
                disabled:
                    process.env.PUBLIC_URL +
                    '/icons/modes/disabled/leftHomeDisabled.svg'
            },
            active: false
        },
        {
            id: 3,
            title: 'Came Home',
            iconURL: {
                active:
                    process.env.PUBLIC_URL +
                    '/icons/modes/active/cameHomeActive.svg',
                disabled:
                    process.env.PUBLIC_URL +
                    '/icons/modes/disabled/cameHomeDisabled.svg'
            },
            active: false
        }
    ]);

    const handleSelectMode = id => {
        // let a = modes;
        // a.forEach(e => {
        //     if (e.id === id) e.active = true;
        //     else if (e.active === true) e.active = false;
        // });
        // console.log(a);
        setModes(modes =>
            modes.map(e => {
                if (e.id === id) e.active = true;
                else if (e.active === true) e.active = false;
                return e;
            })
        );
    };

    return (
        <div className="page-container">
            <div className="control-header-container header-profile">
                <div
                    className="control-header-content"
                    style={{ marginTop: '1vh' }}
                >
                    <Route>
                        <Link to="/home" style={{ height: '25px' }}>
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
                    <Icon
                        type="more"
                        className="icon"
                        style={{ color: 'white' }}
                    />
                </div>
                <div className="cardRec-content card-profile">
                    <img
                        className="profile-avatar"
                        src={
                            process.env.PUBLIC_URL +
                            '/images/profile/avatar.jpg'
                        }
                        alt="mini-avatar"
                    />

                    <div className="cardRec-title-wrapper">
                        <p className="profile-subtitle">Hello</p>
                        <p className="profile-title">Thomas Shelby</p>
                    </div>
                    <Link to="/profile/detail">
                        <Icon type="edit" className="profile-edit-icon" />
                    </Link>
                </div>
            </div>
            <div className="profile-content-wrapper">
                <div className="scrolling-wrapper">
                    {modes.map(e =>
                        e.active ? (
                            <div className="mode-mini-card" id={e.id}>
                                <div className="mode-icon-wrapper mode-active">
                                    <img
                                        src={e.iconURL.active}
                                        alt="mode-icon"
                                        className="mode-icon"
                                    />
                                </div>
                                <p className="mode-title">{e.title}</p>
                            </div>
                        ) : (
                            <div
                                className="mode-mini-card"
                                id={e.id}
                                onClick={() => handleSelectMode(e.id)}
                            >
                                <div className="mode-icon-wrapper mode-disabled">
                                    <img
                                        src={e.iconURL.disabled}
                                        alt="mode-icon"
                                        className="mode-icon"
                                    />
                                </div>
                                <p className="mode-title">{e.title}</p>
                            </div>
                        )
                    )}
                </div>
                <MenuRec data={data} />
            </div>

            <NavigationBar />
        </div>
    );
}
