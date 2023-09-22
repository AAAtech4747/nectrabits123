import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from './movieActions';

function MovieList() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  // Render your movie list using the 'movies' data

  return (
    <div>
      {/* Movie list rendering */}
    </div>
  );
}

export default MovieList;