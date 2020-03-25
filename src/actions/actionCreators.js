import config from "../config/config";
import * as actionTypes from './actionTypes';

export const setUsers = ( users ) => {
    return {
        type: actionTypes.SETUSERS,
        payload: users
    };
};

export const getUsers = () => {
    return async dispatch => {
        try {
            let response = await axios.get(`${config.APIURL}`)
            dispatch(setUsers(response.results));
        } catch(err) {}
    };
};

export const setSearchedUsers = (event) => {
    return {
        type: actionTypes.SETSEARCHEDUSERS,
        payload: event
    };
};

