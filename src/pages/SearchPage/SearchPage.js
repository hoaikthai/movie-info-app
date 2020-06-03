import React, { useReducer, useEffect } from "react";
import { withRouter } from "react-router";
import * as qs from "query-string";

import Search from "components/Search/Search";
import MovieContainer from "components/Movies/MovieContainer";
import Pagination from "components/Pagination/Pagination";
import reducer from "store/reducers/searchMovieReducer";
import { initialState } from "store/initialStates/searchMovie";
import { fetchMovies } from "components/Movies/utils";

const SearchPage = ({ history, location }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { movies, totalPages, loading, errorMessages } = state;
  const queryParams = location.search;

  const search = (text) => {
    history.push({ search: `?query=${text}&page=1` });
  };

  useEffect(() => {
    const parsedParams = qs.parse(queryParams);
    const { query, page } = parsedParams;
    if (query === undefined || page === undefined) {
      return;
    }
    fetchMovies({ ...parsedParams, dispatch: dispatch });
    history.push({ search: `?query=${query}&page=${page}` });
  }, [queryParams]);

  return (
    <div>
      <Search search={search} />
      {loading ? (
        <span>loading...</span>
      ) : errorMessages ? (
        errorMessages.map((message, id) => <span key={id}>{message}</span>)
      ) : (
        <>
          <MovieContainer movies={movies} />
          <Pagination totalPages={totalPages} />
        </>
      )}
    </div>
  );
};

export default withRouter(SearchPage);
