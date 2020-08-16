export const getMovies = (query) => {
  // eslint-disable-next-line
  return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.TMDB_API_KEY}&query=${query}`)
    .then(res => res.json());
};

export const getDetails = (movie_id) => {
  // eslint-disable-next-line
  return fetch(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${process.env.TMDB_API_KEY}&language=en-US`)
    .then(res => res.json());
};

export const getProviders = (movie_id) => {
  return fetch(`https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/idlookup?country=us&source_id=${movie_id}&source=tmdb`, {
    'method': 'GET',
    'headers': {
      'x-rapidapi-host': 'utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com',
      // eslint-disable-next-line
      'x-rapidapi-key': `${process.env.UTELLY_API_KEY}`
    }
  })
    .then(res => res.json());
};
