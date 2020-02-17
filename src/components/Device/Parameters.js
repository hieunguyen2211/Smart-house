import React from 'react';

function Parameters(props) {
    return (
        <div className="device-primary-details">
            {props.data.map(e => (
                <div className="device-params-container" key={e.id}>
                    <p>{e.name}</p>
                    <p>{`${e.value} ${e.unit}`}</p>
                </div>
            ))}
        </div>
    );
}

export default Parameters;
