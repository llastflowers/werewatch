import { useState, useEffect } from 'react';
import { getMovies } from '../services/movieApis';

const useMovies = (query) => {
  const [movies, setMovies] = useState({
    results:[]
  });
  
  useEffect(() => {
    if(query !== '') {
      getMovies(query)
        .then(searchResults => setMovies(searchResults));
    }
  }, [query]);
  return movies;
};

export default useMovies;
