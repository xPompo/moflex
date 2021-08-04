import React from "react";
import MovieBanner from "../Components/Movies/MovieBanner";
import Header from "../Components/Home/Header";
import MovieRow from "../Components/Movies/MovieRow";

function MoviesPage({ fethchTrendingMovies }) {
  return (
    <div>
      <Header />
      <MovieBanner fethchTrendingMovies={fethchTrendingMovies} />
      <MovieRow title="Popular movies" />
    </div>
  );
}

export default MoviesPage;
