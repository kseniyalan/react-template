import {
  ITEM_INFO_LOADING_START,
  ITEM_INFO_LOADED_SUCCESSFULLY,
  ITEM_INFO_LOADING_FAILED,
} from '../actions/itemInfo';

import { TEMP_SIGN_OUT } from '../actions/auth';

const INITIAL_STATE = {
  ready: false,
  loading: false,
  item: {},
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    //Item info loading
    case ITEM_INFO_LOADING_START:
      return {
        ...state,
        ready: false,
        loading: true,
        item: {},
      };
    case ITEM_INFO_LOADED_SUCCESSFULLY:
      return {
        ...state,
        ready: true,
        loading: false,
        item: action.payload.item,
      };
    case ITEM_INFO_LOADING_FAILED:
      return {
        ...state,
        ready: false,
        loading: false,
      };
    case TEMP_SIGN_OUT:
      return INITIAL_STATE;
    default:
      return state;
  }
}