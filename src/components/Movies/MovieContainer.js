import React from "react";
import Movie from "./Movie/Movie";
import "./MovieContainer.scss";

const MovieContainer = ({ movies }) => {
  let moviesContent = "No movie";

  if (movies?.length > 0) {
    moviesContent = movies.map((movie) => (
      <Movie key={movie.id} movie={movie} />
    ));
  }

  return <div className="MovieContainer">{moviesContent}</div>;
};

export default MovieContainer;
