import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavigationBar from './components/Navigation/NavigationBar';
import HomePage from './pages/Home';
import DevicesPage from './pages/Devices';
import ProfilePage from './pages/Profile';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/devices" exact>
                    <DevicesPage />
                    <NavigationBar />
                </Route>
                <Route path="/profile" exact>
                    <ProfilePage />
                    <NavigationBar />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
