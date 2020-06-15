export const getMovies = (query) => {
  // eslint-disable-next-line
  return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.TMDB_API_KEY}&query=${query}`)
    .then(res => res.json());
};

// export const getProviders = (movieid) => {
//   return fetch('')
//     .then(res => res.json());
// };
