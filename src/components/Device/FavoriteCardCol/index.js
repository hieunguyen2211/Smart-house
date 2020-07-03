import React from "react";
import FavouriteCard from "../FavoriteCard";

export default function FavouriteCardCol(props) {
    return (
        <div>
            {props.disabledRow1 ? (
                <FavouriteCard
                    device={props.nameIcon1}
                    nameDevice={props.nameDevice1}
                    roomName={props.room1}
                    disabled
                    onClick={props.onClickRow1}
                />
            ) : (
                <FavouriteCard
                    device={props.nameIcon1}
                    nameDevice={props.nameDevice1}
                    roomName={props.room1}
                    onClick={props.onClickRow1}
                />
            )}
            {props.disabledRow2 ? (
                <FavouriteCard
                    device={props.nameIcon2}
                    nameDevice={props.nameDevice2}
                    roomName={props.room2}
                    disabled
                    onClick={props.onClickRow1}
                />
            ) : (
                <FavouriteCard
                    device={props.nameIcon2}
                    nameDevice={props.nameDevice2}
                    roomName={props.room2}
                    onClick={props.onClickRow1}
                />
            )}
        </div>
    );
}
