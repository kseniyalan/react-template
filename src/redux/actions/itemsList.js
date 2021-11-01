import { push } from "connected-react-router";

import { getItemsList } from '../../request';
import { checkAndRenewTokens, checkTokenError } from "./auth";
import { clearItemForm } from "./editItem";
import { showErrorMessage, hideErrorMessage } from "./ui";

//Items list loading
export const ITEMS_LOADING_START = "Items loading start";
export const ITEMS_LOADING_SUCCESS = "Items list loading success";
export const ITEMS_LOADING_FAILED = "Failure during items list load";

//Edit item form
export const SET_ITEM_NAME = "Set item name";
export const SET_ITEM_COLOR = "Set item color";
export const CLEAR_ITEM_FORM = "Clear item form"; 
 
//Create item on server side
export const ITEM_CREATION_START = "Item creation start";
export const ITEM_CREATED_SUCCESSFULLY = "Item created successfully";
export const ITEM_CREATION_FAILED = "Failure during item creation";

const startLoading = () => ({
  type: ITEMS_LOADING_START
});

const loadSuccess = items => ({
  type: ITEMS_LOADING_SUCCESS,
  payload: {
    items: items || []
  }
});

const loadFailure = () => ({
  type: ITEMS_LOADING_FAILED,
});


//Get items fist from server
export const getItemsListAsync = payload => {
  return async (dispatch) => {
    dispatch(startLoading());
    dispatch(hideErrorMessage());
    //await dispatch(checkAndRenewTokens()); //For real authorization
    let items;
    try {
      const accessToken = localStorage.getItem("accessToken");
      items = await getItemsList(accessToken, payload);
    } catch (err) {
      dispatch(checkTokenError(err));
      dispatch(showErrorMessage("Items loading failed!"));
      return dispatch(loadFailure());
    }
    return dispatch(loadSuccess(items));
  };
};

export const goToItemCreation = () => {
  return async (dispatch) => {
    dispatch(clearItemForm());
    dispatch(push('/create-item'));
  };
};

//Pagination
export const changePage = activePage => ({
  type: CHANGE_ITEMS_PAGE,
  payload: { activePage }
});

//Number of items displayed per page
export const changeLimit = activeLimit => ({
  type: CHANGE_ITEMS_LIMIT,
  payload: { activeLimit }
});