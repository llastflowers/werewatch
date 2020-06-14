import React from 'react';
// import PropTypes from 'prop-types';

const MovieItem = () => {

  return (
    <figure>
      <img src={'https://resizing.flixster.com/K9V4vcugbvfvXtdWXGLxE3iqETs=/fit-in/1152x864/v1.bjsxODgwODY2O2o7MTg0NzE7MTIwMDszNTg4OzU1Mzg'} style={{ width: '200px' }} onError={(e)=>{e.target.onerror = null; e.target.src = 'https://dimensionmill.org/wp-content/uploads/2019/03/square-placeholder.jpg';}} />
      <figcaption>
        <p>Sorry To Bother You</p>
        <p>2018</p>
        <p>Comedy, Science Fiction and Fantasy</p>
      </figcaption>
    </figure>
  );
};

// MovieItem.propTypes = {
//   title: PropTypes.string.isRequired,
//   date: PropTypes.string.isRequired,
//   genres: PropTypes.string.isRequired,
//   movieId: PropTypes.string.isRequired
// };

export default MovieItem;
