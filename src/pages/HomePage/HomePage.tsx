import React from "react";
import { withRouter } from "react-router";

import MovieApi from "src/constants/movieApi";
import Search from "src/components/Search/Search";
import MovieContainer from "src/components/Movies/MovieContainer";
import useFetchMovie from "src/hooks/useFetchMovie";

const HomePage: React.FunctionComponent = () => {
  const { movies, totalPages, loading, errorMessages } = useFetchMovie(MovieApi.POPULAR_MOVIE_EP);

  return (
    <div>
      <Search />
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
