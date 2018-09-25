import React from 'react';

import './styles.css';

const Movie = ({ image, isFocused, title }) => (
  <div className="container">
    <div className="title">{title}</div>
    <div style={{
                  border: isFocused ?
                  '5px solid' :
                  undefined,
                  borderColor: 'red'
                  }}
    >
      <img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${image}`} alt={title}></img>
    </div>
  </div>
);

export default Movie;
