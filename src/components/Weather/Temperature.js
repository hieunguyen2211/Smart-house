import React from 'react';
import { Icon } from 'antd';
import './Temperature.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Temperature(props) {
    return (
        <div className="temperature-container">
            <div style={{ display: 'flex', marginTop: '50%' }}>
                <FontAwesomeIcon
                    icon={props.icon}
                    style={{ fontSize: '40px' }}
                />
            </div>

            <p className="condition">{props.condition}</p>
            <p className="address">{props.address}</p>
            <p className="degree">{props.degree} °C</p>
        </div>
    );
}

export default Temperature;
