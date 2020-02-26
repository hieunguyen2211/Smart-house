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
                path: '/devices/light'
            },
            {
                id: 2,
                name: 'Fan',
                iconUrl: '/devices/color/fan',
                path: '/devices/fan'
            }
        ],
        id: 1
    },
    {
        rowData: [
            {
                id: 3,
                name: 'Windows',
                iconUrl: '/devices/color/window',
                path: '/devices/windows'
            },
            {
                id: 4,
                name: 'Curtains',
                iconUrl: '/devices/color/curtain',
                path: '/devices/curtains'
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
                path: '/devices/door'
            },
            {
                id: 6,
                name: 'Camera',
                iconUrl: '/devices/color/camera',
                path: '/devices/camera'
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
