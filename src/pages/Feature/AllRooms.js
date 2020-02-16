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
                iconUrl: '/rooms/bed',
                path: '/rooms/bedroom'
            },
            {
                id: 2,
                name: 'Living Room',
                iconUrl: '/rooms/living',
                path: '/rooms/livingroom'
            }
        ],
        id: 1
    },
    {
        rowData: [
            {
                id: 3,
                name: 'Kitchen',
                iconUrl: '/rooms/kitchen',
                path: '/rooms/kitchen'
            },
            {
                id: 4,
                name: 'Dining Room',
                iconUrl: '/rooms/dining',
                path: '/rooms/diningroom'
            }
        ],
        id: 2
    },
    {
        rowData: [
            {
                id: 5,
                name: 'Laundry',
                iconUrl: '/rooms/laundry',
                path: '/rooms/laundry'
            },
            {
                id: 6,
                name: 'Bathroom',
                iconUrl: '/rooms/bath',
                path: '/rooms/bathroom'
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
                <MenuSquare data={data} subTitle={true} />
            </div>

            <NavigationBar />
        </div>
    );
}

export default AllRooms;
