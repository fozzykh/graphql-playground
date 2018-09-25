import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import Movie from '../../components/Movie';
import Loading from '../../components/Loading';

import './styles.css';

const query = gql`{
  movies_by_genre(id:35) {
    title
    id
    poster_path
  }
}`;

const Movies = ({ focusedElementId, data }) => (
    data.loading ? <Loading /> :
    data.error ? renderError() :
    <div className="appContainer">
      {
        data.movies_by_genre.map(movie =>
          <Movie
            key={movie.id}
            title={movie.title}
            image={movie.poster_path}
            isFocused={focusedElementId === movie.id}
          />
        )
      }
    </div>
);

const renderError = () => <p> Error fetching Movies ...</p>;

export default graphql(query)(Movies);
