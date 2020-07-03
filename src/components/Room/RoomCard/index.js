import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function RoomCard(props) {
    const roomURL = process.env.PUBLIC_URL + `/images/rooms/${props.room}.jpg`;
    const linkURL = `/rooms/${props.room.replace(/\s/g, "")}`;
    return (
        <Link className="room-card-container" to={linkURL}>
            <img src={roomURL} alt="background" className="room-image" />
            <div className="room-infor-section">
                <p className="room-name">{props.room}</p>
                <p className="amount-device">{props.amountDevice} devices</p>
            </div>
        </Link>
    );
}
