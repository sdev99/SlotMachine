import {userConstants} from '../constants';

export default (state = {}, action) => {
    switch (action.type) {
        case userConstants.LOGIN_REQUEST:
            return {
                ...state,
                login: true,
                user: action.user
            };

        default:
            return state
    }
};
