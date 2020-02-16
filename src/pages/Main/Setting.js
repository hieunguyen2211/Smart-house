import React from 'react';
import ControlHeader from '../../components/Header/Control';
import NavigationBar from '../../components/Navigation/NavigationBar';
import MenuRec from '../../components/Menu/MenuRec';
import { Switch, Select } from 'antd';
function Setting() {
    const { Option } = Select;
    const data = [
        {
            id: 1,
            icon: {
                url:
                    process.env.PUBLIC_URL + '/icons/main/Setting/language.svg',
                style: {
                    width: '17vw',
                    margin: '4vw'
                }
            },
            title: 'Language',
            subTitle: 'Choose your language',
            subComponent: (
                <Select
                    defaultValue="english"
                    style={{ width: '60vw', marginRight: '4vw' }}
                >
                    <Option value="english">English</Option>
                    <Option value="vietnamese">Vietnamese</Option>
                </Select>
            )
        },
        {
            id: 2,
            icon: {
                url:
                    process.env.PUBLIC_URL +
                    '/icons/main/Setting/dark-mode.svg',
                style: {
                    width: '17vw',
                    margin: '4vw'
                }
            },

            title: 'Dark mode',
            subTitle: 'Enable or disable dark mode',
            subComponent: <Switch style={{ marginRight: '4vw' }} />
        },
        {
            id: 3,
            icon: {
                url: process.env.PUBLIC_URL + '/icons/main/Setting/sound.svg',
                style: {
                    width: '17vw',
                    margin: '4vw'
                }
            },
            title: 'Sound',
            subTitle: 'Enable or disable sound effects',
            subComponent: (
                <Switch style={{ marginRight: '4vw' }} defaultChecked />
            )
        },
        {
            id: 4,
            icon: {
                url:
                    process.env.PUBLIC_URL +
                    '/icons/main/Setting/notification.svg',
                style: {
                    width: '17vw',
                    margin: '4vw'
                }
            },
            title: 'Notification',
            subTitle: 'Enable or disable notifications',
            subComponent: (
                <Switch style={{ marginRight: '4vw' }} defaultChecked />
            )
        },
        {
            id: 5,
            icon: {
                url: process.env.PUBLIC_URL + '/icons/main/Setting/garbage.svg',
                style: {
                    width: '17vw',
                    margin: '4vw'
                }
            },
            title: 'Delete all set up',
            subTitle: 'Delete all saved mode, display',
            subComponent: <div></div>
        }
    ];
    return (
        <div className="page-container">
            <ControlHeader title="setting" path="/home" colorText="white" />
            <div className="page-content-wrapper">
                <MenuRec data={data} />
            </div>

            <NavigationBar />
        </div>
    );
}

export default Setting;
