import React from "react";
import Room from "../../container/Room";
function Bathroom() {
    const data = [
        {
            id: 1,
            name: "Light",
            iconName: "Light",
            status: true,
        },
    ];
    return <Room room="bathroom" data={data} amount={data.length} />;
}

export default Bathroom;
