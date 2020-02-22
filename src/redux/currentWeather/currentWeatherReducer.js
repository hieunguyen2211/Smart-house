import * as types from './currentWeatherType';

const initialState = {
    loading: false,
    currentWeather: '',
    error: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_WEATHER_REQUEST:
            return {
                ...state,
                loading: true
            };

        case types.FETCH_WEATHER_SUCCESS:
            return {
                currentWeather: action.payload,
                error: '',
                loading: false
            };

        case types.FETCH_WEATHER_FAILURE:
            return {
                currentWeather: '',
                error: action.payload,
                loading: false
            };

        default:
            return state;
    }
};

export default reducer;
