import React from 'react';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import { history } from './store';
import Movies from './Pages/Movies';
import MovieGenre from './Pages/MovieGenre/MovieGenre';

const App = () => (
  <ConnectedRouter history={history}>
    <div>
      <Route exact path="/" component={Movies} />
      <Route exact path="/genre/:id" component={MovieGenre} />
    </div>
  </ConnectedRouter>
);

export default App;
