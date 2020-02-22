import React from 'react';
import './Parameter.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Item(props) {
    const classNameIcon = props.checkFixed ? 'icon-fixed' : 'icon';
    const title = `${props.title} (${props.unit})`;
    return (
        <div className="weather-item-container">
            <div className={classNameIcon}>
                <FontAwesomeIcon
                    icon={props.icon}
                    style={{ fontSize: '3vh' }}
                />
            </div>

            <div className="content">
                <p className="title">{title}</p>
                <p className="detail">{props.detail}</p>
            </div>
        </div>
    );
}

export default Item;
