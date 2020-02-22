import { combineReducers } from 'redux';
import authenticateReducer from './authenticate/authenticateReducer';
import currentWeatherReducer from './currentWeather/currentWeatherReducer';
import profileReducer from './profile/profileReducer';
const rootReducer = combineReducers({
    auth: authenticateReducer,
    currentWeather: currentWeatherReducer,
    user: profileReducer
});

export default rootReducer;
