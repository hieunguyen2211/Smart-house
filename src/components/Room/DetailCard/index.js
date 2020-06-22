import React from "react";
import DeviceCardDetail from "../../Device/DetailCard";
import "./style.css";

export default function RoomDetailCard(props) {
    return (
        <div className="room-detail-container">
            <div className="title-section">
                <p className="title">{props.roomName}</p>
            </div>
            <div className="room-detail-list-device">
                {props.deviceData.map((e) => (
                    <DeviceCardDetail
                        iconName={e.iconName}
                        deviceName={e.name}
                        status={e.status}
                        isMinimized
                        key={e.id}
                        onClick={() => {
                            if (e.name === "Light 1")
                                return props.onClick("livingroom1");
                            if (e.name === "Light 2")
                                return props.onClick("livingroom2");
                            return props.onClick(props.roomName);
                        }}
                    />
                ))}
            </div>
        </div>
    );
}
