import {
  ADD_ITEM_DATA
} from '../actions/itemsList';

import { TEMP_SIGN_OUT } from '../actions/auth';

const INITIAL_STATE = {
  ready: false,
  loading: false,
  item: {},
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    //Item info loading
    case ADD_ITEM_DATA:
      return {
        ...state,
        ready: true,
        loading: false,
        item: action.payload.item,
      };
    case TEMP_SIGN_OUT:
      return INITIAL_STATE;
    default:
      return state;
  }
}