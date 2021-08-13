import React from "react";
import MovieBanner from "../Components/Movies/MovieBanner";
import MovieRow from "../Components/Movies/MovieRow";
import MovieGeners from "../Components/Movies/MovieGeners";
import LatestNews from "../Components/Home/LatestNews";
import Footer from "../Components/Footer/Footer";
import useFetch from "../hooks/use-fetch";

function MoviesPage() {
  const {
    baseImgURL,
    latest,
    trending,
    upComing,
    popular,
    isDisabled,
    count,
    colorHandler,
    watchClickHandler,
    pageHandler,
  } = useFetch();
  return (
    <div>
      <MovieBanner latest={latest} baseImgURL={baseImgURL} />
      <MovieRow
        title="New movies"
        upComing={upComing}
        baseImgURL={baseImgURL}
        watchClickHandler={watchClickHandler}
      />
      <MovieGeners
        colorHandler={colorHandler}
        popular={popular}
        baseImgURL={baseImgURL}
        watchClickHandler={watchClickHandler}
        pageHandler={pageHandler}
        isDisabled={isDisabled}
        count={count}
      />
      <LatestNews />
      <Footer baseImgURL={baseImgURL} trending={trending} />
    </div>
  );
}

export default MoviesPage;
