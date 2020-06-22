import React, { useState, useEffect } from "react";
import { getAllLeds, updateStatusLed } from "../../firebase/devices/led";
import NavigationBar from "../../components/Navigation/NavigationBar";
import SyncLoader from "react-spinners/SyncLoader";
import Room from "../../container/Room";
function Kitchen() {
    const [loading, setLoading] = useState(true);
    const [deviceData, setDeviceData] = useState([
        {
            id: 1,
            name: "Light",
            iconName: "Light",
            status: true,
        },
    ]);

    useEffect(() => {
        const fetchData = async () => {
            const ledReadAll = await getAllLeds();
            const newDeviceData = deviceData;
            newDeviceData.map((e) => {
                ledReadAll.map((room) => {
                    if (room[0] === "KITCHEN")
                        e.status = room[1].status === 0 ? false : true;
                    return room;
                });
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
                if ("kitchen" === roomName) currentStatus = e.status;
                return e;
            });

            updateStatusLed(!currentStatus, roomName);
            setDeviceData((deviceData) =>
                deviceData.map((e) => {
                    if ("kitchen" === roomName) e.status = !currentStatus;
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
            room="kitchen"
            data={deviceData}
            amount={deviceData.length}
            onClick={handleClickChangeStatus}
        />
    );
}

export default Kitchen;
