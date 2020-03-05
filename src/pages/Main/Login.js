import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loginRequest } from '../../redux/authenticate/authenticateAction';
import { useInput } from '../../assets/hooks/input-hook';
import { Redirect, Link } from 'react-router-dom';
import './Login.css';
function Login() {
    const urlLogo = process.env.PUBLIC_URL + '/logos/filled.svg';
    const [errorMessage, setErrorMessage] = useState('');
    const [circleLoading, setCircleLoading] = useState(false);
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const {
        value: username,
        bind: bindUsername
        // reset: resetUsername
    } = useInput('');
    const {
        value: password,
        bind: bindPassword
        // reset: resetPassword
    } = useInput('');
    const authData = useSelector(state => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        if (authData.error) {
            setShowErrorMessage(true);
            setCircleLoading(false);
            setErrorMessage('Username or password is incorrect.');
        }
    }, [authData]);

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
            const body = { username: username, password: password };
            setTimeout(() => {
                dispatch(loginRequest(body));
            }, 500);
        }
        if (messenger !== '') {
            setShowErrorMessage(true);
            setCircleLoading(false);
            setErrorMessage(messenger);
        }
    };

    const renderRedirect = () => {
        if (localStorage.getItem('access_token')) {
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
                                <Link to="/register">
                                    <span
                                        style={{
                                            color: 'rgb(10, 176, 19)',
                                            fontWeight: 'bold',
                                            marginLeft: '1vh'
                                        }}
                                    >
                                        Sign up
                                    </span>
                                </Link>
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
