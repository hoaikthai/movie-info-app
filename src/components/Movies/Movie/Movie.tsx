import React from "react";

import { DEFAULT_POSTER, MOVIE_POSTER_URL } from "src/constants/moviePoster";
import { MovieModel } from "src/types/movie";
import "./Movie.scss";

interface IMovieProps {
  movie: MovieModel;
}

const Movie: React.FunctionComponent<IMovieProps> = ({ movie }: IMovieProps) => {
  const poster: string = movie.poster_path
    ? `${MOVIE_POSTER_URL}${movie.poster_path}`
    : DEFAULT_POSTER;
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
