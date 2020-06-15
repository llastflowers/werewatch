import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getDetails } from '../services/movieApis';

const MovieDetail = ({ match }) => {
  const [details, setDetails] = useState({});
  useEffect(() => {
    getDetails(match.params.movie_id)
      .then(details => setDetails(details));
  }, []);

  return (
    <>
      <img src={`http://image.tmdb.org/t/p/w780/${details.poster_path}`} style={{ width: '100px' }} onError={(e)=>{e.target.onerror = null; e.target.src = 'https://dimensionmill.org/wp-content/uploads/2019/03/square-placeholder.jpg';}} />
      <p>{details.title}</p>
      <p>{details.release_date}</p>
      <p>{details.runtime} minutes</p>
      <p>{details.overview}</p>
    </>
  );
};

MovieDetail.propTypes = {
  match: PropTypes.object.isRequired
};

export default MovieDetail;
