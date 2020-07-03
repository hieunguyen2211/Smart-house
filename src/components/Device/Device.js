import React, { useState, useEffect } from 'react';
import ControlHeader from '../Header/Control';
import NavigationBar from '../Navigation/NavigationBar';
import DeviceDetails from '../Device/Details';
import { getAllLeds, updateStatusLed } from '../../firebase/devices/led';
import Announcement from '../Modal/Announcement';
import SyncLoader from 'react-spinners/SyncLoader';

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
                    '/icons/devices/content/unselected/Information.svg',
            },
            data: [
                {
                    id: 1,
                    name: 'total working ',
                    value: 50,
                    unit: 'Hrs',
                },
                {
                    id: 2,
                    name: 'total power',
                    value: 400,
                    unit: 'W',
                },
                {
                    id: 3,
                    name: 'Status',
                    value: true,
                },
                {
                    id: 4,
                    name: 'total energy',
                    value: 3000,
                    unit: 'kW-H',
                },
            ],
            value: 0,
            status: false,
        },
        {
            id: 2,
            name: 'Bedroom',
            icon: {
                selected: urlIconSelected + '/Bedroom.svg',
                unselected: urlIconUnselected + '/Bedroom.svg',
            },
            data: [
                {
                    id: 1,
                    name: 'Total working',
                    value: 12.5,
                    unit: 'Hrs',
                },
                {
                    id: 2,
                    name: 'Maximum Power',
                    value: 80,
                    unit: 'W',
                },
            ],
            value: 0,
            status: false,
        },
        {
            id: 3,
            name: 'Living Room',
            icon: {
                selected: urlIconSelected + '/Livingroom.svg',
                unselected: urlIconUnselected + '/Livingroom.svg',
            },
            data: [
                {
                    id: 1,
                    name: 'Total working',
                    value: 12.5,
                    unit: 'Hrs',
                },
                {
                    id: 2,
                    name: 'Maximum Power',
                    value: 80,
                    unit: 'W',
                },
            ],
            value: 1,
            status: true,
        },
        {
            id: 4,
            name: 'Kitchen',
            icon: {
                selected: urlIconSelected + '/Kitchen.svg',
                unselected: urlIconUnselected + '/Kitchen.svg',
            },
            data: [
                {
                    id: 1,
                    name: 'Total working',
                    value: 12.5,
                    unit: 'Hrs',
                },
                {
                    id: 2,
                    name: 'Maximum Power',
                    value: 80,
                    unit: 'W',
                },
            ],
            value: 2,
            status: true,
        },
        {
            id: 5,
            name: 'Dining room',
            icon: {
                selected: urlIconSelected + '/Diningroom.svg',
                unselected: urlIconUnselected + '/Diningroom.svg',
            },
            data: [
                {
                    id: 1,
                    name: 'Total working',
                    value: 12.5,
                    unit: 'Hrs',
                },
                {
                    id: 2,
                    name: 'Maximum Power',
                    value: 80,
                    unit: 'W',
                },
            ],
            value: 1,
            status: true,
        },
        {
            id: 6,
            name: 'Bathroom',
            icon: {
                selected: urlIconSelected + '/Bathroom.svg',
                unselected: urlIconUnselected + '/Bathroom.svg',
            },
            data: [
                {
                    id: 1,
                    name: 'Total working',
                    value: 12.5,
                    unit: 'Hrs',
                },
                {
                    id: 2,
                    name: 'Maximum Power',
                    value: 80,
                    unit: 'W',
                },
            ],
            value: 2,
            status: true,
        },
        {
            id: 7,
            name: 'Garage',
            icon: {
                selected: urlIconSelected + '/Garage.svg',
                unselected: urlIconUnselected + '/Garage.svg',
            },
            data: [
                {
                    id: 1,
                    name: 'Total working',
                    value: 12.5,
                    unit: 'Hrs',
                },
                {
                    id: 2,
                    name: 'Maximum Power',
                    value: 80,
                    unit: 'W',
                },
            ],
            value: 3,
            status: true,
        },
    ]);

    const [selectingDevice, setSelectingDevice] = useState([
        true,
        false,
        false,
        false,
        false,
        false,
        false,
    ]);

    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState('');

    const handleSelectDevice = (id) => {
        setSelectingDevice((selectingDevice) =>
            selectingDevice.map((e, index) => (index === id - 1 ? true : false))
        );
    };

    useEffect(() => {
        const fetchData = async () => {
            const ledReadAll = await getAllLeds();
            const newDeviceData = deviceData;
            newDeviceData.map((e) => {
                if (e.name !== 'Information') {
                    const nameRoom = e.name.toUpperCase().replace(/\s+/g, '');
                    ledReadAll.map((room) => {
                        if (room[0] === nameRoom)
                            e.status = room[1].status === 0 ? false : true;
                        return room;
                    });
                }
                return e;
            });
            setDeviceData(newDeviceData);
            setLoading(false);
        };
        fetchData();
    }, [deviceData]);

    const handleClickChangeStatus = (roomName) => {
        setVisible(true);
        let currentStatus = true;
        deviceData.map((e) => {
            if (e.name === roomName) currentStatus = e.status;
            return e;
        });
        // currentStatus
        //     ? setMessage(`${roomName}'s light turned off successfully.`)
        //     : setMessage(`${roomName}'s light turned on successfully.`);
        setMessage('Succeeded. Please check your device');
        updateStatusLed(!currentStatus, roomName);
        setDeviceData((deviceData) =>
            deviceData.map((e) => {
                if (e.name === roomName) e.status = !currentStatus;
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
                title={props.deviceName}
                path="/devices"
                colorText="white"
            />
            <div className="page-content-wrapper">
                <SyncLoader size={20} color={'#3a7bd5'} loading={loading} />
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
                title={props.deviceName}
                path="/devices"
                colorText="white"
            />
            <div className="room-content-container">
                {deviceData.map(
                    (e) =>
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
                                handleClickChangeStatus={() =>
                                    handleClickChangeStatus(e.name)
                                }
                            />
                        ))
                )}
                <div className="scrolling-wrapper">
                    {deviceData &&
                        deviceData.map((e) => (
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
                                            flexDirection: 'column',
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

export default Device;
