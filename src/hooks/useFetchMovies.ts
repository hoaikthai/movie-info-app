import { useEffect, useReducer, useCallback } from "react";
import { useHistory } from "react-router";

import reducer from "src/store/reducers/searchMovieReducer";
import { initialState } from "src/store/initialStates/searchMovie";
import { fetchMovies } from "src/components/Movies/utils";

interface ISearchParams {
  query?: string | null;
  page: string | null;
}

const useFetchMovies = (endpoint: string) => {
  const history = useHistory();
  const [state, dispatch] = useReducer(reducer, initialState);
  const { movies, totalPages, loading, errorMessages } = state;
  const urlObject = new URL(window.location.href);
  const pageParams = urlObject.searchParams.get("page") || "1";
  const queryParams = urlObject.searchParams.get("query");

  const applyParams = useCallback(
    (searchParams: ISearchParams): void => {
      const searchString: string = Object.keys(searchParams)
        .map((key: string) => `${key}=${searchParams[key as keyof ISearchParams]}`)
        .join("&");
      history.push({ search: `?${searchString}` });
    },
    [history]
  );

  useEffect(() => {
    const paramsToApply: ISearchParams = {
      query: queryParams,
      page: pageParams,
    };
    Object.keys(paramsToApply).forEach(
      (key: string) =>
        paramsToApply[key as keyof ISearchParams] == null &&
        delete paramsToApply[key as keyof ISearchParams]
    );
    fetchMovies({ endpoint, dispatch, ...paramsToApply });
    applyParams(paramsToApply);
  }, [pageParams, queryParams, endpoint, applyParams]);

  return { loading, errorMessages, totalPages, movies };
};

export default useFetchMovies;
