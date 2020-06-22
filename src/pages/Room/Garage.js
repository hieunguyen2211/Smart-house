import React, { useState, useEffect } from "react";
import { getAllLeds, updateStatusLed } from "../../firebase/devices/led";
import { getAllServos, updateStatusServo } from "../../firebase/devices/servo";
import NavigationBar from "../../components/Navigation/NavigationBar";
import SyncLoader from "react-spinners/SyncLoader";
import Room from "../../container/Room";

function Garage() {
    const [loading, setLoading] = useState(true);
    const [deviceData, setDeviceData] = useState([
        {
            id: 1,
            name: "Light",
            iconName: "Light",
            status: false,
        },
        {
            id: 2,
            name: "Door",
            iconName: "door",
            status: false,
        },
    ]);

    useEffect(() => {
        const fetchData = async () => {
            const ledReadAll = await getAllLeds();
            const servoReadAll = await getAllServos();
            const newDeviceData = deviceData;
            newDeviceData.map((e) => {
                if (e.name.includes("Light")) {
                    ledReadAll.map((room) => {
                        if (room[0] === "GARAGE")
                            e.status = room[1].status === 0 ? false : true;
                        return room;
                    });
                } else if (e.name.includes("Door")) {
                    const nameServo = "GARAGEDOOR";
                    servoReadAll.map((servo) => {
                        if (servo[0] === nameServo)
                            e.status = servo[1].status === 0 ? false : true;
                        return servo;
                    });
                }
                return e;
            });
            setDeviceData(newDeviceData);
            setLoading(false);
        };
        fetchData();
    }, [deviceData]);

    const handleClickChangeStatus = (roomName, isLed) => {
        let currentStatus = false;
        if (isLed) {
            deviceData.map((e) => {
                if ("garage" === roomName && !e.name.includes("Door"))
                    currentStatus = e.status;
                return e;
            });

            updateStatusLed(!currentStatus, roomName);
            setDeviceData((deviceData) =>
                deviceData.map((e) => {
                    if ("garage" === roomName && !e.name.includes("Door"))
                        e.status = !currentStatus;
                    return e;
                })
            );
        } else {
            deviceData.map((e) => {
                if (e.name === "Door") {
                    currentStatus = e.status;
                }
                return e;
            });

            updateStatusServo(!currentStatus, "GARAGEDOOR");
            setDeviceData((deviceData) =>
                deviceData.map((e) => {
                    if (e.name === "Door") {
                        e.status = !currentStatus;
                    }
                    return e;
                })
            );
        }
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
        <Room
            room="garage"
            data={deviceData}
            amount={deviceData.length}
            onClick={handleClickChangeStatus}
        />
    );
}

export default Garage;
