import {
  getSingleItemInfo,
} from '../../request';

import { checkAndRenewTokens, checkTokenError } from "./auth";
import { showErrorMessage } from "./ui";

//Load item info from server
export const ITEM_INFO_LOADING_START = "Item info loading start";
export const ITEM_INFO_LOADED_SUCCESSFULLY = "Item info loaded successfully";
export const ITEM_INFO_LOADING_FAILED = "Failure during item info load";

const startLoading = () => ({
  type: ITEM_INFO_LOADING_START 
});

const loadSuccess = item => ({
  type: ITEM_INFO_LOADED_SUCCESSFULLY,
  payload: {
    item: item || {}
  }
});

const loadFailure = () => ({
  type: ITEM_INFO_LOADING_FAILED,
});

//Load item info from server
export const getItemInfoAsync = msgId => { 
  return async (dispatch) => {
    dispatch(startLoading());
    //await dispatch(checkAndRenewTokens());
    let item;
    const accessToken = localStorage.getItem("accessToken");
    try {
      item = await getSingleItemInfo(accessToken, msgId);
    } catch (err) {
      dispatch(checkTokenError(err));
      dispatch(showErrorMessage("Item info loading failed!"));
      return dispatch(loadFailure());
    }
    return dispatch(loadSuccess(item));
  };
};
