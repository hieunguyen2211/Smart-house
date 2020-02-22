import * as types from './authenticateType';

const initialState = {
    access_token: '',
    error: '',
    loading: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN_REQUEST:
            return {
                ...state,
                loading: true
            };

        case types.LOGIN_SUCCESS:
            return {
                access_token: action.payload.token,
                error: '',
                loading: false
            };

        case types.LOGIN_FAILURE:
            return {
                access_token: '',
                error: action.payload,
                loading: false
            };

        default:
            return state;
    }
};

export default reducer;
