import React from 'react';
import useProviders from '../hooks/useProviders';
import PropTypes from 'prop-types';

const Providers = ({ match }) => {
  const providers = useProviders(match.params.movie_id);
  const movieProviders = providers.collection.locations.map(provider => (
    <li key={provider.id}>
      <a target="_blank" rel="noopener noreferrer" href={provider.url}>
        <img src={provider.icon} style={{ height: '20px' }} onError={(e)=>{e.target.onerror = null; e.target.src = 'https://dimensionmill.org/wp-content/uploads/2019/03/square-placeholder.jpg';}} />
      </a>
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
