import React, { useState } from 'react';
import useMovies from '../hooks/useMovies';
// import MovieResults from './MovieResults';

const MovieSearch = () => {
  const [query, setQuery] = useState('');
  const moviesList = useMovies(query);
  const searchResults = moviesList.results.map(movie =>
    <li key={movie.id}>
      <p>{movie.title}</p>
    </li>
  );

  return (
    <>
      <form>
        <input type='text' placeholder="Search by movie title" value={query} onChange={(event) => setQuery(event.target.value)} />
        <button>Search</button>
      </form>
      <ul>
        {searchResults}
      </ul>
    </>
  );
};

export default MovieSearch;
