import React from "react";
import { useParams } from "react-router";
import Rating from "@material-ui/lab/Rating";
import "./MovieDetailPage.scss";
import useFetchMovieDetail from "src/hooks/useFetchMovieDetail";
import { MOVIE_POSTER_URL } from "src/constants/moviePoster";
import { Link } from "react-router-dom";
import { ArrowBack } from "@material-ui/icons";

const MovieDetailPage: React.FunctionComponent = () => {
  const { id } = useParams<{ id: string }>();
  const { movie, status, error } = useFetchMovieDetail(id);
  const RATING_PRECISION = 0.2;

  if (error) {
    return <span>Error fetching movie</span>;
  }

  if (status === "requesting") {
    return <span>Fetching...</span>;
  }
  const movieRating = movie?.vote_average || 0;

  return (
    <div
      className="MovieDetailPage"
      style={{
        backgroundImage: `url('${MOVIE_POSTER_URL}${movie?.backdrop_path}')`,
      }}
    >
      <div className="MovieBackdrop">
        <Link to="/">
          <ArrowBack fontSize="large" />
        </Link>
        <h2>{movie?.title}</h2>
        <span>({movie?.release_date})</span>
        <Rating
          name="read-only"
          value={movieRating / 2}
          precision={RATING_PRECISION}
          readOnly
          size="large"
        />
        <span>{movieRating}</span>
        <ul className="InfoList">
          <li className="InfoList__Item">
            <h4>Genre: </h4>
            <span>{movie?.genres.map((genre) => genre.name).join(", ")}</span>
          </li>
          <li className="InfoList__Item">
            <h4>Official Website: </h4>{" "}
            <span>
              <a href={movie?.homepage || "#"} className="InfoList__Link">
                {movie?.homepage}
              </a>
            </span>
          </li>
          <li className="InfoList__Item">
            <h4>Countries/Regions: </h4>
            <span>
              {movie?.production_countries
                .map((country) => country.name)
                .join(", ")}
            </span>
          </li>
          <li className="InfoList__Item">
            <h4>Language: </h4>
            <span>{movie?.spoken_languages.map((lang) => lang.name).join(', ')}</span>
          </li>
          <li className="InfoList__Item">
            <h4>Release date: </h4>
            <span>{movie?.release_date}</span>
          </li>
          <li className="InfoList__Item">
            <h4>Production Companies: </h4>
            <span>{movie?.production_companies.map((com) => com.name).join(', ')}</span>
          </li>
          <li className="InfoList__Item">
            <h4>Budget: </h4>
            <span>USD {movie?.budget}</span>
          </li>
        </ul>
        <h3>Synopsis</h3>
        <p>{movie?.overview}</p>
      </div>
    </div>
  );
};

export default MovieDetailPage;
