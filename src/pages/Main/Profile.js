import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProfileRequest } from '../../redux/profile/profileAction';
import { Icon } from 'antd';
import { Route, Link } from 'react-router-dom';
import NavigationBar from '../../components/Navigation/NavigationBar';
import MenuRec from '../../components/Menu/MenuRec';
import { ProfileIcon } from '../../images/index.js';
import './Profile.css';

import SyncLoader from 'react-spinners/SyncLoader';

const styleIcon = {
    width: '12vw'
};
const data = [
    {
        id: 1,
        icon: {
            url: ProfileIcon.houseIcon,
            style: styleIcon
        },
        title: 'My home',
        path: '/rooms'
    },
    {
        id: 2,
        icon: {
            url: ProfileIcon.profileIcon,
            style: styleIcon
        },
        title: 'My profile',
        path: '/profile/detail'
    },
    {
        id: 3,
        icon: {
            url: ProfileIcon.passwordIcon,
            style: styleIcon
        },
        title: 'Change password',
        path: '/profile/changePassword'
    },
    {
        id: 4,
        icon: {
            url: ProfileIcon.signOutIcon,
            style: styleIcon
        },
        title: 'Sign out',
        path: '/'
    }
];

export default function Profile() {
    const profileData = useSelector(state => state.user);
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(true);
    useEffect(() => {
        dispatch(fetchProfileRequest());
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, [dispatch]);

    const [modes, setModes] = useState([
        {
            id: 1,
            title: 'Off Energy',
            icon: {
                selected:
                    process.env.PUBLIC_URL +
                    '/icons/modes/active/offPowerActive.svg',
                unselected:
                    process.env.PUBLIC_URL +
                    '/icons/modes/disabled/offPowerDisabled.svg'
            },
            selected: true
        },
        {
            id: 2,
            title: 'Left Home',
            icon: {
                selected:
                    process.env.PUBLIC_URL +
                    '/icons/modes/active/leftHomeActive.svg',
                unselected:
                    process.env.PUBLIC_URL +
                    '/icons/modes/disabled/leftHomeDisabled.svg'
            },
            selected: false
        },
        {
            id: 3,
            title: 'Came Home',
            icon: {
                selected:
                    process.env.PUBLIC_URL +
                    '/icons/modes/active/cameHomeActive.svg',
                unselected:
                    process.env.PUBLIC_URL +
                    '/icons/modes/disabled/cameHomeDisabled.svg'
            },
            selected: false
        }
    ]);

    const handleSelectMode = id => {
        setModes(modes =>
            modes.map(e => {
                if (e.id === id) e.selected = true;
                else if (e.selected === true) e.selected = false;
                return e;
            })
        );
    };

    // return loading ? (
    //     <div className="page-container" style={{ background: 'white' }}>
    //         <div className="page-content-wrapper">
    //             <SyncLoader size={20} color={'#3a7bd5'} loading={loading} />
    //         </div>
    //         <NavigationBar />
    //     </div>
    // ) : (
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
                        <p className="profile-title">
                            {profileData.data.fullName}
                        </p>
                    </div>
                    <Link to="/profile/detail">
                        <Icon type="edit" className="profile-edit-icon" />
                    </Link>
                </div>
            </div>
            <div className="profile-content-wrapper">
                <div className="scrolling-wrapper">
                    {modes.map(e => (
                        <div
                            className="mode-mini-card"
                            key={e.id}
                            onClick={() => handleSelectMode(e.id)}
                        >
                            <div
                                className={
                                    e.selected
                                        ? 'mode-icon-wrapper mode-active'
                                        : 'mode-icon-wrapper mode-disabled'
                                }
                            >
                                <img
                                    src={
                                        e.selected
                                            ? e.icon.selected
                                            : e.icon.unselected
                                    }
                                    alt="mode-icon"
                                    className="mode-icon"
                                />
                            </div>
                            <p className="mode-title">{e.title}</p>
                        </div>
                    ))}
                </div>
                <MenuRec data={data} height="10vh" textWidth="62vw" />
            </div>
            <NavigationBar />
        </div>
    );
}
