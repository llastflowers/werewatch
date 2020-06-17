import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useMovies from '../hooks/useMovies';
import styles from './MovieSearch.css';

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
      <div className={styles.movieItem}>
        <Link className={styles.movieLink} to={`/${movie.id}`}>
          <img className={styles.moviePoster} src={`http://image.tmdb.org/t/p/w780/${movie.poster_path}`} onError={(e)=>{e.target.onerror = null; e.target.src = 'src/assets/movie_placeholder.png';}} />
          <p>{movie.title} ({movie.release_date?.slice(0, 4)})</p>
        </Link>
      </div>
    </li> 
  );
  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input className={styles.search} type='text' placeholder="Search by movie title" value={searchTerm} onChange={({ target }) => setSearchTerm(target.value)} />
        <button className={styles.button}>Search</button>
      </form>
      <ul>
        {searchResults}
      </ul>
    </>
  );
};
export default MovieSearch;
