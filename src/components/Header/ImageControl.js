import React from 'react';
import ProfileCard from '../Profile/Profile';
import ControlHeader from './Control';
function Profile(props) {
    const cardInside = props.cardInside && (
        <div>
            <ProfileCard
                style={{
                    top: '80%',
                    left: '6%'
                }}
            />
        </div>
    );
    return (
        <div>
            <ControlHeader
                title={props.title}
                path={props.path}
                colorText={props.colorText}
            />
            <div className="header-title">
                <img
                    className="header-title-image"
                    src={process.env.PUBLIC_URL + props.imageUrl}
                    alt="background-house"
                />
                <div className="header-title-image-overlay"></div>
            </div>
        </div>
    );
}

export default Profile;
