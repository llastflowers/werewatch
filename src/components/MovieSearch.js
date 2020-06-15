import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useMovies from '../hooks/useMovies';

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
      <Link to={`/${movie.id}`}>
        <img src={`http://image.tmdb.org/t/p/w780/${movie.poster_path}`} style={{ width: '100px' }} onError={(e)=>{e.target.onerror = null; e.target.src = 'https://dimensionmill.org/wp-content/uploads/2019/03/square-placeholder.jpg';}} />
        <p>{movie.title}</p>
        {/* <p>{movie.release_date}</p> */}
      </Link>
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
