// const API_KEY = process.env.TMDB_API_KEY;

export const getMovies = (query) => {
  return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${}&query=${query}`)
    .then(res => res.json());
};

// export const getProviders = (movieid) => {
//   return fetch('')
//     .then(res => res.json());
// };
