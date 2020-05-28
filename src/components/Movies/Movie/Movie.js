import React from "react";

import { DEFAULT_POSTER, MOVIE_POSTER_URL } from "constants/moviePoster";
import "./Movie.scss";

const Movie = ({ movie }) => {
  const poster =
    movie.poster_path === null
      ? DEFAULT_POSTER
      : `${MOVIE_POSTER_URL}${movie.poster_path}`;
  return (
    <div className="Movie">
      <div>
        <img
          width="200"
          height="300"
          alt={`The movie title: ${movie.title}`}
          src={poster}
        />
      </div>
      <h4>{movie.title}</h4>
    </div>
  );
};

export default Movie;
