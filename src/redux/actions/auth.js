import { signInByLP, signInByRT } from "../../request";

import {
    checkToken,
    getTokensFromLocalStorage,
    setTokensInLocalStorage,  
} from "../../methods";

import { hideErrorMessage, closeCancelModal } from "./ui";

//Authorization
export const SIGN_IN_START = "Sign-in start";
export const SIGN_IN_SUCCESS = "Sign-in success";
export const SIGN_IN_FAILURE = "Sign-in failed";
export const LOGIN_FAILURE = "Login failure";
export const SIGN_OUT = "Sign-out called";
export const CLEAR_ERROR = "Clearing sign-in error";

//TEMPORARY EMULATION OF AUTHORIZATION FOR TEMPLATE
export const TEMP_SIGN_IN = "Temp auth sign in";
export const TEMP_SIGN_OUT = "Temp auth sign out";

export const tempSignIn = () => ({
    type: TEMP_SIGN_IN
});

//AUTHORIZATION
const signInStart = () => ({
    type: SIGN_IN_START
});

const sigInSuccess = (accessToken, refreshToken) => {
    setTokensInLocalStorage(accessToken, refreshToken);
    return {
        type: SIGN_IN_SUCCESS,
        payload: {
            accessToken,
            refreshToken
        }
    };
};

const sigInFailure = () => ({
    type: SIGN_IN_FAILURE,
});

const loginFailure = () => ({
    type: LOGIN_FAILURE,
});

export const clearServerErrors = () => ({ type: CLEAR_ERROR });
  
//Authorization with the username and password
export const signInAsync = (login, password) => {
    return async dispatch => {
        dispatch(signInStart());
        let resp;
        try {
            resp = await signInByLP(login, password);
        } catch (err) {
            const errorCode = parseInt(err && err.response && err.response.status, 10);
            //Invalid username or password or user is not found
            if ((errorCode === 400) || (errorCode === 401) || (errorCode === 404)) {
                return dispatch(loginFailure());
            } else {
                return dispatch(sigInFailure());
            }
        }
        dispatch(hideErrorMessage());
        return dispatch(sigInSuccess(resp.data.token, resp.data.refresh_token));
    };
};

//SIGN OUT
const tempSignOut = () => ({
    type: TEMP_SIGN_OUT
});


export const signOut = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("prevUrl");
    return {
        type: SIGN_OUT
    };
};

export const tempSignOutAndClose = () => {
    return dispatch => {
        dispatch(tempSignOut());
        return dispatch(closeCancelModal());
    };
};
  
//Token update, used during application initialization and in all protected methods
export const checkAndRenewTokens = () => {
    return async dispatch => {
        let tokenIsValid = false;
        const tokens = getTokensFromLocalStorage();
        if (tokens.accessToken && (tokens.accessToken !== null)) tokenIsValid = await checkToken(tokens.accessToken);
        //If the accessToken is valid, we save everything and sign out.
        if (tokenIsValid) return dispatch(sigInSuccess(tokens.accessToken, tokens.refreshToken));
        
        //Else check refreshToken
        if (tokens.refreshToken && (tokens.refreshToken !== null)) tokenIsValid = await checkToken(tokens.refreshToken);
        //If refreshToken is valid, autorise with it
        if (tokenIsValid) {
            let resp;
            try {
                resp = await signInByRT(tokens.refreshToken);
            } catch (err) {
                return dispatch(signOut());
            }
            return dispatch(sigInSuccess(resp.data.token, resp.data.refresh_token));
        }
        return dispatch(signOut());
    };
};

//Exit on error if the token is not found in the database
export const checkTokenError = err => {
    return async dispatch => {
        const errorCode = parseInt(err && err.response && err.response.status, 10);
        const errorText = err && err.response && err.response.data && err.response.data.error;
        //Token is valid, but not found in the database
        if ((errorCode === 404) && (errorText === 'Invalid token')) dispatch(signOut());
    };
};