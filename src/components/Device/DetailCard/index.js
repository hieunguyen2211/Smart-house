import React from "react";
import "./style.css";
import { Switch } from "antd";

export default function DeviceDetailCard(props) {
    const iconURL =
        process.env.PUBLIC_URL +
        `/icons/devices/filled/active/${props.iconName}.svg`;
    let classContainer = "device-detail-card";
    if (props.isMinimized) classContainer += " container-minimized";
    return (
        <div className={classContainer}>
            <div className="device-header">
                <img src={iconURL} className="item-icon" alt="icon" />
                <div className="title">{props.deviceName}</div>
            </div>
            {props.status ? (
                <Switch
                    className="device-switch"
                    onClick={props.onClick}
                    defaultChecked
                />
            ) : (
                <Switch className="device-switch" onClick={props.onClick} />
            )}
        </div>
    );
}
