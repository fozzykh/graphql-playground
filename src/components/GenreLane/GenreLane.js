import React from 'react';

import Movie from '../Movie';
import './styles.css';

const GenreLane = ({ focusedElementId, genre, movies }) => (
  <React.Fragment>
    <div className="genreTitle">{genre}</div>
    <div className="genreLaneContainer">
      {
        movies.map(movie =>
          <Movie
            key={movie.id}
            title={movie.title}
            image={movie.poster_path}
            isFocused={focusedElementId === movie.id}
          />
        )
      }
    </div>
  </React.Fragment>
);

export default GenreLane;
