import React from "react";
import MovieBanner from "../Components/Movies/MovieBanner";
import MovieRow from "../Components/Movies/MovieRow";
import MovieGeners from "../Components/Movies/MovieGeners";
import LatestNews from "../Components/Home/LatestNews";
import Footer from "../Components/Footer/Footer";
import useFetch from "../hooks/use-fetch";

function MoviesPage() {
  const { latest, upComing, baseImgURL, watchClickHandler } = useFetch();
  return (
    <div>
      <MovieBanner latest={latest} baseImgURL={baseImgURL} />
      <MovieRow
        title="New movies"
        upComing={upComing}
        baseImgURL={baseImgURL}
        watchClickHandler={watchClickHandler}
      />
      <MovieGeners />
      <LatestNews />
      <Footer />
    </div>
  );
}

export default MoviesPage;
