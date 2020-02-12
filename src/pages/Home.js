import React from 'react';
import NavigationBar from '../components/Navigation/NavigationBar';
import MenuSquare from '../components/Menu/MenuSquare';
import HomePageHeader from '../components/Header/WeatherParameters';
import './Home.css';

const data = [
    {
        rowData: [
            {
                id: 1,
                name: 'My Rooms',
                iconUrl: '/main/allRoom',
                path: '/rooms'
            },
            { id: 2, name: 'My Rooms', iconUrl: '/main/allRoom', path: '/' }
        ],
        id: 1
    },
    {
        rowData: [
            { id: 3, name: 'My Rooms', iconUrl: '/main/allRoom', path: '/' },
            { id: 4, name: 'Statistic', iconUrl: '/main/allRoom', path: '/' }
        ],
        id: 2
    }
];

function Home() {
    return (
        <div className="page-container">
            <div>
                <HomePageHeader />
                <br />
                <MenuSquare data={data} subTitle={false} />
            </div>

            <div>
                <NavigationBar />
            </div>
        </div>
    );
}

export default Home;
