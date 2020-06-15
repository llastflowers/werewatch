import { useState, useEffect } from 'react';
import { getMovies } from '../services/movieApis';

export const useMovies = (query) => {
  const [movieResults, setMovieResults] = useState({
    results:[]
  });
  useEffect(() => {
    if(query !== '') {
      getMovies(query)
        .then(searchResults => setMovieResults(searchResults));
    }
  }, [query]);
  return movieResults;
};

export default useMovies;
