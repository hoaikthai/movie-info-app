import React, { useReducer, useEffect, useCallback } from "react";
import { withRouter, RouteComponentProps } from "react-router";

import MovieApi from "src/constants/movieApi";
import Search from "src/components/Search/Search";
import MovieContainer from "src/components/Movies/MovieContainer";
import Pagination from "src/components/Pagination/Pagination";
import reducer from "src/store/reducers/searchMovieReducer";
import { initialState } from "src/store/initialStates/searchMovie";
import { fetchMovies } from "src/components/Movies/utils";

interface IQueryParams {
  query: string | null;
  page: string | null;
}

const SearchPage = ({ history }: RouteComponentProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { movies, totalPages, loading, errorMessages } = state;
  const urlObject = new URL(window.location.href);
  const queryParams = urlObject.searchParams.get("query");
  const pageParams = urlObject.searchParams.get("page");
  let movieContent: JSX.Element;

  const applyParams = useCallback(
    ({ query, page }: IQueryParams): void => {
      history.push({ search: `?query=${query}&page=${page}` });
    },
    [history]
  );

  useEffect(() => {
    if (!queryParams && !pageParams) {
      return;
    }
    fetchMovies({
      endpoint: MovieApi.SEARCH_MOVIE_EP,
      query: queryParams,
      page: pageParams,
      dispatch,
    });
    applyParams({ query: queryParams, page: pageParams });
  }, [queryParams, pageParams, applyParams]);

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
