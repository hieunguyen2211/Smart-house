import React, { useState } from 'react';
import ControlHeader from '../Header/Control';
import NavigationBar from '../Navigation/NavigationBar';
import DeviceDetails from '../Device/Details';

function Device(props) {
    const urlIconSelected =
        process.env.PUBLIC_URL + '/icons/rooms/content/selected';
    const urlIconUnselected =
        process.env.PUBLIC_URL + '/icons/rooms/content/unselected';

    const [deviceData, setDeviceData] = useState([
        {
            id: 1,
            name: 'Bedroom',
            icon: {
                selected: urlIconSelected + '/Bedroom.svg',
                unselected: urlIconUnselected + '/Bedroom.svg'
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
            selected: true
        },
        {
            id: 2,
            name: 'Living Room',
            icon: {
                selected: urlIconSelected + '/Livingroom.svg',
                unselected: urlIconUnselected + '/Livingroom.svg'
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
            id: 3,
            name: 'Kitchen',
            icon: {
                selected: urlIconSelected + '/Kitchen.svg',
                unselected: urlIconUnselected + '/Kitchen.svg'
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
            id: 4,
            name: 'Dining room',
            icon: {
                selected: urlIconSelected + '/Diningroom.svg',
                unselected: urlIconUnselected + '/Diningroom.svg'
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
            id: 5,
            name: 'Laundry',
            icon: {
                selected: urlIconSelected + '/Laundry.svg',
                unselected: urlIconUnselected + '/Laundry.svg'
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
        },
        {
            id: 6,
            name: 'Bathroom',
            icon: {
                selected: urlIconSelected + '/Bathroom.svg',
                unselected: urlIconUnselected + '/Bathroom.svg'
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
                title={props.deviceName}
                path="/devices"
                colorText="white"
                imageUrl="/images/rooms/bedroom.jpg"
            />
            <div className="room-content-container">
                {deviceData.map(
                    e =>
                        e.selected && (
                            <DeviceDetails
                                device={e.name}
                                data={e.data}
                                value={e.value}
                                status={e.status}
                                key={e.id}
                            />
                        )
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
                                    <div className="device-status-container">
                                        {e.status ? (
                                            <span className="dot-on"></span>
                                        ) : (
                                            <span className="dot-off"></span>
                                        )}
                                    </div>

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
                                            style={{
                                                height: '40px',
                                                marginBottom: '0'
                                            }}
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

export default Device;
