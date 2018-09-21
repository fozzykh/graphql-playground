import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const graphQlClient = new ApolloClient({
  uri: 'https://movie-database-graphql-qwqnwstigc.now.sh/graphql'
});

const Root = () => (
  <ApolloProvider client={graphQlClient} >
    <App />
  </ApolloProvider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
