import React from 'react';
import PropTypes from 'prop-types';

const MovieResults = ({ moviesList }) => {
  const movieItem = moviesList.results.map(movie => (
    <li key={movie.id}>
      <p>{movie.title}</p>
    </li>
  ));

  return (
    <>
      <ul>
        {movieItem}
      </ul>
    </>
  );
};

MovieResults.propTypes = {
  moviesList: PropTypes.array
};

export default MovieResults;
