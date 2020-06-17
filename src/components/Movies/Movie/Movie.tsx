import React, { useState } from "react";

import { DEFAULT_POSTER, MOVIE_POSTER_URL } from "src/constants/moviePoster";
import { MovieModel } from "src/types/movie";
import MovieDetail from "./MovieDetail/MovieDetail";
import "./Movie.scss";

interface IMovieProps {
  movie: MovieModel;
}

const Movie: React.FunctionComponent<IMovieProps> = ({
  movie,
}: IMovieProps) => {
  const [showDetail, setShowDetail] = useState(false);
  const poster: string = movie.poster_path
    ? `${MOVIE_POSTER_URL}/k0b33UJhJWC0TUjJGnQPm4spVaf.jpg`
    : DEFAULT_POSTER;

  return (
    <div
      className="Movie"
      onMouseEnter={() => setShowDetail(true)}
      onMouseLeave={() => setShowDetail(false)}
    >
      {showDetail && <MovieDetail movie={movie} />}
      <img
        width="200"
        height="300"
        alt={`The movie title: ${movie.title}`}
        src={poster}
      />
      <h4>{movie.title}</h4>
    </div>
  );
};

export default Movie;
