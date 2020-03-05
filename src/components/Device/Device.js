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
            name: 'Information',
            icon: {
                selected:
                    process.env.PUBLIC_URL +
                    '/icons/devices/content/selected/Information.svg',
                unselected:
                    process.env.PUBLIC_URL +
                    '/icons/devices/content/unselected/Information.svg'
            },
            data: [
                {
                    id: 1,
                    name: 'total working ',
                    value: 50,
                    unit: 'Hrs'
                },
                {
                    id: 2,
                    name: 'total power',
                    value: 400,
                    unit: 'W'
                },
                {
                    id: 3,
                    name: 'Status',
                    value: true
                },
                {
                    id: 4,
                    name: 'total energy',
                    value: 3000,
                    unit: 'kW-H'
                }
            ],
            value: 0,
            status: false,
            selected: true
        },
        {
            id: 2,
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
            selected: false
        },
        {
            id: 3,
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
            id: 4,
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
            id: 5,
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
            id: 6,
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
            id: 7,
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

export default Device;
