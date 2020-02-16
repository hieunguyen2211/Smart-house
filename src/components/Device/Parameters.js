import React from 'react';

function Parameters(props) {
    return (
        <div className="device-primary-details">
            {props.data.map(e => (
                <div className="device-params-container">
                    <p>{e.title}</p>
                    <p>{e.value}</p>
                </div>
            ))}
        </div>
    );
}

export default Parameters;
