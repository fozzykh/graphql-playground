import React from 'react';
import { connect } from 'react-redux';

import Movies from './Movies';

const MoviesContainer = ({ focusedElementId }) => (
    <Movies
      focusedElementId={focusedElementId}
    />
);

const mapStateToProps = ({ focusedElementId }) => ({
  focusedElementId
});

export default connect(mapStateToProps)(MoviesContainer);
