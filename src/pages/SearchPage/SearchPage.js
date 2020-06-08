import React, { useReducer, useEffect, useCallback } from "react";
import { withRouter } from "react-router";

import Search from "components/Search/Search";
import MovieContainer from "components/Movies/MovieContainer";
import Pagination from "components/Pagination/Pagination";
import reducer from "store/reducers/searchMovieReducer";
import { initialState } from "store/initialStates/searchMovie";
import { fetchMovies } from "components/Movies/utils";

const SearchPage = ({ history }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { movies, totalPages, loading, errorMessages } = state;
  const urlObject = new URL(window.location.href);
  const queryText = urlObject.searchParams.get("query");
  const page = urlObject.searchParams.get("page");

  const applyParams = useCallback(
    ({ queryText, page }) => {
      history.push({ search: `?query=${queryText}&page=${page}` });
    },
    [history]
  );

  const search = (text) => {
    applyParams({ queryText: text, page: 1 });
  };

  useEffect(() => {
    if (!queryText && !page) {
      return;
    }
    fetchMovies({ query: queryText, page: page, dispatch: dispatch });
    applyParams({ queryText: queryText, page: page });
  }, [queryText, page, applyParams]);

  if (loading) {
    return <span>loading...</span>;
  }

  if (errorMessages) {
    return errorMessages.map((message, id) => <span key={id}>{message}</span>);
  }

  return (
    <div>
      <Search defaultValue={queryText} onSearch={search} />
      <MovieContainer movies={movies} />
      <Pagination totalPages={totalPages} />
    </div>
  );
};

export default withRouter(SearchPage);
