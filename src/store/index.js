import { createStore, compose, applyMiddleware } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import reducers from './reducers';

export const history = createBrowserHistory();

export default createStore(
  connectRouter(history)(reducers),
  {},
  compose(applyMiddleware(
    routerMiddleware(history)
    ))
  );

