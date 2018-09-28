import gql from 'graphql-tag';

export const getMovieGenres = gql`{
  movie_genres {
    id,
    name
  }
}`;

export const getMovieByGenre = gql`
  query getMovieByGenre($id: Int!) {
    movies_by_genre(id: $id) {
      title
      id
      poster_path
    }
  }
`;
