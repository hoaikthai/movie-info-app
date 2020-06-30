import React from "react";
import { withRouter } from "react-router";

import MovieApi from "src/constants/movieApi";
import Search from "src/components/Search/Search";
import MovieContainer from "src/components/Movies/MovieContainer";
import Pagination from "src/components/Pagination/Pagination";
import useFetchMovie from "src/hooks/useFetchMovie";

const SearchPage: React.FunctionComponent = () => {
  const urlObject = new URL(window.location.href);
  const queryParams = urlObject.searchParams.get("query");
  const { movies, totalPages, loading, errorMessages } = useFetchMovie(MovieApi.SEARCH_MOVIE_EP);
  let movieContent: JSX.Element;

  if (loading) {
    movieContent = <span>loading...</span>;
  } else if (errorMessages) {
    movieContent = (
      <>
        {errorMessages.map((message: string, id: number) => (
          <span key={id}>{message}</span>
        ))}
      </>
    );
  } else {
    movieContent = (
      <>
        <MovieContainer title="Search result" movies={movies} />
        <Pagination totalPages={totalPages} />
      </>
    );
  }

  return (
    <div>
      <Search defaultValue={queryParams} />
      {movieContent}
    </div>
  );
};

export default withRouter(SearchPage);
