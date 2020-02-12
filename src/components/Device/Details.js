import React, { useState } from 'react';
import PowerButton from '../Button/Power';
import { Icon } from 'antd';
import { Progress } from 'antd';
import './Details.css';
function Details(props) {
    const [degree, setDegree] = useState(20);
    const titleButtonPower = props.deviceStatus === 'active' ? 'off' : 'on';
    let circleProgressContent = '';
    let circleProgressPercent = '';
    let deviceParams = '';
    switch (props.device) {
        case 'airConditioner':
            deviceParams = (
                <div className="device-primary-details">
                    <div className="device-params-container">
                        <h3>Temperature</h3>
                        <h2>30 °C</h2>
                    </div>
                    <div className="device-params-container">
                        <h3>Humidity</h3>
                        <h2>0.8 %</h2>
                    </div>
                </div>
            );
            circleProgressContent = (
                <div className="device-detail-circle-progress-content progress-position">
                    <Icon
                        type="up"
                        style={{ fontSize: '2vh', padding: '1vh' }}
                        onClick={() => {
                            setDegree(degree + 1);
                        }}
                    />
                    <p>{degree} °C</p>
                    <Icon
                        type="down"
                        style={{ fontSize: '2vh', padding: '1vh' }}
                        onClick={() => {
                            setDegree(degree - 1);
                        }}
                    />
                </div>
            );
            circleProgressPercent = (degree / 50) * 100;
            break;
        case 'light':
            deviceParams = (
                <div className="device-primary-details">
                    <div className="device-params-container">
                        <h3>Total Working Hrs</h3>
                        <h2>12.5</h2>
                    </div>
                    <div className="device-params-container">
                        <h3>Maximum Power</h3>
                        <h2>80 W</h2>
                    </div>
                </div>
            );
            circleProgressContent = (
                <div className="device-detail-circle-progress-content progress-position">
                    <p style={{ color: '#f53d2d' }}>01:28</p>
                </div>
            );
            circleProgressPercent = 100;
            break;
        default:
            break;
    }
    return (
        <div className="device-details-container">
            {deviceParams}
            <div className="device-detail-content-container">
                <Progress
                    type="dashboard"
                    percent={circleProgressPercent}
                    style={{ padding: '2vh' }}
                    width={200}
                    format={percent => ``}
                    strokeColor={'#f63'}
                    gapDegree={90}
                />
                {circleProgressContent}
                <button className="device-power-button">
                    {titleButtonPower}
                </button>
            </div>
        </div>
    );
}

export default Details;
