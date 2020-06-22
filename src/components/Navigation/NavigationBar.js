import React from "react";
import NavigationItem from "./NavigationItem";
import "./NavigationBar.css";
function NavigationBar() {
    return (
        <div className="navigation-bar-container">
            <NavigationItem type="home" url="home" title="Home" />
            <NavigationItem type="device" url="devices" title="Devices" />
            <NavigationItem type="security" url="security" title="Security" />
            <NavigationItem
                type="assistant"
                url="assistant"
                title="Assistant"
            />
        </div>
    );
}

export default NavigationBar;
