import React from 'react';
import PropTypes from 'prop-types';

const MovieResults = ({ moviesList }) => {
  const movieItem = moviesList.map(movie => (
    <li key={movie.results.id}>
      <p>{movie.results.title}</p>
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
