import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'

import ui from "./ui";
import auth from "./auth";
import itemsList from './itemsList';
import itemInfo from './itemInfo';

export default history => combineReducers({
  router: connectRouter(history),
  auth,
  ui,
  itemsList,
  itemInfo,
});