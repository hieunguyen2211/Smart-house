import React, { useState } from 'react';
import { Icon } from 'antd';
import { Progress } from 'antd';
import ParametersDetails from './Parameters';
import './Details.css';
function Details(props) {
    const [degree, setDegree] = useState(props.value);
    const titleButtonPower = props.status ? 'on' : 'off';
    let circleProgressContent = '';
    let circleProgressPercent = '';
    let deviceParams = '';

    switch (props.device) {
        case 'Air Conditioner':
            deviceParams = <ParametersDetails data={props.data} />;
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
        case 'Light':
            deviceParams = <ParametersDetails data={props.data} />;
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
