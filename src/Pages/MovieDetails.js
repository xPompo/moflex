import React, { useEffect } from "react";
import Nav from "../Components/Home/Nav";
import useFetch from "../hooks/use-fetch";
import MovieDetailsBody from "../Components/movieDetails/MovieDetailsBody";
import MovieRow from "../Components/Movies/MovieRow";

function MovieDetails() {
  const {
    storeMovieImages,
    titleMovieDetails,
    overview,
    date,
    vote,
    storeID,
    related,
    baseImgURL,
    watchClickHandler,
  } = useFetch();
  //---- Onreload data no lose  ----//
  useEffect(() => {
    return storeID;
  }, []);
  //---- id useEffect Function ----//
  useEffect(() => {
    return storeID;
  }, [storeID]);

  return (
    <>
      <Nav />
      <MovieDetailsBody
        baseImgURL={baseImgURL}
        title={titleMovieDetails}
        overview={overview}
        date={date}
        vote={vote}
        storeMovieImages={storeMovieImages}
      ></MovieDetailsBody>
      <MovieRow
        title="Related Movies"
        upComing={related}
        baseImgURL={baseImgURL}
        watchClickHandler={watchClickHandler}
      />
    </>
  );
}

export default MovieDetails;
