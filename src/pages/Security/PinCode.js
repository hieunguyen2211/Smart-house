import React, { useState } from 'react';
import ControlHeader from '../../components/Header/Control';
import NavigationBar from '../../components/Navigation/NavigationBar';
import './PinCode.css';
import { menu } from './PinCode.config';

import Announcement from '../../components/Modal/Announcement';

function PinCode() {
    const [password, setPassword] = useState([]);
    const [visible, setVisible] = useState(false);
    const [message, setMessage] = useState('');

    const passwordActive = [];
    const passwordDisabled = [];
    for (let i = 0; i < password.length; i++) {
        passwordActive.push(
            <div className="pinCode-password-circle-active" key={i}></div>
        );
    }

    for (let i = 0; i < 4 - password.length; i++) {
        passwordDisabled.push(
            <div className="pinCode-password-circle-disabled" key={i}></div>
        );
    }

    const handleEnterPassword = () => {
        if (password.length === 4) {
            setVisible(true);
            let passwordString = '';
            password.map(e => (passwordString += e));
            passwordString === '1234'
                ? setMessage('Correctly, check your door.')
                : setMessage('Incorrectly, try again.');
        }
    };

    const handleToggleModal = () => {
        setVisible(false);
        setPassword([]);
    };

    console.log(password);
    return (
        <div className="page-container">
            {message === 'Correctly, check your door.' ? (
                <Announcement
                    visible={visible}
                    handleToggleModal={handleToggleModal}
                    styleMessage={{ color: 'green', fontSize: '3vh' }}
                    message={message}
                />
            ) : (
                <Announcement
                    visible={visible}
                    handleToggleModal={handleToggleModal}
                    styleMessage={{ color: 'red', fontSize: '3vh' }}
                    message={message}
                />
            )}

            <ControlHeader title="security" path="/security" />
            <div className="page-content-wrapper">
                <div className="pincode-content-wrapper">
                    <div>
                        <span style={{ fontSize: '3vh' }}>
                            Enter your 4-digit pin code
                        </span>
                    </div>
                    <div className="pinCode-password-wrapper">
                        {passwordActive.length !== 0 && passwordActive}
                        {passwordDisabled !== 0 && passwordDisabled}
                    </div>
                    <div className="pincode-password-input-container">
                        {menu.map(row => (
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between'
                                }}
                                key={row.id}
                            >
                                {row.col.map(e =>
                                    e.type === 'enter' ? (
                                        <div
                                            className="pincode-input-wrapper"
                                            key={e.id}
                                            onClick={handleEnterPassword}
                                        >
                                            {e.icon ? (
                                                e.icon
                                            ) : (
                                                <span className="pincode-input-digit">
                                                    {e.content}
                                                </span>
                                            )}
                                        </div>
                                    ) : e.type === 'backspace' ? (
                                        <div
                                            className="pincode-input-wrapper"
                                            key={e.id}
                                            onClick={() => {
                                                let newPassword = [...password];
                                                newPassword.length !== 0 &&
                                                    newPassword.pop();
                                                setPassword(newPassword);
                                            }}
                                        >
                                            {e.icon ? (
                                                e.icon
                                            ) : (
                                                <span className="pincode-input-digit">
                                                    {e.content}
                                                </span>
                                            )}
                                        </div>
                                    ) : (
                                        <div
                                            className="pincode-input-wrapper"
                                            onClick={() => {
                                                password.length < 4 &&
                                                    setPassword([
                                                        ...password,
                                                        e.content
                                                    ]);
                                            }}
                                            key={e.id}
                                        >
                                            {e.icon ? (
                                                e.icon
                                            ) : (
                                                <span className="pincode-input-digit">
                                                    {e.content}
                                                </span>
                                            )}
                                        </div>
                                    )
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <NavigationBar />
        </div>
    );
}

export default PinCode;
