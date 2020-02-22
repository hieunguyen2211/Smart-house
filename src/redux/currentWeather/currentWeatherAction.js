import * as types from './currentWeatherType';

export const fetchWeatherRequest = () => {
    return {
        type: types.FETCH_WEATHER_REQUEST
    };
};

export const fetchWeatherSuccess = payload => {
    return {
        type: types.FETCH_WEATHER_SUCCESS,
        payload
    };
};

export const fetchWeatherFailure = payload => {
    return {
        type: types.FETCH_WEATHER_FAILURE,
        payload
    };
};
