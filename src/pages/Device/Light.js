import React from 'react';
import ControlHeader from '../../components/Header/Control';
import NavigationBar from '../../components/Navigation/NavigationBar';
import DeviceDetails from '../../components/Device/Details';

import { Link } from 'react-router-dom';
function Light(props) {
    const deviceData = [
        {
            id: 2,
            name: 'Light'
        },
        {
            id: 3,
            name: 'Demo'
        },
        {
            id: 4,
            name: 'Demo'
        }
    ];
    const AirConditionerActive =
        process.env.PUBLIC_URL + '/icons/devices/AirConditionerActive.svg';
    const LightDisable =
        process.env.PUBLIC_URL + '/icons/devices/LightDisable.svg';
    const LightActive =
        process.env.PUBLIC_URL + '/icons/devices/LightActive.svg';
    return (
        <div className="page-container">
            <div>
                <ControlHeader title={props.roomName} path="/rooms" />
                <DeviceDetails device="light" deviceStatus="active" />
            </div>
            <div className="scrolling-wrapper">
                <Link to="/rooms/bedroom">
                    <div className="card-device-off" id="1">
                        <div className="device-status-container">
                            <span className="dot-off"></span>
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column'
                            }}
                        >
                            <img
                                src={AirConditionerActive}
                                className="card-item-content-icon"
                                alt="icon"
                                style={{
                                    height: '40px',
                                    marginBottom: '0'
                                }}
                            />
                            <span>Air conditioner</span>
                        </div>
                    </div>
                </Link>

                {deviceData.map(e => {
                    return props.typeDevice === e.name ? (
                        <Link to={`/rooms/bedroom/${e.name}`}>
                            <div className="card-device-on" id={e.id}>
                                <div className="device-status-container">
                                    <span className="dot-on"></span>
                                </div>
                                <div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column'
                                    }}
                                >
                                    <img
                                        src={LightDisable}
                                        className="card-item-content-icon"
                                        alt="icon"
                                        style={{
                                            height: '40px',
                                            marginBottom: '0'
                                        }}
                                    />
                                    <span>{e.name}</span>
                                </div>
                            </div>
                        </Link>
                    ) : (
                        <Link to={`/rooms/bedroom/${e.name}`}>
                            <div className="card-device-off" id={e.id}>
                                <div className="device-status-container">
                                    <span className="dot-off"></span>
                                </div>
                                <div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column'
                                    }}
                                >
                                    <img
                                        src={LightActive}
                                        className="card-item-content-icon"
                                        alt="icon"
                                        style={{
                                            height: '40px',
                                            marginBottom: '0'
                                        }}
                                    />
                                    <span>{e.name}</span>
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>
            <NavigationBar />
        </div>
    );
}

export default Light;
