import React from "react";
import "./style.css";

export default function FavouriteCard(props) {
    let iconURL =
        process.env.PUBLIC_URL +
        `/icons/devices/filled/active/${props.device}.svg`;
    let classContainer = "favor-device-item";
    let classItem = "item-content";

    if (props.disabled) {
        iconURL =
            process.env.PUBLIC_URL +
            `/icons/devices/filled/disabled/${props.device}.svg`;
        classContainer += " container-disabled";
        classItem += " content-disabled";
    }

    return (
        <div
            className={classContainer}
            onClick={() => {
                if (props.nameDevice.includes("Light")) {
                    if (props.nameDevice === "Light 1")
                        return props.onClick("livingroom1", true);
                    if (props.nameDevice === "Light 2")
                        return props.onClick("livingroom2", true);
                    return props.onClick(props.roomName, true);
                }
                if (props.nameDevice.includes("Door")) {
                    if (props.roomName === "Garage")
                        return props.onClick("GARAGEDOOR", false);
                    return props.onClick(props.nameDevice, false);
                }
            }}
        >
            <div className={classItem}>
                <img src={iconURL} className="item-icon" alt="icon" />
                <div className="info-section">
                    <p className="device-name">{props.nameDevice}</p>
                    <p className="room-name">{props.roomName}</p>
                </div>
            </div>
        </div>
    );
}
