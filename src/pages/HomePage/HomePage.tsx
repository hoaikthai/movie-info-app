import React from "react";
import { withRouter } from "react-router";

import MovieApi from "src/constants/movieApi";
import Search from "src/components/Search/Search";
import MovieContainer from "src/components/Movies/MovieContainer";
import Pagination from "src/components/Pagination/Pagination";
import useFetchMovie from "src/hooks/useFetchMovie";

const HomePage: React.FunctionComponent = () => {
  const { movies, totalPages, loading, errorMessages } = useFetchMovie(MovieApi.POPULAR_MOVIE_EP);
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
