import React from "react";
import { withRouter } from "react-router";

import MovieApi from "src/constants/movieApi";
import MovieContainer from "src/components/Movies/MovieContainer";
import useFetchMovies from "src/hooks/useFetchMovies";

const HomePage: React.FunctionComponent = () => {
  const { movies, totalPages, loading, errorMessages } = useFetchMovies(MovieApi.POPULAR_MOVIE_EP);

  return (
    <div>
      <MovieContainer
        title="Popular movies"
        movies={movies}
        loading={loading}
        errorMessages={errorMessages}
        totalPages={totalPages}
      />
    </div>
  );
};

export default withRouter(HomePage);
