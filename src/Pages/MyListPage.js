import React, { useEffect } from "react";
import Header from "../Components/Home/Header";
import Nav from "../Components/Home/Nav";
import MovieListItem from "../Components/Mylist/MovieListItem";
import useFetch from "../hooks/use-fetch";

function MyListPage() {
  const {
    storeMovieImages,
    titleMovieDetails,
    overview,
    date,
    vote,
    storeID,
    baseImgURL,
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
    <div className="mylistpage">
      <Header />
      <Nav />
      <MovieListItem
        baseImgURL={baseImgURL}
        title={titleMovieDetails}
        overview={overview}
        date={date}
        vote={vote}
        storeMovieImages={storeMovieImages}
      />
      <MovieListItem
        baseImgURL={baseImgURL}
        title={titleMovieDetails}
        overview={overview}
        date={date}
        vote={vote}
        storeMovieImages={storeMovieImages}
      />
    </div>
  );
}

export default MyListPage;
