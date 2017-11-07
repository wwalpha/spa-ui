import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';

import { render } from 'react-dom';
import { Provider } from 'react-redux';
// import { Route } from 'react-router';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import { routerReducer, routerMiddleware } from 'react-router-redux';

import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './containers/App';

injectTapEventPlugin();

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const rMiddleware = routerMiddleware(history);

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const store = createStore(
  combineReducers({
    router: routerReducer,
  }),
  applyMiddleware(
    logger,
    thunk,
    rMiddleware,
  ),
);

const root = document.getElementById('root');

render(
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <Provider store={store}>
      <App />
    </Provider>
  </MuiThemeProvider>,
  root,
);
