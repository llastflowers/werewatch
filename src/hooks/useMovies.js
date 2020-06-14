import { useState, useEffect } from 'react';
import { getMovies } from '../services/movieApis';

export const useMovies = (query) => {
  const [movieResults, setMovieResults] = useState({
    movies:[]
  });
  useEffect(() => {
    if(query !== '') {

      getMovies(query)
        .then(results => setMovieResults(results));
    }
  }, [query]);
  return movieResults;
};

export default useMovies;
