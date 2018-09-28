import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store/index';

// A custom cache key can be defined in case our data model do not have id field
const cache = new InMemoryCache();

const graphQlClient = new ApolloClient({
  uri: 'https://movie-database-graphql-qwqnwstigc.now.sh/graphql',
  cache
});

const Root = () => (
  <ApolloProvider client={graphQlClient} >
    <Provider store={store}>
      <App />
    </Provider>
  </ApolloProvider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
