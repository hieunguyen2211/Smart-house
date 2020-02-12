import React from 'react';
import './CardSquare.css';
import { Link } from 'react-router-dom';
function CardSquare(props) {
    const urlIcon = process.env.PUBLIC_URL + '/icons' + props.iconUrl + '.svg';

    const title = props.subTitle ? (
        <div>
            <p
                style={{
                    color: 'black',
                    fontSize: '14px'
                }}
            >
                <span style={{ fontWeight: 'bold', color: '#f63 ' }}>4</span>{' '}
                devices
            </p>
            <p style={{ color: 'black', fontSize: '18px' }}>{props.name}</p>
        </div>
    ) : (
        <div>
            <p style={{ color: 'black', fontSize: '18px' }}>{props.name}</p>
        </div>
    );
    return (
        <Link to={props.path} style={{ width: '41%', height: 'fit-content' }}>
            <div className="card-item-container">
                <div style={{ padding: '12px' }}>
                    <img
                        src={urlIcon}
                        className="card-item-content-icon"
                        alt="icon"
                    />
                    {title}
                </div>
            </div>
        </Link>
    );
}

export default CardSquare;
