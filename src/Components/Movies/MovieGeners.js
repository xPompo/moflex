import React from "react";
import GallaryOfMovies from "../Home/GallaryOfMovies";
import Pagination from "./Pagination";
import Search from "../Search/Search";

function MovieGeners({
  colorHandler,
  popular,
  baseImgURL,
  watchClickHandler,
  pageHandler,
  isDisabled,
  count,
  title,
}) {
  return (
    <div className="top__rated_movies">
      <div className="container">
        <div className="row my-4 align-items-center">
          <div className="col-6">
            {" "}
            <p className="subtittle__small">Live Streaming</p>
            <h1 className="tittle__small">Movies List</h1>
          </div>
          <div className="col-6">
            <Search title={title} watchClickHandler={watchClickHandler} />
          </div>
        </div>

        <div className="row ">
          {popular.map((item, index) => {
            if (index < 16) {
              return (
                <GallaryOfMovies
                  key={index}
                  poster={item?.poster_path}
                  name={item?.title || item?.original_title || item?.name}
                  date={item?.release_date}
                  count={item?.vote_count}
                  id={item?.id}
                  baseImgURL={baseImgURL}
                  watchClickHandler={watchClickHandler}
                  colorHandler={colorHandler}
                />
              );
            } else return false;
          })}
        </div>
        <Pagination
          pageHandler={pageHandler}
          isDisabled={isDisabled}
          count={count}
        />
      </div>
    </div>
  );
}

export default MovieGeners;
