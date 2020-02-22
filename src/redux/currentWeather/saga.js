import { takeEvery, call, put } from 'redux-saga/effects';
import * as currentWeatherTask from './currentWeatherType';
import { getWeather } from '../../api/currentWeather/index';
import { fetchWeatherSuccess, fetchWeatherFailure } from '../../redux/index';

function* watchFetchWeatherAction() {
    try {
        const response = yield call(getWeather);
        const { data } = response;
        yield put(fetchWeatherSuccess(data));
    } catch (error) {
        yield put(fetchWeatherFailure(error));
    }
}

export default [
    takeEvery(currentWeatherTask.FETCH_WEATHER_REQUEST, watchFetchWeatherAction)
];
