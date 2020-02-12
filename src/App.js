import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavigationBar from './components/Navigation/NavigationBar';
import SpeechPage from './pages/Speech';
import HomePage from './pages/Home';
import ProfilePage from './pages/Profile';
import SettingPage from './pages/Setting';

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

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/speech" exact>
                    <SpeechPage />
                    <NavigationBar />
                </Route>
                <Route path="/" exact component={HomePage} />
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
            </Switch>
        </BrowserRouter>
    );
}

export default App;
