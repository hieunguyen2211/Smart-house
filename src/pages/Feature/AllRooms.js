import React from 'react';
import ControlHeader from '../../components/Header/Control';
import NavigationBar from '../../components/Navigation/NavigationBar';
import MenuSquare from '../../components/Menu/MenuSquare';
import './AllRooms.css';
const data = [
    {
        rowData: [
            {
                id: 1,
                name: 'Bedroom',
                iconUrl: '/rooms/color/bed',
                path: '/rooms/bedroom',
                amount: 5,
                unit: 'Devices'
            },
            {
                id: 2,
                name: 'Living Room',
                iconUrl: '/rooms/color/living',
                path: '/rooms/livingroom',
                amount: 5,
                unit: 'Devices'
            }
        ],
        id: 1
    },
    {
        rowData: [
            {
                id: 3,
                name: 'Kitchen',
                iconUrl: '/rooms/color/kitchen',
                path: '/rooms/kitchen',
                amount: 5,
                unit: 'Devices'
            },
            {
                id: 4,
                name: 'Dining Room',
                iconUrl: '/rooms/color/dining',
                path: '/rooms/diningroom',
                amount: 5,
                unit: 'Devices'
            }
        ],
        id: 2
    },
    {
        rowData: [
            {
                id: 5,
                name: 'Bathroom',
                iconUrl: '/rooms/color/bath',
                path: '/rooms/bathroom',
                amount: 5,
                unit: 'Devices'
            },
            {
                id: 6,
                name: 'Garage',
                iconUrl: '/rooms/color/garage',
                path: '/rooms/garage',
                amount: 5,
                unit: 'Devices'
            }
        ],
        id: 3
    }
];
function AllRooms() {
    return (
        <div className="page-container">
            <ControlHeader title="rooms" path="/home" />
            <div className="page-content-wrapper">
                <MenuSquare data={data} subTitle={true} heightCard="22vh" />
            </div>

            <NavigationBar />
        </div>
    );
}

export default AllRooms;
