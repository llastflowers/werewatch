import React from 'react';
import useProviders from '../hooks/useProviders';
import PropTypes from 'prop-types';
import styles from './Providers.css';

const Providers = ({ match }) => {
  const providers = useProviders(match.params.movie_id);
  const movieProviders = providers.collection.locations.map(provider => (
    <li key={provider.id}>
      <div  className={styles.providers}>
        <a target="_blank" rel="noopener noreferrer" href={provider.url}>
          <img className={styles.providerIcon} src={provider.icon} onError={(e)=>{e.target.onerror = null; e.target.src = 'https://images.vexels.com/media/users/3/135175/isolated/preview/730a8de14e2d462e3abaad6d99116c87-play-button-circle-icon-by-vexels.png';}} />
        </a>
      </div>
    </li>
  ));

  return (
    <ul>
      {movieProviders}
    </ul>
  );
};

Providers.propTypes = {
  match: PropTypes.object.isRequired
};

export default Providers;
