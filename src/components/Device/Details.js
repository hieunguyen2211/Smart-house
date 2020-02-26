import React, { useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import { Progress, Icon, TimePicker } from 'antd';
import ParametersDetails from './Parameters';
import moment from 'moment';
import './Details.css';

const urlIconSelected =
    process.env.PUBLIC_URL + '/icons/devices/content/selected';
const urlIconUnselected =
    process.env.PUBLIC_URL + '/icons/devices/content/unselected';
const pathIcon = [
    {
        name: 'fan',
        selected: urlIconSelected + '/Fan.svg',
        unselected: urlIconUnselected + '/Fan.svg',
        status: false
    },
    {
        name: 'light',
        selected: urlIconSelected + '/Light.svg',
        unselected: urlIconUnselected + '/Light.svg',
        status: true
    },
    {
        name: 'windows',
        selected: urlIconSelected + '/Windows.svg',
        unselected: urlIconUnselected + '/Windows.svg',
        status: true
    },
    {
        name: 'door',
        selected: urlIconSelected + '/Door.svg',
        unselected: urlIconUnselected + '/Door.svg',
        status: true
    },
    {
        name: 'curtains',
        selected: urlIconSelected + '/Curtains.svg',
        unselected: urlIconUnselected + '/Curtains.svg',
        status: true
    }
];

function Details(props) {
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
    const deviceParams = <ParametersDetails data={props.data} />;
    let deviceParamsFirst = '';
    let deviceParamsSecond = '';
    if (props.data.length > 2) {
        const dataFirst = [props.data[0], props.data[1]];
        const dataSecond = [props.data[2], props.data[3]];
        dataSecond[0].value = dataSecond[0].value === true ? 'Safe' : 'Unsafe';
        deviceParamsFirst = <ParametersDetails data={dataFirst} />;
        deviceParamsSecond = <ParametersDetails data={dataSecond} />;
    }

    const onChangeTime = (time, timeString) => {
        console.log(timeString);
    };

    // switch (props.device) {
    //     case 'Fan':
    //         deviceParams = <ParametersDetails data={props.data} />;
    //         circleProgressContent = (
    //             <div className="device-detail-circle-progress-content progress-position">
    //                 <Icon
    //                     type="up"
    //                     style={{ fontSize: '2vh', padding: '1vh' }}
    //                     onClick={() => {
    //                         level < 3 && setLevel(level + 1);
    //                     }}
    //                 />
    //                 <p>Lv {level}</p>
    //                 <Icon
    //                     type="down"
    //                     style={{ fontSize: '2vh', padding: '1vh' }}
    //                     onClick={() => {
    //                         level > 1 && setLevel(level - 1);
    //                     }}
    //                 />
    //             </div>
    //         );
    //         circleProgressPercent = (level / 3) * 100;
    //         break;
    //     case 'Light':
    //         deviceParams = <ParametersDetails data={props.data} />;
    //         circleProgressContent = (
    //             <div className="device-detail-circle-progress-content progress-position">
    //                 <Icon
    //                     type="up"
    //                     style={{ fontSize: '2vh', padding: '1vh' }}
    //                     onClick={() => {
    //                         level < 3 && setLevel(level + 1);
    //                     }}
    //                 />
    //                 <p>Lv {level}</p>
    //                 <Icon
    //                     type="down"
    //                     style={{ fontSize: '2vh', padding: '1vh' }}
    //                     onClick={() => {
    //                         level > 1 && setLevel(level - 1);
    //                     }}
    //                 />
    //             </div>
    //         );
    //         circleProgressPercent = (level / 3) * 100;
    //         break;
    //     case 'Windows':
    //         deviceParams = <ParametersDetails data={props.data} />;
    //         circleProgressContent = (
    //             <div className="device-detail-circle-progress-content progress-position">
    //                 <p style={{ color: '#f53d2d' }}>01:28</p>
    //             </div>
    //         );
    //         circleProgressPercent = 100;
    //         break;
    //     default:
    //         break;
    // }
    return props.deviceName === 'Information' ? (
        <div className="device-details-container information-container">
            {deviceParamsFirst}
            {pathIcon.map(e => (
                <img
                    src={e.selected}
                    className={`card-item-content-icon detail-circle-icon-${e.name}`}
                    alt="icon"
                />
            ))}

            <ul className="circle">
                {pathIcon.map(e =>
                    e.status ? (
                        <li>
                            <div
                                className="text"
                                style={{ background: '#0ab013' }}
                            ></div>
                        </li>
                    ) : (
                        <li>
                            <div
                                className="text"
                                style={{ background: '#9e9c9c' }}
                            ></div>
                        </li>
                    )
                )}
            </ul>
            <div className="device-details-circle-center"></div>
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
                        '0%': '#9aff59',
                        '50%': '#fcdb2b',
                        '100%': '#f63'
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
