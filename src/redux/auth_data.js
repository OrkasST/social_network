import { AuthAPI } from "../api/api";

const SET_AUTH_DATA = 'SET_AUTH_DATA';

let initialState = {
    email: null,
    id: null,
    login: null,
    isAuthorised: false
}

const authData = (state = initialState, action) => {
    switch(action.type) {

        case SET_AUTH_DATA:
            return {
                ...state,
                ...action.data,
                isAuthorised: true
            }

        default:
            return state
    }
}

export default authData;

export const setAuthData = (email, id, login) => { return { type: SET_AUTH_DATA, data: {email, id, login} } }

export const getAuthData = () => (dispatch) => {
    AuthAPI.getData().then(data => {
            if (data.resultCode !== 0) return;
            let { email, id, login } = data.data;
            dispatch(setAuthData(email, id, login));
        })
}