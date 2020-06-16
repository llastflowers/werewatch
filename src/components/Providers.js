import React from 'react';
import useProviders from '../hooks/useProviders';
import PropTypes from 'prop-types';

const Providers = ({ match }) => {
  const providers = useProviders(match.params.movie_id);
  const movieProviders = providers.collection.locations.map(provider => (
    <li key={provider.id}>
      <p>{provider.display_name}</p>
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
