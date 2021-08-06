import React from "react";
import GallaryOfMovies from "./GallaryOfMovies";
import useFetch from "../../hooks/use-fetch";

function TopratedMovies() {
  const { popular, baseImgURL } = useFetch();

  return (
    <div className="top__rated_movies">
      <div className="container">
        <div className="row mt-4">
          <p className="subtittle__small">Live Streaming</p>
          <h1 className="tittle__small">Top Rated Movies</h1>
        </div>
        <div className="row">
          {popular.map((item, index) => {
            if (index < 8) {
              return (
                <GallaryOfMovies
                  key={index}
                  poster={item?.poster_path}
                  name={item?.title || item?.original_title || item?.name}
                  date={item?.release_date}
                  count={item?.vote_count}
                  id={item?.id}
                  baseImgURL={baseImgURL}
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
