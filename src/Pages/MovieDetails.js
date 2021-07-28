import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function MovieDetails() {
  const baseImgURL = "https://image.tmdb.org/t/p/original";
  const [storeMovieData, setStoreMovieData] = useState([]);
  const movieData = useSelector((state) => state.indexRed.AllData);
  useEffect(() => {
    setStoreMovieData(movieData);
  }, [movieData]);
  return (
    <div className="movieDetails__bg">
      <div className="container">
        <div className="row">
          <div className="col">
            <img
              className="movieDetails__poster"
              src={`${baseImgURL}${storeMovieData?.backdrop_path}`}
              alt="aa"
              width={500}
            />
          </div>
          <div className="col">
            <h1 className="movieDetails__tittle">
              {storeMovieData?.original_title ||
                storeMovieData?.title ||
                storeMovieData?.name}
            </h1>
            <p className="movieDetails__subtittle">
              {storeMovieData?.overview}
            </p>
            <p className="movieDetails__date">{storeMovieData?.release_date}</p>
            <p className="movieDetails__rate">
              <span>10 / </span>
              {storeMovieData?.vote_average}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
