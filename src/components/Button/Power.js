import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import './Power.css';
function Power(props) {
    const [status, setStatus] = useState(props.status);
    const handleChangeStatus = () => {
        setStatus(!status);
    };
    return status ? (
        <div className="power-button-wrapper-on" onClick={handleChangeStatus}>
            <FontAwesomeIcon
                icon={faPowerOff}
                style={{
                    fontSize: '800%',
                    color: 'white'
                }}
            />
        </div>
    ) : (
        <div className="power-button-wrapper-off" onClick={handleChangeStatus}>
            <FontAwesomeIcon
                icon={faPowerOff}
                style={{
                    fontSize: '800%',
                    color: 'white'
                }}
            />
        </div>
    );
}

export default Power;
