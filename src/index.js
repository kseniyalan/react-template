import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { Provider } from 'react-redux';
import thunk from "redux-thunk";
import {
  ConnectedRouter,
  routerMiddleware,
} from "connected-react-router";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from 'redux';
import { createHashHistory } from "history";

import reducers from './redux/reducers';

import "semantic-ui-css/semantic.min.css";
import "./assets/css/common.scss";

const history = createHashHistory();

const store = createStore(
  reducers(history),
  composeWithDevTools(applyMiddleware(thunk, routerMiddleware(history))),
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
