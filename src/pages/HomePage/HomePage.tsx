import React, { useEffect, useReducer } from "react";
import { withRouter, RouteComponentProps } from "react-router";

import MovieApi from "src/constants/movieApi";
import Search from "src/components/Search/Search";
import MovieContainer from "src/components/Movies/MovieContainer";
import Pagination from "src/components/Pagination/Pagination";
import reducer from "src/store/reducers/searchMovieReducer";
import { initialState } from "src/store/initialStates/searchMovie";
import { fetchMovies } from "src/components/Movies/utils";

const HomePage: React.FunctionComponent<RouteComponentProps> = ({
  history,
}: RouteComponentProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { movies, totalPages, loading, errorMessages } = state;
  const urlObject = new URL(window.location.href);
  const pageParams = urlObject.searchParams.get("page") || "1";
  let movieContent: JSX.Element;

  useEffect(() => {
    fetchMovies({
      endpoint: MovieApi.POPULAR_MOVIE_EP,
      page: pageParams,
      dispatch,
    });
    history.push({ search: `?page=${pageParams}` });
  }, [pageParams]);

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
        <MovieContainer title="Popular movies" movies={movies} />
        <Pagination totalPages={totalPages} />
      </>
    );
  }

  return (
    <div>
      <Search />
      {movieContent}
    </div>
  );
};

export default withRouter(HomePage);
