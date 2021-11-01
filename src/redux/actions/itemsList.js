import { push } from "connected-react-router";

import { getItemsList } from '../../request';
import { checkTokenError } from "./auth";
import { showErrorMessage, hideErrorMessage, showSuccessMessage } from "./ui";

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

//See single item
export const ADD_ITEM_DATA = "Add item data";

//Edit form
export const setItemName = value => ({
  type: SET_ITEM_NAME,
  payload: { value }
});

export const setItemColor = value => ({
  type: SET_ITEM_COLOR,
  payload: { value }
});

//Load items list
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

//Create item on server side
const startCreation = () => ({
  type: ITEM_CREATION_START
});

const creationSuccess = item => ({
  type: ITEM_CREATED_SUCCESSFULLY,
  payload: { item }
});

//For real server-side
/*
const creationFailure = () => ({
  type: ITEM_CREATION_FAILED,
});
*/

export const createItemAsync = () => {
  return async (dispatch, getState) => {
    dispatch(startCreation());
    const currentState = getState();
    const item = currentState.itemsList.newItem;
    const currentItems = currentState.itemsList.items;
    item.id = currentItems.length;
    /* Server side emulation */
    dispatch(showSuccessMessage('New item created!'));
    return dispatch(creationSuccess(item));
  };
};

//See single item
const addItemData = item => ({
  type: ADD_ITEM_DATA,
  payload: { item }
});

export const openItemPage = item => {
  return async (dispatch) => {
    dispatch(addItemData(item));
    console.log('item.id: ', item.id);
    return dispatch(push(`/item/${item.id}`));
  };
};

