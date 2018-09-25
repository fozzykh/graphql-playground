import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import Movie from '../../components/Movie';
import './styles.css';

const Movies = ({ focusedElementId }) => (
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
      loading ? renderLoading() :
      error ? renderError() :

      <div className="appContainer">
        {
          data.movies.map(movie =>
            <Movie
              key={movie.id}
              title={movie.title}
              image={movie.poster_path}
              isFocused={focusedElementId === movie.id}
            />
          )
        }
      </div>
    )}
  </Query>
);

const renderLoading = () => (
  <div className="loadingContainer">
    <p className="loadingText"> Fetching Movies .... </p>
  </div>
);

const renderError = () => <p> Error fetching Movies ...</p>;

export default Movies;
