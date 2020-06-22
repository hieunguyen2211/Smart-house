import React from "react";
import Room from "../../container/Room";
function Garage() {
    const data = [
        {
            id: 1,
            name: "Light",
            iconName: "Light",
            status: true,
        },
        {
            id: 2,
            name: "Main Door",
            iconName: "door",
            status: false,
        },
    ];
    return <Room room="kitchen" data={data} amount={data.length} />;
}

export default Garage;
