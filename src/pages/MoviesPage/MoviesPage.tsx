import React from "react";
import { withRouter } from "react-router";

import MovieApi from "src/constants/movieApi";
import Search from "src/components/Search/Search";
import MovieContainer from "src/components/Movies/MovieContainer";
import useFetchMovie from "src/hooks/useFetchMovie";

const MoviesPage: React.FunctionComponent = () => {
  const urlObject = new URL(window.location.href);
  const queryParams = urlObject.searchParams.get("query");
  const { movies, totalPages, loading, errorMessages } = useFetchMovie(MovieApi.SEARCH_MOVIE_EP);

  return (
    <div>
      <Search defaultValue={queryParams} />
      <MovieContainer
        title="Search result"
        movies={movies}
        loading={loading}
        errorMessages={errorMessages}
        totalPages={totalPages}
      />
    </div>
  );
};

export default withRouter(MoviesPage);
