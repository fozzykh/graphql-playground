import React from 'react';
import { Query } from 'react-apollo';

import { getMovieGenres, getMovieByGenre } from '../../graphql/queries';
import Loading from '../../components/Loading';

import './styles.css';
import GenreLane from '../../components/GenreLane/GenreLane';


const Movies = ({ focusedElementId }) => (
  <Query query={getMovieGenres}>
    {({ loading, error, data }) => {
      console.log('DATA', data);
      return (
      loading ? <Loading /> :

      error ? renderError() :

      data.movie_genres.map(genre =>
        <Query
          key={genre.id}
          query={getMovieByGenre}
          variables={{ id: genre.id }}
        >
          {({ loading, error, data }) => (
            loading ? null :

            error ? renderError() :

            <GenreLane
              focusedElementId={focusedElementId}
              genre={genre.name}
              movies={data.movies_by_genre}
            />
          )}
        </Query>
      )
      )}}

  </Query>
);

const renderError = () => <p> Error fetching Movies ...</p>;

export default Movies;
