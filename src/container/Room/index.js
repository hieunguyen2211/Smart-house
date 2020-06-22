import React from "react";
import { Link } from "react-router-dom";
import { LeftCircleFilled } from "@ant-design/icons";
import NavigationBar from "../../components/Navigation/NavigationBar";
import DeviceDetailCard from "../../components/Device/DetailCard";
import "./style.css";

export default function Room(props) {
    const classImage = `room-detail-image ${props.room.replace(/\s/g, "")}`;

    return (
        <div className="main-page-container">
            <div className="main-page-content">
                <div className={classImage}>
                    <Link to="/home" className="icon-back-wrapper">
                        <LeftCircleFilled className="icon-back" />
                    </Link>
                    <div className="image-overlay"></div>
                </div>
                <div className="room-detail-device-section">
                    <div className="title-section">
                        <p className="room-detail-title">{props.room}</p>
                        <p className="room-detail-amount-device">
                            {props.amount} devices
                        </p>
                    </div>
                    <div className="room-detail-list-device-section">
                        {props.data.map((e) => (
                            <DeviceDetailCard
                                iconName={e.iconName}
                                deviceName={e.name}
                                status={e.status}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <NavigationBar />
        </div>
    );
}
