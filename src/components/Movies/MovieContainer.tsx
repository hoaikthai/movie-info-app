import React from "react";
import Movie from "./Movie/Movie";
import "./MovieContainer.scss";
import { MovieModel } from "src/types/movie";

interface IMovieContainerProps {
  title: string;
  movies: MovieModel[];
}

const MovieContainer: React.FunctionComponent<IMovieContainerProps> = ({
  title,
  movies,
}: IMovieContainerProps) => {
  let moviesContent: string | JSX.Element[] = "No movie";

  if (movies?.length > 0) {
    moviesContent = movies.map((movie: MovieModel) => (
      <Movie key={movie.id} movie={movie} />
    ));
  }

  return (
    <div className="MovieContainer">
      <h3 className="MovieContainer__title">{title}</h3>
      <div className="MovieContainer__content">{moviesContent}</div>
    </div>
  );
};

export default MovieContainer;
