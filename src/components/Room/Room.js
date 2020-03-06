import React, { useState, useEffect } from 'react';
import ControlHeader from '../Header/Control';
import NavigationBar from '../Navigation/NavigationBar';
import DeviceDetails from '../Device/Details';
import Announcement from '../Modal/Announcement';
import { getCurrentHumidity } from '../../firebase/paramsWeather/humidity';
import { getCurrentLed, updateStatusLed } from '../../firebase/devices/led';
import './Room.css';

import SyncLoader from 'react-spinners/SyncLoader';

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
                    value: 50,
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
            status: false
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
            status: false
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
            status: false
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
            status: true
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
            status: true
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
            status: true
        }
    ]);
    const [selectingDevice, setSelectingDevice] = useState([
        true,
        false,
        false,
        false,
        false,
        false
    ]);
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const humidityRead = await getCurrentHumidity();
            const ledRead = await getCurrentLed();
            const newDeviceData = deviceData;
            newDeviceData[0].data[1].value = humidityRead.value;
            newDeviceData[2].status = ledRead.status === 1 ? true : false;
            setDeviceData(newDeviceData);
            setLoading(false);
        };
        fetchData();
    }, [deviceData]);

    const handleSelectDevice = id => {
        setSelectingDevice(selectingDevice =>
            selectingDevice.map((e, index) => (index === id - 1 ? true : false))
        );
    };

    const handleClickChangeStatus = () => {
        setVisible(true);
        const currentStatus = deviceData[2].status;
        currentStatus
            ? setMessage('Turn off your light successfully.')
            : setMessage('Turn on your light successfully.');
        updateStatusLed(!currentStatus);
        setDeviceData(deviceData =>
            deviceData.map(e => {
                if (e.id === 3) e.status = !currentStatus;
                return e;
            })
        );
    };

    const handleToggleModal = () => {
        setVisible(false);
    };

    return loading ? (
        <div className="page-container" style={{ background: 'white' }}>
            <ControlHeader
                title={props.roomName}
                path="/rooms"
                colorText="white"
                imageUrl="/images/rooms/bedroom.jpg"
            />
            <div className="page-content-wrapper">
                <SyncLoader size={30} color={'#3a7bd5'} loading={loading} />
            </div>

            <NavigationBar />
        </div>
    ) : (
        <div className="page-container">
            <Announcement
                visible={visible}
                handleToggleModal={handleToggleModal}
                styleMessage={{ color: 'green', fontSize: '3vh' }}
                message={message}
            />
            <ControlHeader
                title={props.roomName}
                path="/rooms"
                colorText="white"
                imageUrl="/images/rooms/bedroom.jpg"
            />
            <div className="room-content-container">
                {deviceData.map(
                    e =>
                        selectingDevice[e.id - 1] &&
                        (e.name === 'Information' ? (
                            <DeviceDetails
                                deviceName={e.name}
                                informationData={e.data}
                                totalData={deviceData}
                                value={e.value}
                                status={e.status}
                                key={e.id}
                                handleClickChangeStatus={
                                    handleClickChangeStatus
                                }
                            />
                        ) : (
                            <DeviceDetails
                                deviceName={e.name}
                                informationData={e.data}
                                value={e.value}
                                status={e.status}
                                key={e.id}
                                handleClickChangeStatus={
                                    handleClickChangeStatus
                                }
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
                                        selectingDevice[e.id - 1]
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
                                                selectingDevice[e.id - 1]
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
