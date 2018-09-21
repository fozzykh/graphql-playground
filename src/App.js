import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Movie from './components/Movie';

import './App.css';

class App extends Component {

  renderLoading = () => (
    <div className="loadingContainer">
      <p className="loadingText"> Fetching Movies .... </p>
    </div>
  );

  renderError = () => <p> Error fetching Movies ...</p>;

  render() {
    return (
      <Query
        query={gql`
          {
            movies(query: "id:1") {
              title
              id
              poster_path
            }
          }
        `}
      >
        {({ loading, error, data }) => (
          loading ? this.renderLoading() :
          error ? this.renderError() :

          <div className="appContainer">
            {
              data.movies.map(movie =>
                <Movie
                  key={movie.id}
                  title={movie.title}
                  image={movie.poster_path}
                />
              )
            }
          </div>
        )}
      </Query>
    );
  }
}

export default App;
