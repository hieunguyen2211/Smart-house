import React, { useState } from 'react';
import { useInput } from '../../assets/hooks/input-hook';
import { Redirect } from 'react-router-dom';
import './Login.css';
function Login() {
    const urlLogo = process.env.PUBLIC_URL + '/logos/filled.svg';
    const [redirect, setRedirect] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [circleLoading, setCircleLoading] = useState(false);
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const {
        value: username,
        bind: bindUsername,
        reset: resetUsername
    } = useInput('');
    const {
        value: password,
        bind: bindPassword,
        reset: resetPassword
    } = useInput('');

    const handleSubmitLogin = e => {
        e.preventDefault();
        setCircleLoading(true);
        setShowErrorMessage(false);
        let messenger = '';
        if (username === '' && password === '')
            messenger = 'Username and password are invalid.';
        else if (username === '' || password === '') {
            if (password === '') messenger = 'Password is invalid.';
            else {
                messenger = 'Username is invalid.';
            }
        } else {
            if (username === 'admin' && password === '123123') {
                messenger = '';
                setTimeout(() => {
                    setRedirect(true);
                    setCircleLoading(false);
                }, 500);
            } else {
                //Status 401
                messenger = 'Username or password is incorrect.';
            }
        }
        if (messenger !== '') {
            setShowErrorMessage(true);
            setCircleLoading(false);
            setErrorMessage(messenger);
        }
    };

    const renderRedirect = () => {
        if (redirect) {
            return <Redirect to="/home" />;
        }
    };

    return (
        <div className="login-page-background-image">
            <div className="page-container-secondary">
                <div>
                    <img src={urlLogo} className="login-page-logo" alt="logo" />
                </div>

                <div className="login-page-container">
                    {showErrorMessage && (
                        <div
                            className="error-message-alert alert alert-danger alert-dismissible fade show "
                            role="alert"
                        >
                            <div className="text-error">{errorMessage}</div>
                            <button
                                type="button"
                                onClick={() => {
                                    setShowErrorMessage(false);
                                }}
                                className="close"
                                aria-label=""
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                    )}
                    <form
                        className="login-page-form"
                        onSubmit={handleSubmitLogin}
                    >
                        <div className="login-page-inputs-container">
                            <div className="login-page-input-wrapper">
                                <label className="login-page-label">
                                    username
                                </label>
                                <input
                                    type="text"
                                    name="username"
                                    className="login-page-input"
                                    {...bindUsername}
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
                                    {...bindPassword}
                                />
                            </div>
                        </div>
                        {renderRedirect()}
                        <div className="login-page-button-container">
                            <button
                                className="btn-login-form"
                                disabled={circleLoading}
                                type="submit"
                            >
                                {!circleLoading ? (
                                    <span>Login</span>
                                ) : (
                                    <div
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}
                                    >
                                        <span
                                            className="spinner-border spinner-border-sm"
                                            role="status"
                                            aria-hidden="true"
                                        />
                                        <span style={{ paddingLeft: '4px' }}>
                                            Loading...
                                        </span>
                                    </div>
                                )}
                            </button>
                            <span style={{ fontSize: '2vh' }}>
                                Don't have an account?
                                <span
                                    style={{
                                        color: '#f63',
                                        fontWeight: 'bold',
                                        marginLeft: '1vh'
                                    }}
                                >
                                    Sign up
                                </span>
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
