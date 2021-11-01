import {
  //Authorization
  SIGN_IN_START,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  LOGIN_FAILURE,
  SIGN_OUT,
  CLEAR_ERROR,
  //TEMPORARY EMULATION OF AUTHORIZATION FOR TEMPLATE
  TEMP_SIGN_IN,
  TEMP_SIGN_OUT,
} from "../actions/auth";

const INITIAL_STATE = {
  isAuthorized: true,
  userLogin: '',
  tokens: null,
  loading: false,
  loginError: false,
  serverError: false,
};

export default function (state = INITIAL_STATE, action) {  
  switch (action.type) {
    //TEMPORARY EMULATION OF AUTHORIZATION FOR TEMPLATE
    case TEMP_SIGN_IN:
      return {
        isAuthorized: true,
      };
    case TEMP_SIGN_OUT:
      return {
        isAuthorized: false,
      };
    //Authorization
    case SIGN_IN_START:
      return {
        ...state,
        loading: true,
        isAuthorized: false,
        userLogin: '',
      };
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        tokens: action.payload,
        loading: false,
        isAuthorized: true
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        tokens: null,
        loading: false,
        isAuthorized: false,
        loginError: true,
      };
    case SIGN_IN_FAILURE:
      return {
        ...state,
        tokens: null,
        loading: false,
        isAuthorized: false,
        serverError: true,
      };
    case SIGN_OUT:
      return {
        ...state,
        tokens: null,
        loading: false,
        isAuthorized: false,
        serverError: false,
        loginError: false,
      };
    case CLEAR_ERROR:
      return {
        ...state,
        loginError: false,
        serverError: false,
      };
    default:
      return state;
  }
}
