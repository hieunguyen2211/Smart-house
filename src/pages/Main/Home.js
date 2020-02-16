import React from 'react';
import NavigationBar from '../../components/Navigation/NavigationBar';
import MenuSquare from '../../components/Menu/MenuSquare';
import HomePageHeader from '../../components/Header/WeatherParameters';
import './Home.css';

const data = [
    {
        id: 1,
        rowData: [
            {
                id: 1,
                name: 'Rooms',
                iconUrl: '/main/Home/rooms',
                path: '/rooms'
            },
            {
                id: 2,
                name: 'Devices',
                iconUrl: '/main/Home/devices',
                path: '/home'
            }
        ]
    },
    {
        id: 2,
        rowData: [
            {
                id: 3,
                name: 'Modes',
                iconUrl: '/main/Home/modes',
                path: '/home'
            },
            {
                id: 4,
                name: 'Security',
                iconUrl: '/main/Home/security',
                path: '/home'
            }
        ]
    },
    {
        id: 3,
        rowData: [
            {
                id: 4,
                name: 'Activities',
                iconUrl: '/main/Home/activities',
                path: '/home'
            },
            {
                id: 5,
                name: 'Statistics',
                iconUrl: '/main/Home/statistics',
                path: '/home'
            }
        ]
    }
];

function Home() {
    return (
        <div className="page-container">
            <HomePageHeader />
            <div className="home-menu-wrapper">
                <MenuSquare data={data} subTitle={false} />
            </div>

            <NavigationBar />
        </div>
    );
}

export default Home;
