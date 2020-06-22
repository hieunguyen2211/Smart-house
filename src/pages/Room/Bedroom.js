import React from "react";
import Room from "../../container/Room";
function Bedroom() {
    const data = [
        {
            id: 1,
            name: "Light",
            iconName: "Light",
            status: true,
        },
    ];
    return <Room room="bedroom" data={data} amount={data.length} />;
}

export default Bedroom;
