import React, { useEffect } from "react";
import Nav from "../Components/Home/Nav";
import useFetch from "../hooks/use-fetch";
import MovieDetailsBody from "../Components/movieDetails/MovieDetailsBody";
import MovieRow from "../Components/Movies/MovieRow";
import Footer from "../Components/Footer/Footer";

function MovieDetails() {
  const {
    trending,
    storeMovieImages,
    titleMovieDetails,
    overview,
    date,
    vote,
    storeID,
    related,
    baseImgURL,
    videoEnable,
    watchClickHandler,
    closeVideoHandler,
    playTrailerVideoHandler,
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
    <div className="movieDetails__page">
      <div className="main__bg"></div>
      <Nav />
      <MovieDetailsBody
        baseImgURL={baseImgURL}
        titleMovieDetails={titleMovieDetails}
        overview={overview}
        date={date}
        vote={vote}
        storeMovieImages={storeMovieImages}
        videoEnable={videoEnable}
        closeVideoHandler={closeVideoHandler}
        playTrailerVideoHandler={playTrailerVideoHandler}
      />
      <MovieRow
        title="Related Movies"
        upComing={related}
        baseImgURL={baseImgURL}
        watchClickHandler={watchClickHandler}
      />
      <Footer baseImgURL={baseImgURL} trending={trending} />
    </div>
  );
}

export default MovieDetails;
