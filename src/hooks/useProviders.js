import { useState, useEffect } from 'react';
import { getProviders } from '../services/movieApis';

const useProviders = (tmdb_id) => {
  const [providers, setProviders] = useState({
    collection: {
      locations:[]
    } });
  useEffect(() => {
    getProviders(tmdb_id)
      .then(providers => setProviders(providers));
  }, []);
  return providers;
};

export default useProviders;
