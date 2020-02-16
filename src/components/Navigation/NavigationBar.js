import React from 'react';
import NavigationItem from './NavigationItem';
import './NavigationBar.css';
function NavigationBar() {
    return (
        <div className="navigation-bar-container">
            <NavigationItem type="speech" url="speech" title="Speech" />
            <NavigationItem type="home" url="home" title="Home" />
            <NavigationItem type="profile" url="profile" title="Profile" />
            <NavigationItem type="setting" url="setting" title="Setting" />
        </div>
    );
}

export default NavigationBar;
