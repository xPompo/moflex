import React, { useEffect, useState } from "react";
import GallaryOfMovies from "./GallaryOfMovies";
import axios from "../../axios/axios";

function TopratedMovies({ fethchTrendingMoviesPage2 }) {
  const [topMovies, setTopMovies] = useState([]);

  useEffect(() => {
    axios(fethchTrendingMoviesPage2).then((res) => {
      console.log(res.data.results);
      return setTopMovies(res.data.results);
    });
  }, [fethchTrendingMoviesPage2]);

  return (
    <div className="top__rated_movies">
      <div className="container">
        <div className="row mt-4">
          <p className="subtittle__small">Live Streaming</p>
          <h1 className="tittle__small">Top Rated Movies</h1>
        </div>
        <div className="row">
          {topMovies.map((item, index) => {
            if (index < 8) {
              return (
                <GallaryOfMovies
                  key={index}
                  poster={item?.poster_path}
                  name={item?.title || item?.original_title || item?.name}
                  date={item?.release_date}
                  count={item?.vote_count}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default TopratedMovies;
