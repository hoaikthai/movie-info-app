import React, { useReducer } from "react";
import "./App.css";
import Header from "./Header";
import Search from "components/Search/Search";
import MovieContainer from "components/Movies/MovieContainer";
import { MOVIE_API_KEY, SEARCH_MOVIE_API_URL } from "constants/movieApi";
import {
  SEARCH_MOVIE_REQUEST,
  SEARCH_MOVIE_SUCCESS,
  SEARCH_MOVIE_FAILURE,
} from "constants/actionTypes";
import reducer from "store/reducers/searchMovieReducer";

const initialState = {
  loading: false,
  movies: [],
  page: 1,
  totalPage: 1,
  errorMessages: null,
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { movies, loading, errorMessages } = state;

  const search = (text) => {
    dispatch({ type: SEARCH_MOVIE_REQUEST });
    fetch(`${SEARCH_MOVIE_API_URL}?query=${text}&api_key=${MOVIE_API_KEY}`)
      .then((response) => response.json())
      .then((jsonResponse) => {
        dispatch({
          type: jsonResponse.results
            ? SEARCH_MOVIE_SUCCESS
            : SEARCH_MOVIE_FAILURE,
          payload: jsonResponse,
        });
      });
  };

  return (
    <div className="App">
      <Header />
      <Search search={search} />
      {loading ? (
        <span>loading...</span>
      ) : errorMessages ? (
        errorMessages.map((message) => <span>{message}</span>)
      ) : (
        <MovieContainer movies={movies} />
      )}
    </div>
  );
};

export default App;
