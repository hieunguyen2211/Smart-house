import React, { useState, useEffect } from "react";
import NavigationBar from "../../components/Navigation/NavigationBar";
import FavoriteCardCol from "../../components/Device/FavoriteCardCol";
import { getAllLeds, updateStatusLed } from "../../firebase/devices/led";
import { getAllServos, updateStatusServo } from "../../firebase/devices/servo";
import SyncLoader from "react-spinners/SyncLoader";
import RoomCard from "../../components/Room/RoomCard";
import "./Home.css";

export default function Home() {
    const [loading, setLoading] = useState(true);
    const [deviceData, setDeviceData] = useState([
        [
            {
                id: 1,
                name: "Light 1",
                room: "Living room",
                status: false,
            },
            {
                id: 2,
                name: "Light 2",
                room: "Living room",
                status: false,
            },
        ],
        [
            {
                id: 3,
                name: "Light",
                room: "Kitchen",
                status: false,
            },
            {
                id: 4,
                name: "Light",
                room: "Bedroom",
                status: false,
            },
        ],
        [
            {
                id: 5,
                name: "Light",
                room: "Bathroom",
                status: false,
            },
            {
                id: 6,
                name: "Main Door",
                room: "Living room",
                status: false,
            },
        ],
        [
            {
                id: 7,
                name: "Light",
                room: "Garage",
                status: false,
            },
            {
                id: 8,
                name: "Door",
                room: "Garage",
                status: false,
            },
        ],
    ]);

    useEffect(() => {
        const fetchData = async () => {
            const ledReadAll = await getAllLeds();
            const servoReadAll = await getAllServos();
            const newDeviceData = deviceData;
            newDeviceData.map((e) =>
                e.map((d) => {
                    if (d.name.includes("Light")) {
                        let room_d = d.room;
                        if (d.name === "Light 1") room_d = "livingroom1";
                        if (d.name === "Light 2") room_d = "livingroom2";
                        const nameRoom = room_d
                            .toUpperCase()
                            .replace(/\s/g, "");
                        ledReadAll.map((room) => {
                            if (room[0] === nameRoom)
                                d.status = room[1].status === 0 ? false : true;
                            return room;
                        });
                    } else if (d.name.includes("Door")) {
                        let nameServo = d.name.toUpperCase().replace(/\s/g, "");
                        if (d.room === "Garage") nameServo = "GARAGEDOOR";
                        servoReadAll.map((servo) => {
                            if (servo[0] === nameServo)
                                d.status = servo[1].status === 0 ? false : true;
                            return servo;
                        });
                    }
                    return d;
                })
            );
            setDeviceData(newDeviceData);
            setLoading(false);
        };
        fetchData();
    }, [deviceData]);

    const handleClickChangeStatus = (roomName, isLed) => {
        let currentStatus = false;

        if (isLed) {
            deviceData.map((e) =>
                e.map((d) => {
                    let room_d = d.room;
                    if (d.name === "Light 1") room_d = "livingroom1";
                    if (d.name === "Light 2") room_d = "livingroom2";
                    if (room_d === roomName && !d.name.includes("Door"))
                        currentStatus = d.status;
                    return d;
                })
            );

            updateStatusLed(!currentStatus, roomName);
            setDeviceData((deviceData) =>
                deviceData.map((e) =>
                    e.map((d) => {
                        let room_d = d.room;
                        if (d.name === "Light 1") room_d = "livingroom1";
                        if (d.name === "Light 2") room_d = "livingroom2";
                        if (room_d === roomName && !d.name.includes("Door"))
                            d.status = !currentStatus;
                        return d;
                    })
                )
            );
        } else {
            const servoName = roomName;
            deviceData.map((e) =>
                e.map((d) => {
                    let nameServo = d.name;
                    if (d.room === "Garage" && !d.name.includes("Light"))
                        nameServo = "GARAGEDOOR";
                    if (nameServo === servoName) currentStatus = d.status;
                    return d;
                })
            );

            updateStatusServo(!currentStatus, servoName);
            setDeviceData((deviceData) =>
                deviceData.map((e) =>
                    e.map((d) => {
                        let nameServo = d.name;
                        if (d.room === "Garage" && !d.name.includes("Light"))
                            nameServo = "GARAGEDOOR";
                        if (nameServo === servoName) d.status = !currentStatus;
                        return d;
                    })
                )
            );
        }
    };

    const getNameIcon = (nameDevice) => {
        if (nameDevice.includes("Light")) return "light";
        if (nameDevice.includes("Door")) return "door";
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
        <div className="main-page-container">
            <div className="main-page-content">
                <div className="image">
                    <div className="image-overlay">
                        <div className="greeting-section">
                            <p className="greeting">Good Morning,</p>
                            <p className="greeting-name">Phuong Hieu</p>
                        </div>
                    </div>
                </div>
                <div className="device-section">
                    <div className="favor-device-section">
                        Favourite devices
                        <div className="content-wrapper favor-device-content">
                            {deviceData.map((e) => (
                                <FavoriteCardCol
                                    key={e[0].id}
                                    nameIcon1={getNameIcon(e[0].name)}
                                    nameDevice1={e[0].name}
                                    room1={e[0].room}
                                    disabledRow1={!e[0].status}
                                    onClickRow1={handleClickChangeStatus}
                                    nameIcon2={getNameIcon(e[1].name)}
                                    nameDevice2={e[1].name}
                                    room2={e[1].room}
                                    disabledRow2={!e[1].status}
                                    onClickRow2={handleClickChangeStatus}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="room-section">
                    <div className="room-section-wrapper">
                        Rooms
                        <div className="content-wrapper">
                            <RoomCard room="living room" amountDevice="3" />
                            <RoomCard room="kitchen" amountDevice="1" />
                            <RoomCard room="bedroom" amountDevice="1" />
                            <RoomCard room="bathroom" amountDevice="1" />
                            <RoomCard room="garage" amountDevice="2" />
                        </div>
                    </div>
                </div>
            </div>
            <NavigationBar />
        </div>
    );
}
