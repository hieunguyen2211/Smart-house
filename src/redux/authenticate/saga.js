import { takeEvery, call, put } from 'redux-saga/effects';
import * as authTaskTypes from './authenticateType';
import { login } from '../../api/authenticate/index';
import { loginSuccess, loginFailure } from '../../redux/index';

function* saveTokenToStore(data) {
    yield localStorage.setItem('access_token', data.token);
}

function* watchFetchLoginAction({ payload }) {
    try {
        const response = yield call(login, payload);
        const { data } = response;
        yield call(saveTokenToStore, data);
        yield put(loginSuccess(data));
    } catch (error) {
        yield put(loginFailure('Username or password is incorrect.'));
    }
}

export default [takeEvery(authTaskTypes.LOGIN_REQUEST, watchFetchLoginAction)];
