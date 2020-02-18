import axios from 'axios';
import {userConstants, apiUrl} from '../constants';


export const getUsers = (data) => {
    return (dispatch) => {
        dispatch(request([]));
        return axios.post(`${apiUrl}/getUsers`, data)
            .then(({data}) => {
                if (data.status) {
                    dispatch(success(data.data));
                } else {
                    dispatch(failure(data.message));
                }
            })
            .catch(error => {
                throw(error);
                dispatch(failure(error.message));
            });
    }

    function request(users) {
        return {type: userConstants.LOGIN_REQUEST, users}
    }

    function success(users) {
        return {type: userConstants.LOGIN_SUCCESS, users}
    }

    function failure(error) {
        return {type: userConstants.LOGIN_FAILURE, error}
    }
};


