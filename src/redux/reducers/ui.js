import update from "immutability-helper";
import {
  //Error, Success, Warning Messages
  SHOW_ERROR_MSG,
  HIDE_ERROR_MSG,
  SHOW_SUCCESS_MSG,
  HIDE_SUCCESS_MSG,
  HIDE_WARNING_MSG,
  OPEN_CANCEL_MODAL,
  CLOSE_CANCEL_MODAL,
} from '../actions/ui';

import { TEMP_SIGN_OUT } from '../actions/auth';

const INITIAL_STATE = {
  errorMsg: {
    show: false,
    text: '',
    timeout: 5000,
  },
  successMsg: {
    show: false,
    text: '',
    timeout: 5000,
  },
  warningMsg: {
    show: false,
    text: '',
    timeout: 5000,
  },
  cancelModal: {
    isOpen: false,
  },
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    //Error, Success, Warning Messages
    case SHOW_ERROR_MSG:
      return update(state, {
        errorMsg: {
          show: {$set: true},
          text: {$set: action.payload.text}
        }
      });
    case HIDE_ERROR_MSG:
      return update(state, {
        errorMsg: {
          show: {$set: false},
          text: {$set: ''}
        }
      });
    case SHOW_SUCCESS_MSG:
      return update(state, {
        successMsg: {
          show: {$set: true},
          text: {$set: action.payload.text}
        }
      });
    case HIDE_SUCCESS_MSG:
      return update(state, {
        successMsg: {
          show: {$set: false},
          text: {$set: ''}
        }
      });
    case HIDE_WARNING_MSG:
      return update(state, {
        warningMsg: {
          show: {$set: false},
          text: {$set: ''}
        }
      });
    case OPEN_CANCEL_MODAL:
      return update(state, {
        cancelModal: {
          isOpen: {$set: true},
        }
      });
    case CLOSE_CANCEL_MODAL:
      return update(state, {
        cancelModal: {
          isOpen: {$set: false},
        }
      });
    case TEMP_SIGN_OUT:
      return INITIAL_STATE;
    default:
      return state;
  }
}