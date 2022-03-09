//Axios Import
import axios from "axios";

//Config Import
import config from "../../config";

export const LOAD_BI_USER_ACCESS_REQUEST_DATA_LOADING = "REDUX_THUNK_LOAD_USERS_LOADING";
export const LOAD_BI_USER_ACCESS_REQUEST_DATA_SUCCESS = "REDUX_THUNK_LOAD_USERS_SUCCESS";
export const LOAD_BI_USER_ACCESS_REQUEST_DATA_ERROR = "REDUX_THUNK_LOAD_USERS_ERROR";

export const BigInsightsUserInformation = (BiUserDetails) => {
    return {
        type: LOAD_BI_USER_ACCESS_REQUEST_DATA_SUCCESS,
        BiUserDetails: BiUserDetails,
    };
};

//Get User Details - Big Insights
export const getBigInsightsUserDetails = (country, project, username) => {
    return (dispatch) => {
        dispatch({ type: LOAD_BI_USER_ACCESS_REQUEST_DATA_LOADING });
        return axios
            .get(`${config.urlConnection.urlBiUserAccess}/User/${country}/${project}/${username}`)
            .then((response) => {
                // var responseData = {
                //     name: response.data.name,
                //     email: response.data.email,
                //     ldapUserId: response.data.ldapUserId,
                //     userId: response.data.userId,
                //     notes: response.data.notes,
                //     userGroups: response.data.userGroups,
                //     country: country,
                //     project: project,

                // }

                dispatch(BigInsightsUserInformation(response.data));
                return true;
            })
            .then((error) =>
                dispatch({
                    type: LOAD_BI_USER_ACCESS_REQUEST_DATA_ERROR,
                    error: error.message,
                })
            );
    };
};

//Add New User - Big Insights
export const addNewBigInsightsUser = (country, project, username) => {
    return (dispatch) => {
        dispatch({ type: LOAD_BI_USER_ACCESS_REQUEST_DATA_LOADING });
        return axios
            .post(`${config.urlConnection.urlBiUserAccess}/User/${country}/${project}/${username}`)
            .then((response) => {
                dispatch(BigInsightsUserInformation(response.data));
                return true;
            })
            .then((error) =>
                dispatch({
                    type: LOAD_BI_USER_ACCESS_REQUEST_DATA_ERROR,
                    error: error.message,
                })
            );
    };
};


//Assign Groups to User - Big Insights
export const assignUserGroupsBigInsights = (country, project, username, groupInfo) => {
    return (dispatch) => {
        dispatch({ type: LOAD_BI_USER_ACCESS_REQUEST_DATA_LOADING });
        return axios
            .post(`${config.urlConnection.urlBiUserAccess}/User/${country}/${project}/${username}/group`, groupInfo)
            .then((response) => {
                dispatch(BigInsightsUserInformation(response.data));
                return true;
            })
            .then((error) =>
                dispatch({
                    type: LOAD_BI_USER_ACCESS_REQUEST_DATA_ERROR,
                    error: error.message,
                })
            );
    };
};
