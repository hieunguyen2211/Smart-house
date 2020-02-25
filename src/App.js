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
import Laundry from './pages/Room/Laundry';
import Bathroom from './pages/Room/Bathroom';

//Security
import FaceRecog from './pages/Security/FaceRecog';
import PinCode from './pages/Security/PinCode';

//Others
import ProfileDetailPage from './pages/Others/ProfileDetail';
import ChangePasswordPage from './pages/Others/ChangePassword';

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
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
                    {/*----- Bedroom --------*/}
                    <Route path="/rooms/bedroom" exact>
                        <Bedroom />
                    </Route>
                    {/*----- Bedroom --------*/}
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
                    <Route path="/rooms/laundry" exact component={Laundry} />
                    <Route path="/rooms/bathroom" exact component={Bathroom} />
                    {/*----------- Rooms -------------*/}

                    {/*----------- Security -------------*/}
                    <Route
                        path="/security/faceRecog"
                        exact
                        component={FaceRecog}
                    />

                    <Route path="/security/pinCode" exact component={PinCode} />
                    {/*----------- Security -------------*/}

                    {/*----------- Others -------------*/}
                    <Route path="/profile/detail" exact>
                        <ProfileDetailPage />
                    </Route>
                    <Route path="/profile/changePassword" exact>
                        <ChangePasswordPage />
                    </Route>
                    {/*----------- Others -------------*/}
                </Switch>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
