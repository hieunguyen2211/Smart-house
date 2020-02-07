import React from 'react';
import OtherParametersItem from '../Weather/Parameter';
import TemperatureItem from '../Weather/Temperature';
import * as icon from '@fortawesome/free-solid-svg-icons';
import './WeatherParameters.css';
function WeatherParameters() {
    return (
        <div className="parameters-header-title">
            <img
                className="parameters-header-title-image"
                src={
                    process.env.PUBLIC_URL +
                    '/images/background-weather/sunny.jpg'
                }
                alt="background-sunny"
            />
            <div className="parameters-header-title-image-overlay">
                <div className="container">
                    <div className="temperature">
                        <TemperatureItem
                            icon={icon.faCloudSun}
                            condition="Hot"
                            address="Da Nang City"
                            degree="38"
                        />
                    </div>
                    <div className="otherParameters">
                        <OtherParametersItem
                            icon={icon.faTint}
                            title="Humidity"
                            detail="20 %"
                            checkFixed={true}
                        />
                        <OtherParametersItem
                            icon={icon.faThermometer}
                            title="Pressure"
                            detail="24.25"
                            checkFixed={false}
                        />
                        <OtherParametersItem
                            icon={icon.faGasPump}
                            title="Gas"
                            detail="Safe"
                            checkFixed={false}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WeatherParameters;
