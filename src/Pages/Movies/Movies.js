import React from 'react';
import { Query } from 'react-apollo';

import { getMovieGenres, getMovieByGenre } from '../../graphql/queries';
import Movie from '../../components/Movie';
import Loading from '../../components/Loading';

import './styles.css';


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
          )}
        </Query>
      )
      )}}

  </Query>
);


// const Movies = ({ focusedElementId, data, client }) => {
//   console.log('APOLLO CLIENT', client);
//   let cachedData;
//   try {
//     cachedData = client.readQuery({
//       query
//     });
//   } catch (error) {
//     console.log('ERRROR');
//   }
//   if (cachedData) {
//     console.log('CACHED DATA', cachedData.movies_by_genre);
//   }

//   return(
//     data.loading ? <Loading /> :
//     data.error ? renderError() :
//     <div className="appContainer">
//       {
//         data.movies_by_genre.map(movie =>
//           <Movie
//             key={movie.id}
//             title={movie.title}
//             image={movie.poster_path}
//             isFocused={focusedElementId === movie.id}
//           />
//         )
//       }
//     </div>
//   );
// }

const renderError = () => <p> Error fetching Movies ...</p>;

export default Movies;
