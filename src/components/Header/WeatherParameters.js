import React from 'react';
import OtherParametersItem from '../Weather/Parameter';
import TemperatureItem from '../Weather/Temperature';
import * as icon from '@fortawesome/free-solid-svg-icons';
import './index.css';
function WeatherParameters(props) {
    return (
        <div className="header-title">
            <img
                className="header-title-image"
                src={
                    process.env.PUBLIC_URL +
                    `/images/background-weather/${props.data &&
                        props.data.weather[0].main}.jpg`
                }
                alt="background-sunny"
            />
            <div className="header-title-image-overlay">
                <div className="container-weather">
                    <div className="temperature">
                        <TemperatureItem
                            icon={icon.faCloudSun}
                            condition={props.data && props.data.weather[0].main}
                            address={props.data && props.data.name}
                            degree={props.data && props.data.main.temp}
                        />
                    </div>
                    <div className="otherParameters">
                        <OtherParametersItem
                            icon={icon.faTint}
                            title="Humidity"
                            unit="%"
                            detail={props.data && props.data.main.humidity}
                            checkFixed={true}
                        />
                        <OtherParametersItem
                            icon={icon.faThermometer}
                            title="Pressure"
                            unit="hPa"
                            detail={props.data && props.data.main.pressure}
                            checkFixed={false}
                        />
                        <OtherParametersItem
                            icon={icon.faWind}
                            title="Wind"
                            unit="m/s"
                            detail={props.data && props.data.wind.speed}
                            checkFixed={false}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WeatherParameters;
