import React from 'react';
import ControlHeader from '../../components/Header/Control';
import NavigationBar from '../../components/Navigation/NavigationBar';
import MenuSquare from '../../components/Menu/MenuSquare';

const data = [
    {
        rowData: [
            {
                id: 1,
                name: 'Light',
                iconUrl: '/devices/color/light',
                path: '/rooms/bedroom'
            },
            {
                id: 2,
                name: 'Fan',
                iconUrl: '/devices/color/fan',
                path: '/rooms/livingroom'
            }
        ],
        id: 1
    },
    {
        rowData: [
            {
                id: 3,
                name: 'Window',
                iconUrl: '/devices/color/window',
                path: '/rooms/kitchen'
            },
            {
                id: 4,
                name: 'Curtain',
                iconUrl: '/devices/color/curtain',
                path: '/rooms/diningroom'
            }
        ],
        id: 2
    },
    {
        rowData: [
            {
                id: 5,
                name: 'Door',
                iconUrl: '/devices/color/door',
                path: '/rooms/laundry'
            },
            {
                id: 6,
                name: 'Camera',
                iconUrl: '/devices/color/camera',
                path: '/rooms/bathroom'
            }
        ],
        id: 3
    }
];

function AllDevices() {
    return (
        <div className="page-container">
            <ControlHeader title="devices" path="/home" />
            <div className="page-content-wrapper">
                <MenuSquare data={data} subTitle={true} heightCard="22vh" />
            </div>

            <NavigationBar />
        </div>
    );
}

export default AllDevices;
