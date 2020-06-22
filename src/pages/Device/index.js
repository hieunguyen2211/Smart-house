import React, { useState, useEffect } from "react";
import ControlHeader from "../../components/Header/Control";
import NavigationBar from "../../components/Navigation/NavigationBar";
import RoomDetailCard from "../../components/Room/DetailCard";
import { getAllLeds, updateStatusLed } from "../../firebase/devices/led";
import SyncLoader from "react-spinners/SyncLoader";
import "./style.css";

export default function DevicePage() {
    const [loading, setLoading] = useState(true);
    const [deviceData, setDeviceData] = useState([
        {
            id: 1,
            name: "Living room",
            devices: [
                {
                    id: 1,
                    name: "Light 1",
                    iconName: "light",
                    status: false,
                },
                {
                    id: 2,
                    name: "Light 2",
                    iconName: "light",
                    status: false,
                },
                {
                    id: 3,
                    name: "Main door",
                    iconName: "door",
                    status: false,
                },
            ],
        },
        {
            id: 2,
            name: "Kitchen",
            devices: [
                {
                    id: 1,
                    name: "Light",
                    iconName: "light",
                    status: false,
                },
            ],
        },
        {
            id: 3,
            name: "Bedroom",
            devices: [
                {
                    id: 1,
                    name: "Light",
                    iconName: "light",
                    status: false,
                },
            ],
        },
        {
            id: 4,
            name: "Bathroom",
            devices: [
                {
                    id: 1,
                    name: "Light",
                    iconName: "light",
                    status: false,
                },
            ],
        },
        {
            id: 5,
            name: "Garage",
            devices: [
                {
                    id: 1,
                    name: "Light",
                    iconName: "light",
                    status: false,
                },
                {
                    id: 2,
                    name: "Main door",
                    iconName: "door",
                    status: false,
                },
            ],
        },
    ]);

    useEffect(() => {
        const fetchData = async () => {
            const ledReadAll = await getAllLeds();
            const newDeviceData = deviceData;
            newDeviceData.map((e) => {
                let nameRoom = e.name.toUpperCase().replace(/\s/g, "");
                e.devices.map((d) => {
                    if (d.name === "Light 1") nameRoom = "LIVINGROOM1";
                    if (d.name === "Light 2") nameRoom = "LIVINGROOM2";
                    ledReadAll.map((room) => {
                        if (room[0] === nameRoom)
                            d.status = room[1].status === 0 ? false : true;
                        return room;
                    });
                    return d;
                });
                return e;
            });
            setDeviceData(newDeviceData);
            setLoading(false);
        };
        fetchData();
    }, [deviceData]);

    const handleClickChangeStatus = (roomName) => {
        let currentStatus = false;
        deviceData.map((e) => {
            let room_d = e.name;
            e.devices.map((d) => {
                if (d.name === "Light 1") room_d = "livingroom1";
                if (d.name === "Light 2") room_d = "livingroom2";
                if (room_d === roomName) currentStatus = d.status;
                return d;
            });
            return e;
        });

        updateStatusLed(!currentStatus, roomName);
        setDeviceData((deviceData) =>
            deviceData.map((e) => {
                let room_d = e.name;
                e.devices.map((d) => {
                    if (d.name === "Light 1") room_d = "livingroom1";
                    if (d.name === "Light 2") room_d = "livingroom2";
                    if (room_d === roomName) d.status = !currentStatus;
                    return d;
                });
                return e;
            })
        );
    };

    return loading ? (
        <div className="main-page-container">
            <div
                className="page-content-wrapper"
                style={{ justifyContent: "center" }}
            >
                <SyncLoader size={20} color={"white"} loading={loading} />
            </div>

            <NavigationBar />
        </div>
    ) : (
        <div className="page-container">
            <ControlHeader title="devices" path="/home" />
            <div className="device-page-content-wrapper">
                {deviceData.map((e) => (
                    <RoomDetailCard
                        key={e.id}
                        roomName={e.name}
                        deviceData={e.devices}
                        onClick={handleClickChangeStatus}
                    />
                ))}
            </div>
            <NavigationBar />
        </div>
    );
}
