import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavigationBar from './components/Navigation/NavigationBar';
import './App.css';
import LoginPage from './pages/Main/Login';
import RegisterPage from './pages/Main/Register';
import SpeechPage from './pages/Main/Speech';
import HomePage from './pages/Main/Home';
import ProfilePage from './pages/Main/Profile';
import SettingPage from './pages/Main/Setting';

//Rooms
import AllRooms from './pages/Feature/AllRooms';

import Bedroom from './pages/Room/Bedroom';
import LivingRoom from './pages/Room/LivingRoom';
import Kitchen from './pages/Room/Kitchen';
import DiningRoom from './pages/Room/DiningRoom';
import Laundry from './pages/Room/Laundry';
import Bathroom from './pages/Room/Bathroom';

//Devices
import LightDevice from './pages/Device/Light';

//Others
import ProfileDetailPage from './pages/Others/ProfileDetail';
import ChangePasswordPage from './pages/Others/ChangePassword';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={LoginPage} />
                <Route path="/register" exact component={RegisterPage} />
                <Route path="/speech" exact>
                    <SpeechPage />
                    <NavigationBar />
                </Route>
                <Route path="/home" exact component={HomePage} />
                <Route path="/profile" exact>
                    <ProfilePage />
                    <NavigationBar />
                </Route>

                <Route path="/setting" exact component={SettingPage} />

                {/*----------- Rooms -------------*/}
                <Route path="/rooms" exact component={AllRooms} />
                {/*----- Bedroom --------*/}
                <Route path="/rooms/bedroom" exact>
                    <Bedroom />
                </Route>
                <Route path="/rooms/bedroom/light" exact>
                    <LightDevice roomName="bedroom" typeDevice="Light" />
                </Route>
                {/*----- Bedroom --------*/}
                <Route path="/rooms/livingroom" exact>
                    <LivingRoom />
                </Route>
                <Route path="/rooms/kitchen" exact>
                    <Kitchen />
                </Route>
                <Route path="/rooms/diningroom" exact>
                    <DiningRoom />
                </Route>
                <Route path="/rooms/laundry" exact>
                    <Laundry />
                </Route>
                <Route path="/rooms/bathroom" exact>
                    <Bathroom />
                </Route>
                {/* Rooms */}

                {/* Others */}
                <Route path="/profile/detail" exact>
                    <ProfileDetailPage />
                </Route>
                <Route path="/profile/changePassword" exact>
                    <ChangePasswordPage />
                </Route>
                {/* Others */}
            </Switch>
        </BrowserRouter>
    );
}

export default App;
