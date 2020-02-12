import React from 'react';
import NavigationItem from './NavigationItem';

function NavigationBar() {
    return (
        <div style={{ display: 'flex' }}>
            <NavigationItem type="speech" url="speech" title="Speech" />
            <NavigationItem type="home" url="" title="Home" />
            <NavigationItem type="profile" url="profile" title="Profile" />
            <NavigationItem type="setting" url="setting" title="Setting" />
        </div>
    );
}

export default NavigationBar;
