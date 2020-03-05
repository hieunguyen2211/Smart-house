import React, { useState } from 'react';
import ControlHeader from '../Header/Control';
import NavigationBar from '../Navigation/NavigationBar';
import DeviceDetails from '../Device/Details';
import './Room.css';

function Room(props) {
    const urlIconSelected =
        process.env.PUBLIC_URL + '/icons/devices/content/selected';
    const urlIconUnselected =
        process.env.PUBLIC_URL + '/icons/devices/content/unselected';

    const [deviceData, setDeviceData] = useState([
        {
            id: 1,
            name: 'Information',
            icon: {
                selected: urlIconSelected + '/Information.svg',
                unselected: urlIconUnselected + '/Information.svg'
            },
            data: [
                {
                    id: 1,
                    name: 'Temperature',
                    value: 30,
                    unit: '°C'
                },
                {
                    id: 2,
                    name: 'Humidity',
                    value: 0.8,
                    unit: '%'
                },
                {
                    id: 3,
                    name: 'Gas Condition',
                    value: true
                },
                {
                    id: 4,
                    name: 'Pressure',
                    value: 0.9,
                    unit: 'Bar'
                }
            ],
            value: 0,
            status: false,
            selected: true
        },
        {
            id: 2,
            name: 'Fan',
            icon: {
                selected: urlIconSelected + '/Fan.svg',
                unselected: urlIconUnselected + '/Fan.svg'
            },
            data: [
                {
                    id: 1,
                    name: 'Total working',
                    value: 12.5,
                    unit: 'Hrs'
                },
                {
                    id: 2,
                    name: 'Maximum Power',
                    value: 80,
                    unit: 'W'
                }
            ],
            value: 0,
            status: false,
            selected: false
        },
        {
            id: 3,
            name: 'Light',
            icon: {
                selected: urlIconSelected + '/Light.svg',
                unselected: urlIconUnselected + '/Light.svg'
            },
            data: [
                {
                    id: 1,
                    name: 'Total working',
                    value: 12.5,
                    unit: 'Hrs'
                },
                {
                    id: 2,
                    name: 'Maximum Power',
                    value: 80,
                    unit: 'W'
                }
            ],
            value: 1,
            status: true,
            selected: false
        },
        {
            id: 4,
            name: 'Windows',
            icon: {
                selected: urlIconSelected + '/Windows.svg',
                unselected: urlIconUnselected + '/Windows.svg'
            },
            data: [
                {
                    id: 1,
                    name: 'Total working',
                    value: 12.5,
                    unit: 'Hrs'
                },
                {
                    id: 2,
                    name: 'Maximum Power',
                    value: 80,
                    unit: 'W'
                }
            ],
            value: 2,
            status: true,
            selected: false
        },
        {
            id: 5,
            name: 'Door',
            icon: {
                selected: urlIconSelected + '/Door.svg',
                unselected: urlIconUnselected + '/Door.svg'
            },
            data: [
                {
                    id: 1,
                    name: 'Total working',
                    value: 12.5,
                    unit: 'Hrs'
                },
                {
                    id: 2,
                    name: 'Maximum Power',
                    value: 80,
                    unit: 'W'
                }
            ],
            value: 1,
            status: true,
            selected: false
        },
        {
            id: 6,
            name: 'Curtains',
            icon: {
                selected: urlIconSelected + '/Curtains.svg',
                unselected: urlIconUnselected + '/Curtains.svg'
            },
            data: [
                {
                    id: 1,
                    name: 'Total working',
                    value: 12.5,
                    unit: 'Hrs'
                },
                {
                    id: 2,
                    name: 'Maximum Power',
                    value: 80,
                    unit: 'W'
                }
            ],
            value: 3,
            status: true,
            selected: false
        }
    ]);

    const handleSelectDevice = id => {
        setDeviceData(deviceData =>
            deviceData.map(e => {
                if (e.id === id) e.selected = true;
                else if (e.selected === true) e.selected = false;
                return e;
            })
        );
    };

    return (
        <div className="page-container">
            <ControlHeader
                title={props.roomName}
                path="/rooms"
                colorText="white"
                imageUrl="/images/rooms/bedroom.jpg"
            />
            <div className="room-content-container">
                {deviceData.map(
                    e =>
                        e.selected &&
                        (e.name === 'Information' ? (
                            <DeviceDetails
                                deviceName={e.name}
                                informationData={e.data}
                                totalData={deviceData}
                                value={e.value}
                                status={e.status}
                                key={e.id}
                            />
                        ) : (
                            <DeviceDetails
                                deviceName={e.name}
                                informationData={e.data}
                                value={e.value}
                                status={e.status}
                                key={e.id}
                            />
                        ))
                )}
                <div className="scrolling-wrapper">
                    {deviceData &&
                        deviceData.map(e => (
                            <div
                                onClick={() => handleSelectDevice(e.id)}
                                key={e.id}
                            >
                                <div
                                    className={
                                        e.selected
                                            ? 'card-device-on'
                                            : 'card-device-off'
                                    }
                                >
                                    {e.name !== 'Information' && (
                                        <div className="device-status-container">
                                            {e.status ? (
                                                <span className="dot-on"></span>
                                            ) : (
                                                <span className="dot-off"></span>
                                            )}
                                        </div>
                                    )}

                                    <div
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'column'
                                        }}
                                    >
                                        <img
                                            src={
                                                e.selected
                                                    ? e.icon.selected
                                                    : e.icon.unselected
                                            }
                                            className="card-item-content-icon"
                                            alt="icon"
                                        />
                                        <span>{e.name}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>

            <NavigationBar />
        </div>
    );
}

export default Room;
