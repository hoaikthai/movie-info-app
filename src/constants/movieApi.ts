const MovieApi = {
  KEY: process.env.REACT_APP_MOVIE_API_KEY,
  HOST: "https://api.themoviedb.org/3",
  SEARCH_MOVIE_EP: "/search/movie",
  POPULAR_MOVIE_EP: "/movie/popular",
}

export default MovieApi;
