import React, { useState } from 'react';
import { Icon } from 'antd';
import { Progress } from 'antd';
import ParametersDetails from './Parameters';
import './Details.css';
function Details(props) {
    const [degree, setDegree] = useState(20);
    const titleButtonPower = props.deviceStatus === 'active' ? 'off' : 'on';
    let circleProgressContent = '';
    let circleProgressPercent = '';
    let deviceParams = '';
    const deviceData = [
        {
            name: 'airConditioner',
            data: [
                { title: 'Temperature', value: '30 °C' },
                { title: 'Humidity', value: '0.8 %' }
            ]
        },
        {
            name: 'light',
            data: [
                { title: 'Total Working', value: '12.5 Hrs' },
                { title: 'Maximum Power', value: '80 W' }
            ]
        }
    ];

    switch (props.device) {
        case 'airConditioner':
            deviceParams = <ParametersDetails data={deviceData[0].data} />;
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
            deviceParams = <ParametersDetails data={deviceData[1].data} />;
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
