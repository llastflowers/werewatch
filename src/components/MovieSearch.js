import React, { useState } from 'react';
import useMovies from '../hooks/useMovies';
// import MovieResults from './MovieResults';
const MovieSearch = () => {
  const [query, setQuery] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const moviesList = useMovies(query);

  const handleSubmit = (event) => {
    event.preventDefault();
    setQuery(searchTerm);
  };
  
  const searchResults = moviesList.results.map(movie =>
    <li key={movie.id}>
      <p>{movie.title}</p>
    </li>
    
  );
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder="Search by movie title" value={searchTerm} onChange={({ target }) => setSearchTerm(target.value)} />
        <button>Search</button>
      </form>
      <ul>
        {searchResults}
      </ul>
    </>
  );
};
export default MovieSearch;
