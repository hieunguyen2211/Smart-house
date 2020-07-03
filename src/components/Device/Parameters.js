import React from 'react';

function Parameters(props) {
    return (
        <div className="device-primary-details">
            {props.data.map(e => (
                <div className="device-params-container" key={e.id}>
                    <p>{e.name}</p>
                    {e.unit ? (
                        <p>{`${e.value} ${e.unit}`}</p>
                    ) : (
                        <p>{e.value}</p>
                    )}
                </div>
            ))}
        </div>
    );
}

export default Parameters;
