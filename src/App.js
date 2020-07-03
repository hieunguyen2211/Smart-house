import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import './App.css';
import LoginPage from './pages/Main/Login';
// import RegisterPage from './pages/Main/Register';
import AssistantPage from './pages/Main/Assistant';
import HomePage from './pages/Main/Home';
// import ProfilePage from './pages/Main/Profile';
// import SettingPage from './pages/Main/Setting';

//Features
import AllDevices from './pages/Device';
import Camera from './pages/Device/Camera';
// import AllModes from './pages/Feature/AllModes';
import Security from './pages/Feature/Security';

//Rooms
import Bedroom from './pages/Room/Bedroom';
import LivingRoom from './pages/Room/LivingRoom';
import Kitchen from './pages/Room/Kitchen';
import Garage from './pages/Room/Garage';
import Bathroom from './pages/Room/Bathroom';

//Security
import FaceRecog from './pages/Security/FaceRecog';
// import PinCode from './pages/Security/PinCode';
import Register from './pages/Security/Register';

//Others
// import ProfileDetailPage from './pages/Others/ProfileDetail';
// import ChangePasswordPage from './pages/Others/ChangePassword';

// import TestPage from './pages/Test';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/home" exact component={HomePage} />
          <Route path="/" exact component={LoginPage} />
          {/* <Route path="/register" exact component={RegisterPage} /> */}
          <Route path="/assistant" exact component={AssistantPage} />
          {/* <Route path="/home" exact component={HomePage} /> */}
          {/* <Route path="/profile" exact component={ProfilePage} />
                    <Route path="/setting" exact component={SettingPage} /> */}

          {/*----------- Features -------------*/}
          <Route path="/devices" exact component={AllDevices} />
          <Route path="/devices/camera" exact component={Camera} />
          <Route path="/security" exact component={Security} />
          {/*----------- Features -------------*/}

          {/*----------- Rooms -------------*/}
          <Route path="/rooms/bedroom" exact component={Bedroom} />
          <Route path="/rooms/livingroom" exact component={LivingRoom} />
          <Route path="/rooms/kitchen" exact component={Kitchen} />
          <Route path="/rooms/garage" exact component={Garage} />
          <Route path="/rooms/bathroom" exact component={Bathroom} />
          {/*----------- Rooms -------------*/}

          {/*----------- Security -------------*/}
          <Route path="/security/faceRecog" exact component={FaceRecog} />
          <Route path="/security/register" exact component={Register} />
          {/*----------- Security -------------*/}

          {/*----------- Others -------------*/}
          {/* <Route
                        path="/profile/detail"
                        exact
                        component={ProfileDetailPage}
                    />
                    <Route
                        path="/profile/changePassword"
                        exact
                        component={ChangePasswordPage}
                    /> */}
          {/*----------- Others -------------*/}
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
