import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getDetails } from '../services/movieApis';
import styles from './MovieDetail.css';

const MovieDetail = ({ match }) => {
  const [details, setDetails] = useState({});
  useEffect(() => {
    getDetails(match.params.movie_id)
      .then(details => setDetails(details));
  }, []);

  return (
    <>
      <div className={styles.movieItem}>
        <img className={styles.moviePoster} src={`http://image.tmdb.org/t/p/w780/${details.poster_path}`} onError={(e)=>{e.target.onerror = null; e.target.src = 'https://lh3.googleusercontent.com/proxy/GOuPCAzhMBl60T5N9_oNmDUCRRh8kdI0QukUzA4YvACAlP9i0CniYBeh0FuKlNvXBI_0QA6l-GlvgpczcEZ2n0yN3Dpf_xzqsT39iXs3pw4njq15g34_aQAv-Pt5DsgG03Wg';}} />
        <div className={styles.movieDetails}>
          <p className={styles.movieTitle}>{details.title}</p>
          <p className={styles.movieDate}>{details.release_date?.slice(0, 4)}</p>
          <p className={styles.movieTime}>{details.runtime} minutes</p>
          <p className={styles.movieOverview}>{details.overview}</p>
        </div>
      </div>
    </>
  );
};

MovieDetail.propTypes = {
  match: PropTypes.object.isRequired
};

export default MovieDetail;
