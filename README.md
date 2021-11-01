# React web app template

The project is a SPA web application template with React.js + Redux stack and Axios as Middleware. It is based on create-react-app.
The project contains a layout skeleton of a site with a login page with simple validation, a 404 page, a main menu, several blank pages, an authorization mechanism example.

While there is no real server authorization, works emulation, which can be easily disabled.

:white_check_mark: **To sign in without server-side, write any 5 characters for username and password!**

Demo page: https://kseniyalan.github.io/react-template/

Routing is configured, pages are connected to the Redux infrastructure.

There are also several UI components:

* Error or success messages
* Modal window
* Pagination block
* Simple preloader for loading pages

UI components are tied to the Redux framework. Styles for forms and buttons are written.

## Third party dependencies:

Dependency | License
----------------|----------------------
[qs](https://www.npmjs.com/package/qs)  | [BSD-3-Clause](https://github.com/ljharb/qs/blob/master/LICENSE.md)
[react-transition-group](https://www.npmjs.com/package/react-transition-group)  | [BSD-3-Clause](https://github.com/reactjs/react-transition-group/blob/master/LICENSE)
[axios](https://www.npmjs.com/package/axios)  | [MIT](https://github.com/axios/axios/blob/HEAD/LICENSE)
[connected-react-router](https://www.npmjs.com/package/connected-react-router)  | [MIT](https://github.com/supasate/connected-react-router/blob/master/LICENSE.md)
[immutability-helper](https://www.npmjs.com/package/immutability-helper)  | [MIT](https://github.com/kolodny/immutability-helper/blob/master/LICENSE)
[jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)  | [MIT](https://github.com/auth0/node-jsonwebtoken/blob/HEAD/LICENSE)
[lodash](https://www.npmjs.com/package/lodash)  | [MIT](https://github.com/lodash/lodash/blob/master/LICENSE)
[moment](https://www.npmjs.com/package/moment)  | [MIT](https://github.com/moment/moment/blob/develop/LICENSE)
[node-sass](https://www.npmjs.com/package/node-sass)  | [MIT](https://github.com/sass/node-sass/blob/master/LICENSE)
[react](https://www.npmjs.com/package/react)  | [MIT](https://github.com/facebook/react/blob/master/LICENSE)
[react-dom](https://www.npmjs.com/package/react-dom)  | [MIT](https://github.com/facebook/react/blob/master/LICENSE)
[React Redux](https://www.npmjs.com/package/react-redux)  | [MIT](https://github.com/reduxjs/react-redux/blob/HEAD/LICENSE.md)
[react-router](https://www.npmjs.com/package/react-router)  | [MIT](https://github.com/ReactTraining/react-router/blob/master/LICENSE)
[react-router-dom](https://www.npmjs.com/package/react-router-dom)  | [MIT](https://github.com/ReactTraining/react-router/blob/master/LICENSE)
[react-scripts](https://www.npmjs.com/package/react-scripts)  | [MIT](https://github.com/facebook/create-react-app/blob/master/LICENSE)
[redux](https://www.npmjs.com/package/redux)  | [MIT](https://github.com/reduxjs/redux/blob/HEAD/LICENSE.md)
[Redux DevTools Extension's helper](https://www.npmjs.com/package/redux-devtools-extension)  | [MIT](https://github.com/zalmoxisus/redux-devtools-extension/blob/master/LICENSE)
[redux-thunk](https://www.npmjs.com/package/redux-thunk)  | [MIT](https://github.com/reduxjs/redux-thunk/blob/master/LICENSE.md)
[semantic-ui-css](https://www.npmjs.com/package/semantic-ui-css)  | [MIT](https://github.com/Semantic-Org/Semantic-UI-CSS/blob/master/LICENSE)
[semantic-ui-react](https://www.npmjs.com/package/semantic-ui-react)  | [MIT](https://github.com/Semantic-Org/Semantic-UI-React/blob/master/LICENSE.md)

## Available scripts

### `npm install`

Installing dependencies

### `npm start`

Launching the application in developer mode.

### `npm test`

Runs tests, if exist.

### `npm run build`

Building the production version of the application
