import React from 'react';
import './6-CircleSeparate.css';
function CircleSeparate(props) {
    return (
        <div>
            {props.data.map(e => (
                <img
                    src={e.icon.selected}
                    className={`card-item-content-icon circle-6-segment-icon-${e.name
                        .toLowerCase()
                        .replace(/\s+/g, '')}`}
                    alt="icon"
                    key={e.id}
                    onClick={() => props.handleClickChangeStatus(e.name)}
                />
            ))}

            <ul className="circle-6-segment">
                {props.data.map(e =>
                    e.status ? (
                        <li key={e.id}>
                            <div
                                className="segment-wrapper"
                                style={{ background: '#0ab013' }}
                            ></div>
                        </li>
                    ) : (
                        <li key={e.id}>
                            <div
                                className="segment-wrapper"
                                style={{ background: '#9e9c9c' }}
                            ></div>
                        </li>
                    )
                )}
            </ul>
            <div className="circle-center"></div>
        </div>
    );
}

export default CircleSeparate;
