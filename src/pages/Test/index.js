import React from 'react';
import './Test.css';

export default function Test() {
    const urlBackground = process.env.PUBLIC_URL + '/images/background/image';
    return (
        <div className="page-init-container">
            <div className="image">
                <div className="image-overlay"></div>
            </div>
        </div>
    );
}
