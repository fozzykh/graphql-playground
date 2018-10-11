import React from 'react';
import { Query } from 'react-apollo';
import { getMovieByGenre } from '../../graphql/queries';
import Loading from '../../components/Loading';
import GenreLane from '../../components/GenreLane/GenreLane';

const MovieGenre = (props) => (
  <Query
    query={getMovieByGenre}
    variables={{ id: parseInt(props.match.params.id, 10) }}
  >
    {({ loading, error, data }) => (
      loading ? <Loading /> :
      error ? renderError() :

      <GenreLane
        focusedElementId={0}
        genre=""
        movies={data.movies_by_genre}
      />
    )}
  </Query>
);


const renderError = () => <p> Error fetching Movies from Genre ...</p>;

export default MovieGenre;
