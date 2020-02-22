import { all } from 'redux-saga/effects';
import authSaga from './authenticate/saga';
import currentWeatherSaga from './currentWeather/saga';
import profileSaga from './profile/saga';
export default function* rootSaga() {
    yield all([...authSaga, ...currentWeatherSaga, ...profileSaga]);
}
