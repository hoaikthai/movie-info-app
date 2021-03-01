import { useCallback, useEffect, useState } from "react";
import HttpStatus from "src/constants/httpStatus";
import MovieApi from "src/constants/movieApi";
import { ErrorResponse } from "src/types/errorResponse";
import { FetchMovieDetailResponse } from "src/types/fetchMovieResponse";
import { MovieDetail } from "src/types/movieDetail";

const useFetchMovieDetail = (id: string) => {
  const [movie, setMovie] = useState<MovieDetail>();
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState<ErrorResponse>();

  const fetchMovie = useCallback(async () => {
    setStatus("requesting");
    const response: Response = await fetch(
      `${MovieApi.HOST}${MovieApi.DETAIL_MOVIE_EP}${id}?api_key=${MovieApi.KEY}`
    );
    const jsonResponse: FetchMovieDetailResponse = await response.json();
    if (response.status === HttpStatus.OK) {
      setMovie(jsonResponse as MovieDetail);
      setStatus("success");
    } else {
      setError(jsonResponse as ErrorResponse);
      setStatus("error");
    }
  }, [id]);

  useEffect(() => {
    fetchMovie();
  }, [fetchMovie]);

  return { movie, status, error };
};

export default useFetchMovieDetail;
