import React from 'react';
import ControlHeader from '../../components/Header/Control';
import NavigationBar from '../../components/Navigation/NavigationBar';
import MenuSquare from '../../components/Menu/MenuSquare';
import './AllModes.css';
const data = [
    {
        rowData: [
            {
                id: 1,
                name: 'Return Home',
                iconUrl: '/modes/color/returnHome',
                path: '/modes'
            },
            {
                id: 2,
                name: 'Leave Home',
                iconUrl: '/modes/color/leaveHome',
                path: '/modes'
            }
        ],
        id: 1
    },
    {
        rowData: [
            {
                id: 3,
                name: 'Visitors',
                iconUrl: '/modes/color/visitors',
                path: '/modes'
            },
            {
                id: 4,
                name: 'Go To Bed',
                iconUrl: '/modes/color/goToBed',
                path: '/modes'
            }
        ],
        id: 2
    },
    {
        rowData: [
            {
                id: 5,
                name: 'Off Energy',
                iconUrl: '/modes/color/offEnergy',
                path: '/modes'
            },
            {
                id: 6,
                name: 'Customize',
                iconUrl: '/modes/color/customize',
                path: '/modes'
            }
        ],
        id: 3
    }
];
function AllModes() {
    return (
        <div className="page-container">
            <ControlHeader title="modes" path="/home" />
            <div className="page-content-wrapper">
                <MenuSquare data={data} subTitle={false} heightCard="22vh" />
            </div>

            <NavigationBar />
        </div>
    );
}

export default AllModes;
