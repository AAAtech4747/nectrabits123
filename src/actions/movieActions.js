// movieActions.js
export const fetchMovies = () => {
    // You can fetch movie data from an API or provide it statically here
    return {
      type: 'FETCH_MOVIES',
      payload: { movies: [] }, // Replace with actual movie data
    };
  };