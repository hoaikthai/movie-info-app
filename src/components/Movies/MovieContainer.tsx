import React from "react";
import Movie from "./Movie/Movie";
import "./MovieContainer.scss";
import { MovieModel } from "src/types/movie";

interface IMovieContainerProps {
  movies: MovieModel[];
}

const MovieContainer: React.FunctionComponent<IMovieContainerProps> = ({ movies }: IMovieContainerProps) => {
  let moviesContent: string | JSX.Element[] = "No movie";

  if (movies?.length > 0) {
    moviesContent = movies.map((movie: MovieModel) => (
      <Movie key={movie.id} movie={movie} />
    ));
  }

  return <div className="MovieContainer">{moviesContent}</div>;
};

export default MovieContainer;
