import React from 'react';
import ControlHeader from '../Header/Control';
import NavigationBar from '../Navigation/NavigationBar';
import { Link } from 'react-router-dom';
import DeviceDetails from '../Device/Details';
import './Room.css';

function Room(props) {
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
    const AirConditionerDisable =
        process.env.PUBLIC_URL + '/icons/devices/AirConditionerDisable.svg';
    const LightActive =
        process.env.PUBLIC_URL + '/icons/devices/LightActive.svg';
    return (
        <div className="page-container">
            <div>
                <ControlHeader
                    title={props.roomName}
                    path="/"
                    colorText="white"
                    imageUrl="/images/rooms/bedroom.jpg"
                />
                <DeviceDetails device="airConditioner" deviceStatus="disable" />
            </div>

            <div className="scrolling-wrapper">
                <Link to="/rooms/bedroom">
                    <div className="card-device-on" id="1">
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
                                src={AirConditionerDisable}
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

                {deviceData.map(e => (
                    <Link to={`/rooms/bedroom/${e.name}`}>
                        <div className="card-device-off" id={e.id}>
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
                ))}
            </div>
            <NavigationBar />
        </div>
    );
}

export default Room;
