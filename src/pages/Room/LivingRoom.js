import React from "react";
import Room from "../../container/Room";

function LivingRoom() {
    const data = [
        {
            id: 1,
            name: "Light 1",
            iconName: "Light",
            status: true,
        },
        {
            id: 2,
            name: "Light 2",
            iconName: "Light",
            status: false,
        },
        {
            id: 3,
            name: "Main door",
            iconName: "Door",
            status: true,
        },
    ];
    return <Room room="living room" data={data} amount={data.length} />;
}

export default LivingRoom;
