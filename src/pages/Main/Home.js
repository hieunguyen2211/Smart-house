import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeatherRequest } from '../../redux/currentWeather/currentWeatherAction';
import NavigationBar from '../../components/Navigation/NavigationBar';
import MenuSquare from '../../components/Menu/MenuSquare';
import HomePageHeader from '../../components/Header/WeatherParameters';
import './Home.css';

import SyncLoader from 'react-spinners/SyncLoader';

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
                path: '/devices'
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
                path: '/modes'
            },
            {
                id: 4,
                name: 'Security',
                iconUrl: '/main/Home/security',
                path: '/security'
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
    const currentWeatherData = useSelector(state => state.currentWeather);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchWeatherRequest());
        setTimeout(() => {
            setLoading(false);
        }, 500);
    }, [dispatch]);
    // return loading ? (
    //     <div className="page-container" style={{ background: 'white' }}>
    //         <div className="page-content-wrapper">
    //             <SyncLoader size={20} color={'#3a7bd5'} loading={loading} />
    //         </div>
    //         <NavigationBar />
    //     </div>
    // ) : (
    return (
        <div className="page-container">
            <HomePageHeader data={currentWeatherData.currentWeather} />
            <div className="home-menu-wrapper">
                <MenuSquare data={data} subTitle={false} heightCard="17vh" />
            </div>

            <NavigationBar />
        </div>
    );
}

export default Home;
