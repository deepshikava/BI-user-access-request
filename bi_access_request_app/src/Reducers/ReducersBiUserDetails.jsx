import {
    LOAD_BI_USER_ACCESS_REQUEST_DATA_ERROR,
    LOAD_BI_USER_ACCESS_REQUEST_DATA_LOADING,
    LOAD_BI_USER_ACCESS_REQUEST_DATA_SUCCESS,
} from "../Actions/ActionsUserDetails/ActionsUserDetails";

const initialState = {
    data: [],
    loading: false,
    error: "",
};

export function ReducersBiUserDetails(
    state = initialState,
    action
) {
    switch (action.type) {
        case LOAD_BI_USER_ACCESS_REQUEST_DATA_LOADING: {
            return {
                ...state,
                loading: true,
                error: "",
            };
        }
        case LOAD_BI_USER_ACCESS_REQUEST_DATA_SUCCESS: {
            return {
                ...state,
                data: action.BiUserDetails,
                loading: false,
            };
        }
        case LOAD_BI_USER_ACCESS_REQUEST_DATA_ERROR: {
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        }
        default:
            return state;
    }
}
