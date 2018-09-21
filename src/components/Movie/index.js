import React from 'react';

const Movie = ({ title, image }) => (
  <div>
    <div>{title}</div>
    <div>
      <img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${image}`} alt={title}></img>
    </div>
  </div>
);

export default Movie;
