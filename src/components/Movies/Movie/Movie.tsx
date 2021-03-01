import React, { useState } from "react";
import { Link } from "react-router-dom";

import { DEFAULT_POSTER, MOVIE_POSTER_URL_W200 } from "src/constants/moviePoster";
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
    ? `${MOVIE_POSTER_URL_W200}${movie.poster_path}`
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
      <Link to={`/movies/${movie.id}`} className="link"><h4>{movie.title}</h4></Link>
    </div>
  );
};

export default Movie;
