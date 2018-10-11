import React from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import Movies from './Movies';

const MoviesContainer = ({ focusedElementId, goToGenre }) => (
    <Movies
      focusedElementId={focusedElementId}
      onGenrePress={goToGenre}
    />
);

const mapDispatchToProps = (dispatch) => ({
  goToGenre: (genreId) => {
    dispatch(push(`/genre/${genreId}`))
  }
});

const mapStateToProps = ({ focusedElementId }) => ({
  focusedElementId
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviesContainer);
