import React from 'react';
import './Temperature.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Temperature(props) {
    const address =
        props.address === 'Turan' ? 'da nang city' : props.address + ' city';
    return (
        <div className="temperature-container">
            <div style={{ display: 'flex' }}>
                <FontAwesomeIcon
                    icon={props.icon}
                    style={{ fontSize: '5vh' }}
                />
            </div>

            <p className="condition">{props.condition}</p>
            <p className="address">{address}</p>
            <p className="degree">{props.degree} °C</p>
        </div>
    );
}

export default Temperature;
