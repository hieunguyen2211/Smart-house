import React from 'react';
import ControlHeader from '../../components/Header/Control';
import NavigationBar from '../../components/Navigation/NavigationBar';
function Devices() {
    return (
        <div className="page-container">
            <ControlHeader title="speech" path="/home" colorText="white" />
            <NavigationBar />
        </div>
    );
}

export default Devices;
