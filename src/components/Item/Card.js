import React from 'react';
import './Card.css';

function Card(props) {
    const urlIcon =
        process.env.PUBLIC_URL + '/icons/rooms/' + props.iconName + '.svg';
    return (
        <div className="card-item-container" onClick={() => console.log('ABC')}>
            <div>
                <img
                    src={urlIcon}
                    className="card-item-content-icon"
                    alt="icon"
                />
                <p style={{ color: 'black' }}>{props.name}</p>
            </div>
        </div>
    );
}

export default Card;
