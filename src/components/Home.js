import React, { useState } from 'react';
import useMovies from '../hooks/useMovies';
import MovieResults from './MovieResults';

const Home = () => {
  const [query, setQuery] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const moviesList = useMovies(query);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    setQuery(searchTerm);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder="Search by movie title" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} />
        <button>Search</button>
      </form>
      <ul>
        {moviesList.length > 1 && <MovieResults moviesList={moviesList} />}
      </ul>
    </>
  );
};

export default Home;
