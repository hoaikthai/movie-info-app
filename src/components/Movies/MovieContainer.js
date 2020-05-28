import React from "react";
import Movie from "./Movie/Movie";
import "./MovieContainer.scss";

const MovieContainer = (props) => {
  const moviesContent =
    props.movies !== undefined
      ? props.movies.map((movie) => <Movie key={movie.id} movie={movie} />)
      : "No movie";
  return (
    <div className="MovieContainer">
      {moviesContent}
    </div>
  );
};

export default MovieContainer;
