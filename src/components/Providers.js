import React from 'react';
import useProviders from '../hooks/useProviders';
import PropTypes from 'prop-types';
import styles from './Providers.css';
import provider_placeholder from '../assets/provider_placeholder.png';

const Providers = ({ match }) => {
  const providers = useProviders(match.params.movie_id);
  const movieProviders = providers.collection.locations.map(provider => (
    <li key={provider.id}>
      <div  className={styles.providers}>
        <a target="_blank" rel="noopener noreferrer" href={provider.url}>
          <img className={styles.providerIcon} src={provider.icon} onError={(e)=>{e.target.onerror = null; e.target.src = provider_placeholder;}} />
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
