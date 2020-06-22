import React from "react";
import NavigationBar from "../../components/Navigation/NavigationBar";
import FavoriteCardCol from "../../components/Device/FavoriteCardCol";
import RoomCard from "../../components/Room/RoomCard";
import "./Test.css";

export default function Test() {
    return (
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
                            <FavoriteCardCol
                                nameIcon1="Light"
                                nameDevice1="Light 1"
                                room1="living room"
                                disabledRow1
                                nameIcon2="Light"
                                nameDevice2="Light 2"
                                room2="living room"
                            />
                            <FavoriteCardCol
                                nameIcon1="Light"
                                nameDevice1="Light"
                                room1="bedroom"
                                nameIcon2="Light"
                                nameDevice2="Light"
                                room2="kitchen"
                                disabledRow2
                            />
                            <FavoriteCardCol
                                nameIcon1="Light"
                                nameDevice1="Light"
                                room1="bathroom"
                                nameIcon2="Door"
                                nameDevice2="Main Door"
                                room2="living room"
                                disabledRow2
                            />
                            <FavoriteCardCol
                                nameIcon1="Light"
                                nameDevice1="Light"
                                room1="garage"
                                disabledRow1
                                nameIcon2="Door"
                                nameDevice2="Main Door"
                                room2="garage"
                            />
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
