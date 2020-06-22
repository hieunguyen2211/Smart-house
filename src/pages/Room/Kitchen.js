import React from "react";
import Room from "../../container/Room";
function Kitchen() {
    const data = [
        {
            id: 1,
            name: "Light",
            iconName: "Light",
            status: true,
        },
    ];
    return <Room room="kitchen" data={data} amount={data.length} />;
}

export default Kitchen;
