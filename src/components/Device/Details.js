import React, { useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import { Progress, Icon, TimePicker } from 'antd';
import ParametersDetails from './Parameters';
import moment from 'moment';
import './Details.css';
import CircleSeparate5Segment from '../Content/5-CircleSeparate';
import CircleSeparate6Segment from '../Content/6-CircleSeparate';

function Details(props) {
    const data = [];

    props.totalData &&
        props.totalData.forEach(e => {
            e.id !== 1 && data.push(e);
        });

    const [level, setLevel] = useState(props.value);
    const titleButtonPower = props.status ? 'off' : 'on';
    const circleProgressContent = (
        <div className="device-detail-circle-progress-content progress-position">
            <Icon
                type="up"
                style={{ fontSize: '2vh', padding: '1vh' }}
                onClick={() => {
                    level < 3 && setLevel(level + 1);
                }}
            />
            <p>Lv.{level}</p>
            <Icon
                type="down"
                style={{ fontSize: '2vh', padding: '1vh' }}
                onClick={() => {
                    level > 1 && setLevel(level - 1);
                }}
            />
        </div>
    );
    const circleProgressPercent = (level / 3) * 100;
    const deviceParams = <ParametersDetails data={props.informationData} />;
    let deviceParamsFirst = '';
    let deviceParamsSecond = '';

    if (props.informationData.length > 2) {
        const dataFirst = [props.informationData[0], props.informationData[1]];
        const gasCondition = {
            ...props.informationData[2],
            value: props.informationData[2].value === true ? 'Safe' : 'Unsafe'
        };

        const dataSecond = [gasCondition, props.informationData[3]];
        deviceParamsFirst = <ParametersDetails data={dataFirst} />;
        deviceParamsSecond = <ParametersDetails data={dataSecond} />;
    }

    const onChangeTime = (time, timeString) => {
        console.log(timeString);
    };

    return props.deviceName === 'Information' ? (
        <div className="device-details-container information-container">
            {deviceParamsFirst}
            {data.length === 5 ? (
                <CircleSeparate5Segment data={data} />
            ) : (
                <CircleSeparate6Segment data={data} />
            )}

            {deviceParamsSecond}
        </div>
    ) : (
        <div className="device-details-container">
            {deviceParams}
            <div className="device-detail-content-container">
                <Progress
                    type="dashboard"
                    percent={circleProgressPercent}
                    width={200}
                    format={percent => ``}
                    strokeColor={{
                        '0%': '#3a7bd5',
                        '100%': '#00d2ff'
                    }}
                    gapDegree={90}
                    style={{ marginBottom: '-4vh' }}
                />
                {circleProgressContent}
                <div className="device-detail-time-wrapper">
                    <TimePicker
                        onChange={onChangeTime}
                        defaultValue={moment('00:00', 'HH:mm')}
                        format="HH:mm"
                        size="large"
                        style={{ width: '30vw' }}
                    />
                    <button className="device-detail-time-btn">
                        <FaPlay />
                    </button>
                </div>
                <button className="device-power-button">
                    {titleButtonPower}
                </button>
            </div>
        </div>
    );
}

export default Details;
