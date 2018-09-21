import React from 'react';

import './styles.css';

const Movie = ({ title, image }) => (
  <div className="container">
    <div className="title">{title}</div>
    <div>
      <img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${image}`} alt={title}></img>
    </div>
  </div>
);

export default Movie;
