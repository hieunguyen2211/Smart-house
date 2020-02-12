import React from 'react';
import ControlHeader from '../components/Header/Control';
import NavigationBar from '../components/Navigation/NavigationBar';
import MenuRec from '../components/Menu/MenuRec';
function Setting() {
    return (
        <div className="page-container">
            <div>
                <ControlHeader title="setting" path="/" colorText="white" />
                <br /> <br /> <br /> <br />
                <MenuRec />
            </div>
            <div>
                <NavigationBar />
            </div>
        </div>
    );
}

export default Setting;
