import React from 'react';
import './ChatBox.css';
export default function ChatBox(props) {
    return props.reversed ? (
        <div
            className="chatbox-unit-content-wrapper"
            style={{ alignItems: 'flex-end' }}
        >
            <img
                className="avatar-speech-chatbox"
                src={process.env.PUBLIC_URL + props.avatar}
                alt="mini-avatar"
            />
            <div className="chatbox-unit-message">{props.message}</div>
        </div>
    ) : (
        <div className="chatbox-unit-content-wrapper">
            <img
                className="avatar-speech-chatbox"
                src={process.env.PUBLIC_URL + props.avatar}
                alt="mini-avatar"
            />
            <div className="chatbox-unit-message">{props.message}</div>
        </div>
    );
}
