import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import './App.css';
import LoginPage from './pages/Main/Login';
import RegisterPage from './pages/Main/Register';
import SpeechPage from './pages/Main/Speech';
import HomePage from './pages/Main/Home';
import ProfilePage from './pages/Main/Profile';
import SettingPage from './pages/Main/Setting';

//Features
import AllRooms from './pages/Feature/AllRooms';
import AllDevices from './pages/Feature/AllDevices';
import AllModes from './pages/Feature/AllModes';
import Security from './pages/Feature/Security';

//Rooms
import Bedroom from './pages/Room/Bedroom';
import LivingRoom from './pages/Room/LivingRoom';
import Kitchen from './pages/Room/Kitchen';
import DiningRoom from './pages/Room/DiningRoom';
import Garage from './pages/Room/Garage';
import Bathroom from './pages/Room/Bathroom';

//Devices
import Fan from './pages/Device/Fan';
import Light from './pages/Device/Light';
import Windows from './pages/Device/Windows';
import Curtains from './pages/Device/Curtains';
import Door from './pages/Device/Door';
import Camera from './pages/Device/Camera';

//Security
import FaceRecog from './pages/Security/FaceRecog';
import PinCode from './pages/Security/PinCode';

//Others
import ProfileDetailPage from './pages/Others/ProfileDetail';
import ChangePasswordPage from './pages/Others/ChangePassword';

import TestPage from './pages/Test';

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route path="/test" exact component={TestPage} />
                    <Route path="/" exact component={LoginPage} />
                    <Route path="/register" exact component={RegisterPage} />
                    <Route path="/speech" exact component={SpeechPage} />
                    <Route path="/home" exact component={HomePage} />
                    <Route path="/profile" exact component={ProfilePage} />
                    <Route path="/setting" exact component={SettingPage} />

                    {/*----------- Features -------------*/}
                    <Route path="/rooms" exact component={AllRooms} />
                    <Route path="/devices" exact component={AllDevices} />
                    <Route path="/modes" exact component={AllModes} />
                    <Route path="/security" exact component={Security} />
                    {/*----------- Features -------------*/}

                    {/*----------- Rooms -------------*/}
                    <Route path="/rooms/bedroom" exact component={Bedroom} />
                    <Route
                        path="/rooms/livingroom"
                        exact
                        component={LivingRoom}
                    />
                    <Route path="/rooms/kitchen" exact component={Kitchen} />
                    <Route
                        path="/rooms/diningroom"
                        exact
                        component={DiningRoom}
                    />
                    <Route path="/rooms/Garage" exact component={Garage} />
                    <Route path="/rooms/bathroom" exact component={Bathroom} />
                    {/*----------- Rooms -------------*/}

                    {/*----------- Devices -------------*/}
                    <Route path="/devices/fan" exact component={Fan} />
                    <Route path="/devices/light" exact component={Light} />
                    <Route path="/devices/windows" exact component={Windows} />
                    <Route
                        path="/devices/curtains"
                        exact
                        component={Curtains}
                    />
                    <Route path="/devices/door" exact component={Door} />
                    <Route path="/devices/camera" exact component={Camera} />
                    {/*----------- Devices -------------*/}

                    {/*----------- Security -------------*/}
                    <Route
                        path="/security/faceRecog"
                        exact
                        component={FaceRecog}
                    />

                    <Route path="/security/pinCode" exact component={PinCode} />
                    {/*----------- Security -------------*/}

                    {/*----------- Others -------------*/}
                    <Route
                        path="/profile/detail"
                        exact
                        component={ProfileDetailPage}
                    />
                    <Route
                        path="/profile/changePassword"
                        exact
                        component={ChangePasswordPage}
                    />
                    {/*----------- Others -------------*/}
                </Switch>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
