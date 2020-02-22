import * as types from './profileType';

const initialState = {
    loading: false,
    data: '',
    error: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_PROFILE_REQUEST:
            return {
                ...state,
                loading: true
            };

        case types.FETCH_PROFILE_SUCCESS:
            return {
                data: action.payload,
                error: '',
                loading: false
            };

        case types.FETCH_PROFILE_FAILURE:
            return {
                data: '',
                error: action.payload,
                loading: false
            };

        default:
            return state;
    }
};

export default reducer;
