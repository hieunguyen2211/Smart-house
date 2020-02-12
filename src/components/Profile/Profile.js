import React from 'react';
import './Profile.css';
import { Icon } from 'antd';
function Profile(props) {
    return (
        <div className="profile-card-container" style={props.style}>
            <div className="avatar-container">
                <img
                    src={process.env.PUBLIC_URL + '/images/profile/avatar.jpg'}
                    alt="profile"
                    style={{ width: 'auto', height: 'inherit' }}
                />
            </div>
            <div className="profile-card-content">
                <p style={{ fontSize: '18px', fontWeight: 'bold' }}>
                    Hello, Thomas Shelby
                </p>
                <p style={{ fontSize: '12px' }}>
                    <Icon type="environment" style={{ paddingRight: '4px' }} />
                    23 Hill Street, Da Nang City
                </p>
            </div>
        </div>
    );
}

export default Profile;
