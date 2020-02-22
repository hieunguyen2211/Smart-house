import { takeEvery, call, put } from 'redux-saga/effects';
import * as profileTask from './profileType';
import { getProfile } from '../../api/profile/index';
import { fetchProfileSuccess, fetchProfileFailure } from '../../redux/index';

function* watchFetchProfileAction() {
    try {
        const response = yield call(getProfile);
        const { data } = response;
        yield put(fetchProfileSuccess(data));
    } catch (error) {
        yield put(fetchProfileFailure(error));
    }
}

export default [
    takeEvery(profileTask.FETCH_PROFILE_REQUEST, watchFetchProfileAction)
];
