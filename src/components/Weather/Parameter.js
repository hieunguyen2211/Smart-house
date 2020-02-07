import React from 'react';
import './Parameter.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Item(props) {
    const classNameIcon = props.checkFixed ? 'icon-fixed' : 'icon';
    return (
        <div className="weather-item-container">
            <div className={classNameIcon}>
                <FontAwesomeIcon icon={props.icon} />
            </div>

            <div className="content">
                <p className="title">{props.title}</p>
                <p className="detail">{props.detail}</p>
            </div>
        </div>
    );
}

export default Item;
