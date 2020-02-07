import React from 'react';
import NavigationBar from '../components/Navigation/NavigationBar';
import CardMenu from '../components/Item/Menu';
import HomePageHeader from '../components/Header/WeatherParameters';
import './Home.css';

function Home() {
    return (
        <div className="page-home-container">
            <div>
                <HomePageHeader />
                <br />
                <CardMenu />
            </div>

            <div className="page-home-content">
                <NavigationBar />
            </div>
        </div>
    );
}

export default Home;
