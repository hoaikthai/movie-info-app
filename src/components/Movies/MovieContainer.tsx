import React from "react";
import { Link } from "react-router-dom";

import Movie from "./Movie/Movie";
import "./MovieContainer.scss";
import { MovieModel } from "src/types/movie";
import Pagination from "src/components/Pagination/Pagination";

interface IMovieContainerProps {
  title: string;
  movies: MovieModel[];
  loading: boolean;
  errorMessages: string[] | null;
  totalPages: number;
}

const MovieContainer: React.FunctionComponent<IMovieContainerProps> = ({
  title,
  movies,
  loading,
  errorMessages,
  totalPages,
}: IMovieContainerProps) => {
  let moviesContent: string | JSX.Element[] = "No movie";
  const backToHomeLink = <Link to="/" className="link home-link">Back to popular movies</Link>;

  if (loading) {
    return <span>loading...</span>;
  } else if (errorMessages) {
    return (
      <>
        {errorMessages.map((message: string, id: number) => (
          <span key={id}>{message}</span>
        ))}
        <br />
        {backToHomeLink}
      </>
    );
  } else if (movies?.length === 0) {
    return backToHomeLink;
  }

  if (movies?.length > 0) {
    moviesContent = movies.map((movie: MovieModel) => (
      <Movie key={movie.id} movie={movie} />
    ));
  }

  return (
    <div className="MovieContainer">
      <h3 className="MovieContainer__title">{title}</h3>
      <div className="MovieContainer__content">{moviesContent}</div>
      <Pagination totalPages={totalPages} />
    </div>
  );
};

export default MovieContainer;
