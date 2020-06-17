import React from "react";

import { MovieModel } from "src/types/movie";
import { mapIdToGenre } from "src/components/Movies/utils";
import "./MovieDetail.scss";

interface IMovieProps {
  movie: MovieModel;
}

const MovieDetail: React.FunctionComponent<IMovieProps> = ({
  movie,
}: IMovieProps) => {
  return (
    <div className="MovieDetail">
      <h4>{movie.title}</h4>
      <ul>
        <li>
          <h5>Release date:</h5>
          <p>{movie.release_date}</p>
        </li>
        <li>
          <h5>Genres:</h5>
          <p>{mapIdToGenre(movie.genre_ids).join(', ')}</p>
        </li>
        <li>
          <h5>Story overview:</h5>
          <p>{movie.overview}</p>
        </li>
      </ul>
    </div>
  );
};

export default MovieDetail;
