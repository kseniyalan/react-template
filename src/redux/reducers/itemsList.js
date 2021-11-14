import update from "immutability-helper";
import {
  ITEMS_LOADING_START,
  ITEMS_LOADING_SUCCESS,
  ITEMS_LOADING_FAILED,
  //Create new item
  SET_ITEM_NAME,
  SET_ITEM_COLOR,
  ITEM_CREATED_SUCCESSFULLY,
} from '../actions/itemsList';

import { TEMP_SIGN_OUT } from '../actions/auth';

const INITIAL_STATE = {
  ready: false,
  loading: false,
  items: [],
  newItem: {
    name: '',
    color: '',
  },
};

export default function (state = INITIAL_STATE, action) { 
  switch (action.type) {
    case ITEMS_LOADING_START:
      return {
        ...state,
        ready: false,
        loading: true,
        items: [],
      };
    case ITEMS_LOADING_SUCCESS:
      return {
        ...state,
        ready: true,
        loading: false,
        items: action.payload.items.items, //For real server-side
      };
    case ITEMS_LOADING_FAILED:
      return {
        ...state,
        ready: false,
        loading: false,
      };
      //Create new item
      case SET_ITEM_NAME:
        return update(state, {
          newItem: {
            name: {$set: action.payload.value},
          }
        });
      case SET_ITEM_COLOR:
        return update(state, {
          newItem: {
            color: {$set: action.payload.value},
          }
        });
    /* Server side emulation */
    case ITEM_CREATED_SUCCESSFULLY:
      return update(state, {
        items: { $push: [action.payload.item] },
        newItem: {
          name: { $set: '' },
          color: { $set: '' },
        },
      });
    case TEMP_SIGN_OUT:
      return INITIAL_STATE;
    default:
      return state;
  }
}