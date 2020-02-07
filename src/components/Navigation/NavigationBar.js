import React from 'react';
import NavigationItem from './NavigationItem';

function NavigationBar() {
    return (
        <div style={{ display: 'flex' }}>
            <NavigationItem nameIcon="appstore" url="devices" />
            <NavigationItem nameIcon="home" url="" />
            <NavigationItem nameIcon="user" url="profile" />
        </div>
    );
}

export default NavigationBar;
