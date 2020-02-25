import React from 'react';
import ControlHeader from '../../components/Header/Control';
import NavigationBar from '../../components/Navigation/NavigationBar';
import MenuRec from '../../components/Menu/MenuRec';
import './Security.css';

function Security() {
    const styleIcon = {
        width: '13vw',
        margin: '4vw'
    };
    const data = [
        {
            id: 1,
            icon: {
                url: process.env.PUBLIC_URL + '/icons/security/faceRecog.svg',
                style: styleIcon
            },
            title: 'Face Recognition',
            subTitle: 'Use your face to unlock the main door',
            path: '/security/faceRecog'
        },
        {
            id: 2,
            icon: {
                url: process.env.PUBLIC_URL + '/icons/security/pincode.svg',
                style: styleIcon
            },

            title: 'Pin Code',
            subTitle: 'Use pin code to unlock the main door',
            path: '/security/pinCode'
        },
        {
            id: 3,
            icon: {
                url:
                    process.env.PUBLIC_URL +
                    '/icons/security/changePinCode.svg',
                style: styleIcon
            },
            title: 'Change Pin Code',
            subTitle: 'Change your pin code'
        },
        {
            id: 4,
            icon: {
                url:
                    process.env.PUBLIC_URL + '/icons/security/resetPinCode.svg',
                style: styleIcon
            },
            title: 'Reset Pin Code',
            subTitle: 'Reset your PIN code if you forgot'
        },
        {
            id: 5,
            icon: {
                url:
                    process.env.PUBLIC_URL + '/icons/security/notification.svg',
                style: styleIcon
            },
            title: 'Notification',
            subTitle: 'Notifications about your visitors ',
            subComponent: (
                <button className="security-notification-badge">10</button>
            )
        }
    ];
    return (
        <div className="page-container">
            <ControlHeader title="security" path="/home" />
            <div className="page-content-wrapper">
                <MenuRec data={data} />
            </div>
            <NavigationBar />
        </div>
    );
}

export default Security;
