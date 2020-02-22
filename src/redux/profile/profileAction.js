import * as types from './profileType';

export const fetchProfileRequest = () => {
    return {
        type: types.FETCH_PROFILE_REQUEST
    };
};

export const fetchProfileSuccess = payload => {
    return {
        type: types.FETCH_PROFILE_SUCCESS,
        payload
    };
};

export const fetchProfileFailure = payload => {
    return {
        type: types.FETCH_PROFILE_FAILURE,
        payload
    };
};
