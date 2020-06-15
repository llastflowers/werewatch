import { useState, useEffect } from 'react';
import { getMovies } from '../services/movieApis';

export const useMovies = (query) => {
  const [movieResults, setMovieResults] = useState([]);
  useEffect(() => {
    if(query !== '') {
      getMovies(query)
        .then(results => setMovieResults(results));
    }
  }, [query]);
  return movieResults;
};

export default useMovies;
